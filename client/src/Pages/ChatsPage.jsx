import { useEffect, useState } from 'react';
import { useSocketContext, useChatContext } from '@/Context';
import { ChatNavbar, ChatSidebar, SmallSidebar } from '@/Components';
import { Outlet, useParams } from 'react-router-dom';

export default function ChatsPage() {
    const { socket } = useSocketContext();
    const { chatId } = useParams();
    const { showSidebar } = useChatContext();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!socket) {
                console.warn('Socket connection timeout');
                setLoading(false);
            }
        }, 5000); // timeout after 5 seconds

        if (socket) setLoading(false);

        return () => clearTimeout(timeout);
    }, [socket]);

    if (loading) return <div>Connecting to chat server...</div>;
    if (!socket) return <div>Unable to connect. Please refresh.</div>;

    return (
        <div className="fixed z-[100] h-screen inset-0 bg-white">
            <ChatNavbar />
            <div className="flex h-full w-full pt-[55px]">
                <div
                    className={`${chatId && !showSidebar ? 'hidden sm:block sm:w-[300px]' : 'w-full sm:w-[300px]'} h-full`}
                >
                    <ChatSidebar />
                </div>
                <SmallSidebar />
                <div
                    className={`${chatId && !showSidebar ? 'flex-1 w-full' : 'hidden sm:block sm:flex-1'} h-full`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
