import { Link } from 'react-router-dom';
import { icons } from '@/Assets/icons';
import { motion } from 'framer-motion';

export default function ContributorCard({ contributor }) {
    const { name, role, bio, image, socials } = contributor;
    return (
        <div className="max-h-[400px] flex items-center justify-center">
            <motion.div
                whileHover={{
                    y: -5,
                    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.05)', // increase shadow on hover
                }}
                transition={{
                    type: 'tween',
                }}
                className="bg-[#f9f9f9] h-full max-w-[330px] flex flex-col items-center justify-center gap-6 rounded-xl p-6 drop-shadow-md overflow-hidden"
            >
                <div className="w-full flex items-center justify-center">
                    <div className="size-[140px] overflow-hidden border rounded-full drop-shadow-md">
                        <img
                            src={image}
                            alt={`${name} profile photo`}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold text-gray-900 text-center">
                        {name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm text-center m-2">
                        {role}
                    </p>
                    <p className="text-center text-gray-600 mb-4 text-sm line-clamp-3">
                        {bio}
                    </p>
                    <div className="flex mt-6 gap-5">
                        {Object.entries(socials).map(
                            ([platform, url]) =>
                                url && (
                                    <Link
                                        key={platform}
                                        to={url}
                                        target="_blank"
                                    >
                                        <div className="fill-[#202020] hover:fill-[#4977ec] size-[16px]">
                                            {icons[platform]}
                                        </div>
                                    </Link>
                                )
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
