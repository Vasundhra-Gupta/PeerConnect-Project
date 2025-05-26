import { Link, useNavigate } from 'react-router-dom';
import { icons } from '@/Assets/icons';
import { Button } from '..';

export default function QuestionCard({ question }) {
    const navigate = useNavigate();
    const difficultyColors = {
        hard: {
            color: 'text-red-600',
            bg: 'bg-red-200',
        },
        medium: {
            color: 'text-yellow-600',
            bg: 'bg-yellow-100',
        },
        easy: {
            color: 'text-green-600',
            bg: 'bg-green-200',
        },
    };

    return (
        <div className="flex items-center p-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
            {/* Left side - Question title and solved indicator */}
            <div className="flex items-center gap-3 w-[60%]">
                <span className="text-green-500 text-sm">
                    <div className="h-4 w-4">
                        {question.solved ? icons.check : icons.circle}
                    </div>
                </span>
                <Link
                    to={`/question/${question.questionId}`}
                    className="text-sm font-medium text-gray-800 truncate hover:text-blue-600 transition-colors"
                    title={question.title}
                >
                    {question.title}
                </Link>
            </div>

            {/* LeetCode icon */}
            <Link
                to={question.leetcodeLink}
                target="_blank"
                className="text-gray-400 hover:text-yellow-500 transition-colors  w-[20%]"
                title="Open in LeetCode"
            >
                <img
                    className="w-5 h-5"
                    src="https://cdn.iconscout.com/icon/free/png-512/leetcode-3521542-2944960.png"
                    alt='"leetcode'
                />
            </Link>

            {/* Right side - LeetCode link, difficulty, and action button */}
            <div className="flex items-center justify-end gap-4 w-[20%] ">
                {/* Difficulty badge */}
                <span
                    className={`text-xs font-medium ${difficultyColors[question.difficulty].bg} rounded-md px-2 py-[3px]  ${difficultyColors[question.difficulty].color}`}
                >
                    {question.difficulty}
                </span>

                {/* Solve button */}
                <Button
                    onClick={() => navigate(`/question/${question.questionId}`)}
                    className="text-white rounded-md px-3 py-1 h-7 text-xs bg-blue-600 hover:bg-blue-700 transition-colors"
                    btnText={'Solve'}
                />
            </div>
        </div>
    );
}
