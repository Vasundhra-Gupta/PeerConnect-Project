import { useEffect, useState } from 'react';
import { useSocketContext } from '@/Context';
import { Outlet } from 'react-router-dom';

export default function EditorPage() {
    const { socket } = useSocketContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!socket) {
                console.warn('Socket connection timed out');
                setLoading(false); // Still undefined
            }
        }, 5000); // wait up to 5 seconds

        if (socket) setLoading(false);

        return () => clearTimeout(timeout);
    }, [socket]);

    if (loading) return <div>Loading editor...</div>;
    if (!socket) return <div>Failed to connect to socket. Please refresh.</div>;

    return <Outlet />;
}
