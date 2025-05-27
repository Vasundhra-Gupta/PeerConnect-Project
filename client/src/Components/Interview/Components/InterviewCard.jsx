import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { getRandomInterviewCover } from '../Lib/utils.js';
import {
    FiArrowUpRight,
    FiCalendar,
    FiCode,
    FiBriefcase,
} from 'react-icons/fi';

export default function InterviewCard({ interview }) {
    const { id, role, type, techstack, createdAt } = interview;
    const formattedDate = dayjs(createdAt).format('MMM D, YYYY');

    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden">
            <div className="relative h-40 overflow-hidden">
                <img
                    src={getRandomInterviewCover()}
                    alt="Interview Cover"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-xl font-semibold text-white truncate">
                        {role} Interview
                    </h2>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-200">
                        <span className="flex items-center gap-1">
                            <FiBriefcase className="w-4 h-4" />
                            {type}
                        </span>
                        <span className="flex items-center gap-1">
                            <FiCalendar className="w-4 h-4" />
                            {formattedDate}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <FiCode className="w-4 h-4" />
                        <span className="font-medium">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techstack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    to={`/interview/${id}`}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm"
                >
                    Start Interview
                    <FiArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
