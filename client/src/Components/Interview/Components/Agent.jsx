import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { vapi } from '../Lib/vapi';
import { Button } from '@/Components';
import toast from 'react-hot-toast';

const CallStatus = {
    INACTIVE: 'INACTIVE',
    CONNECTING: 'CONNECTING',
    ACTIVE: 'ACTIVE',
    FINISHED: 'FINISHED',
    FAILED: 'FAILED',
};

export default function Agent({ userName, interview }) {
    const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
    const [messages, setMessages] = useState([]);
    const [lastMessage, setLastMessage] = useState('');
    const [agentSpeaking, setAgentSpeaking] = useState(false);
    const [userSpeaking, setUserSpeaking] = useState(false);
    const clearMessageTimeout = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => {
            setCallStatus(CallStatus.FINISHED);
            setAgentSpeaking(false);
            setUserSpeaking(false);
        };

        const onMessage = (message) => {
            if (
                message.type === 'transcript' &&
                message.transcriptType === 'final'
            ) {
                const newMessage = {
                    role: message.role,
                    content: message.transcript,
                };
                setMessages((prev) => [...prev, newMessage]);
            }
        };

        const onSpeechStart = (event) => {
            if (event?.speaker === 'agent') {
                setAgentSpeaking(true);
                setUserSpeaking(false);
            } else if (event?.speaker === 'user') {
                setUserSpeaking(true);
                setAgentSpeaking(false);
            }
        };

        const onSpeechEnd = (event) => {
            if (event?.speaker === 'agent') {
                setAgentSpeaking(false);
            } else if (event?.speaker === 'user') {
                setUserSpeaking(false);
            }
        };

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
            if (clearMessageTimeout.current) {
                clearTimeout(clearMessageTimeout.current);
            }
        };
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            setLastMessage(messages[messages.length - 1].content);
        }
    }, [messages]);

    const startCall = async () => {
        try {
            setCallStatus(CallStatus.CONNECTING);

            const questionsToUse =
                interview.type === 'Custom'
                    ? [
                          `1. Tell me about your experience as a ${interview.role}`,
                          `2. What challenges have you faced in ${interview.role} roles?`,
                          `3. How do you stay updated with the latest trends in ${interview.role}?`,
                          `4. Describe a successful project related to ${interview.role} you worked on.`,
                          `5. What technical skills do you think are most important for a ${interview.role}?`,
                      ].join('\n')
                    : interview.questions.join('\n');

            await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID, {
                variableValues: {
                    questions: questionsToUse,
                    role: interview.role, 
                },
            });
        } catch (err) {
            console.error('Error connecting to vapi assistant', err);
            toast.error("Couldn't connect with assistant");
            setCallStatus(CallStatus.FAILED);
        }
    };

    const endCall = async () => {
        vapi.stop();
        setCallStatus(CallStatus.FINISHED);
        setAgentSpeaking(false);
        setUserSpeaking(false);
        setLastMessage('');

        // Navigate to feedback page passing full feedback in state
        navigate(`/interview/${interview.id}/feedback`, {
            state: { messages },
        });
    };

    return (
        <div className="bg-[#f6f6f6] text-gray-800 rounded-xl w-full flex flex-col gap-6">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-8">
                {/* AI Interviewer */}
                <div
                    className={`relative w-full h-70 sm:h-90 bg-[#4977ec44] border-[#4977ec] border-2 rounded-xl flex items-center justify-center transition-all ${
                        agentSpeaking ? 'animate-pulse-bg' : ''
                    }`}
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative">
                            <img
                                src="/images/tech.svg"
                                alt="AI Avatar"
                                className="size-30 rounded-full object-cover border-gray-200 border"
                            />
                            {agentSpeaking && (
                                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 rounded-full bg-blue-300 opacity-40 animate-ping" />
                            )}
                        </div>
                        <p className="text-[22px] font-semibold">
                            AI Interviewer
                        </p>
                    </div>
                </div>

                {/* User */}
                <div
                    className={`relative w-full h-70 sm:h-90 bg-[#4977ec44] border-[#4977ec] border-2 rounded-xl flex items-center justify-center transition-all ${
                        userSpeaking ? 'animate-pulse-bg' : ''
                    }`}
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative">
                            <img
                                src="/images/sania.jpg"
                                alt="User Avatar"
                                className="size-30 rounded-full object-cover border-gray-200 border"
                            />
                            {userSpeaking && (
                                <span className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 rounded-full bg-green-400 opacity-50 animate-ping" />
                            )}
                        </div>
                        <p className="text-[22px] font-semibold">{userName}</p>
                    </div>
                </div>
            </div>

            {/* Transcript Bubble */}
            {lastMessage && (
                <div className="mt-2 bg-gradient-to-br from-black via-[#1e1e1e] to-[#2c2c2c] rounded-lg border border-gray-800 px-4 py-2 text-center text-white shadow-md">
                    {lastMessage}
                </div>
            )}

            {/* Call Controls */}
            <div className="text-center mt-2">
                {callStatus !== CallStatus.ACTIVE ? (
                    <Button
                        onClick={startCall}
                        className="bg-green-500 w-[80px] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full"
                        disabled={callStatus === CallStatus.CONNECTING}
                        btnText={
                            callStatus === CallStatus.CONNECTING
                                ? '. . .'
                                : 'Call'
                        }
                    />
                ) : (
                    <Button
                        onClick={endCall}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full"
                        btnText="End Call"
                    />
                )}
            </div>
        </div>
    );
}
