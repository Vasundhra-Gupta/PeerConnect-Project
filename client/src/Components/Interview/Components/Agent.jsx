import { useState, useEffect, useRef } from 'react';
import { vapi } from '../Lib/vapi.js';
import { useNavigate } from 'react-router-dom';

export default function Agent({ userName, interviewId, questions }) {
    const [callStatus, setCallStatus] = useState('INACTIVE');
    const [agentMessage, setAgentMessage] = useState(''); // AI speaker text
    const [userMessage, setUserMessage] = useState(''); // User speech text
    const [agentSpeaking, setAgentSpeaking] = useState(false);
    const [userSpeaking, setUserSpeaking] = useState(false);
    const clearMessageTimeout = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallStart = () => setCallStatus('ACTIVE');
        const handleCallEnd = () => {
            setCallStatus('FINISHED');
            setAgentSpeaking(false);
            setUserSpeaking(false);
        };

        const handleMessage = (message) => {
            if (
                message.type === 'transcript' &&
                message.transcriptType === 'final'
            ) {
                setUserMessage(message.transcript);
            } else if (message.type === 'agent-text') {
                setAgentMessage(message.text);
            }
        };

        const handleSpeechStart = (event) => {
            if (event?.speaker === 'agent') {
                setAgentSpeaking(true);
                setUserSpeaking(false);
            } else if (event?.speaker === 'user') {
                setUserSpeaking(true);
                setAgentSpeaking(false);
            } else {
                setAgentSpeaking(true);
                setUserSpeaking(false);
            }
            if (clearMessageTimeout.current) {
                clearTimeout(clearMessageTimeout.current);
                clearMessageTimeout.current = null;
            }
        };

        const handleSpeechEnd = (event) => {
            if (event?.speaker === 'agent') {
                setAgentSpeaking(false);
            } else if (event?.speaker === 'user') {
                setUserSpeaking(false);
            } else {
                setAgentSpeaking(false);
                setUserSpeaking(false);
            }

            clearMessageTimeout.current = setTimeout(() => {
                setAgentMessage('');
                setUserMessage('');
            }, 2500);
        };

        vapi.on('call-start', handleCallStart);
        vapi.on('call-end', handleCallEnd);
        vapi.on('message', handleMessage);
        vapi.on('speech-start', handleSpeechStart);
        vapi.on('speech-end', handleSpeechEnd);

        return () => {
            vapi.off('call-start', handleCallStart);
            vapi.off('call-end', handleCallEnd);
            vapi.off('message', handleMessage);
            vapi.off('speech-start', handleSpeechStart);
            vapi.off('speech-end', handleSpeechEnd);
            if (clearMessageTimeout.current)
                clearTimeout(clearMessageTimeout.current);
        };
    }, []);

    const startCall = async () => {
        setCallStatus('CONNECTING');
        await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID, {
            variableValues: {
                username: userName,
                questions: questions.join('\n'),
            },
        });
    };

    const endCall = () => {
        vapi.stop();
        setCallStatus('FINISHED');
        setAgentSpeaking(false);
        setUserSpeaking(false);
        navigate('/interview');
    };

    const SpeakingIndicator = ({ isSpeaking }) => (
        <span
            className={`inline-block w-3 h-3 rounded-full ml-2 ${
                isSpeaking ? 'bg-green-400 animate-ping' : 'bg-zinc-600'
            }`}
            style={{ animationDuration: '1.5s' }}
            aria-label={isSpeaking ? 'Speaking' : 'Not speaking'}
            title={isSpeaking ? 'Speaking' : 'Not speaking'}
        />
    );

    return (
        <div className="p-6 bg-zinc-900 text-white rounded-xl max-w-4xl mx-auto flex flex-col gap-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                    AI Interviewer
                    <SpeakingIndicator isSpeaking={agentSpeaking} />
                </h3>

                {(agentSpeaking || userSpeaking) && (
                    <p className="text-green-400 text-sm">Speaking…</p>
                )}

                <h3 className="text-lg font-semibold flex items-center">
                    {userName}
                    <SpeakingIndicator isSpeaking={userSpeaking} />
                </h3>
            </div>

            {/* Speaker windows */}
            <div className="flex gap-6">
                {/* Agent window */}
                <div className="flex-1 bg-zinc-800 rounded-lg p-4 min-h-[150px] flex flex-col justify-center shadow-lg">
                    <h4 className="text-center font-semibold mb-2 flex justify-center items-center">
                        Interviewer
                        <SpeakingIndicator isSpeaking={agentSpeaking} />
                    </h4>
                    <p className="text-center text-lg">
                        {agentMessage || 'Waiting for AI...'}
                    </p>
                </div>

                {/* User window */}
                <div className="flex-1 bg-zinc-800 rounded-lg p-4 min-h-[150px] flex flex-col justify-center shadow-lg">
                    <h4 className="text-center font-semibold mb-2 flex justify-center items-center">
                        You
                        <SpeakingIndicator isSpeaking={userSpeaking} />
                    </h4>
                    <p className="text-center text-lg">
                        {userMessage || 'Waiting for you to speak...'}
                    </p>
                </div>
            </div>

            {/* Text stripe below */}
            <div className="bg-green-700 rounded px-4 py-2 text-center text-white font-medium text-lg shadow-md">
                {agentMessage || userMessage || 'No conversation yet.'}
            </div>

            {/* Call Controls */}
            <div className="text-center">
                {callStatus !== 'ACTIVE' ? (
                    <button
                        onClick={startCall}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full"
                        disabled={callStatus === 'CONNECTING'}
                    >
                        {callStatus === 'CONNECTING'
                            ? 'Connecting...'
                            : 'Start Interview'}
                    </button>
                ) : (
                    <button
                        onClick={endCall}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full"
                    >
                        End Interview
                    </button>
                )}
            </div>
        </div>
    );
}
