import { NavLink } from 'react-router-dom';
import { useChannelContext } from '@/Context';
import { formatDateExact } from '@/Utils';
import { icons } from '@/Assets/icons';
import toast from 'react-hot-toast';

export default function ChannelAbout() {
    const { channel } = useChannelContext();
    const {
        user_id,
        user_name,
        user_fullName,
        user_bio,
        user_createdAt,
        user_email,
        totalViews,
        totalFollowers,
        totalPosts,
    } = channel;

    function copyEmail() {
        window.navigator.clipboard.writeText(user_email);
        toast.success('Email copied to clipboard');
    }

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 ">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900">{user_fullName}</h1>
                <p className="text-lg text-gray-600 mt-1">@{user_name}</p>
                {user_bio && (
                    <p className="mt-3 text-gray-700 text-base leading-relaxed">
                        {user_bio}
                    </p>
                )}
            </div>

            {/* Channel Details in card body */}
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        {icons.info}
                    </svg>
                    Channel Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    {icons.email}
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500">Email</p>
                                <div className="flex items-center mt-1 group">
                                    <span className="text-blue-600 hover:text-blue-800 transition-colors">
                                        {user_email}
                                    </span>
                                    <button 
                                        onClick={copyEmail}
                                        className="ml-2 text-gray-400 hover:text-blue-500 transition-colors"
                                        aria-label="Copy email"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            {icons.clipboard}
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    {icons.globe}
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500">Channel URL</p>
                                <NavLink
                                    to={`/channel/${user_id}`}
                                    className="mt-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors break-all block"
                                >
                                    note-manager/channel/{user_name}
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    {icons.date}
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500">Joined</p>
                                <p className="mt-1 text-gray-700">
                                    {formatDateExact(user_createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    {icons.people}
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500">Followers</p>
                                <p className="mt-1 text-gray-700 font-medium">
                                    {totalFollowers.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    {icons.posts}
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500">Posts</p>
                                <p className="mt-1 text-gray-700 font-medium">
                                    {totalPosts.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    {icons.eye}
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500">Views</p>
                                <p className="mt-1 text-gray-700 font-medium">
                                    {totalViews.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}