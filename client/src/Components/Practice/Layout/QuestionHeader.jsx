import { NavLink } from 'react-router-dom';
import { icons } from '@/Assets/icons';

export default function QuestionHeader() {
    const tabs = [
        {
            name: 'Description',
            to: ``,
            icon: icons.details,
        },
        {
            name: 'Editorial',
            to: `editorial`,
            icon: icons.editorial,
        },
        {
            name: 'Solutions',
            to: `solutions`,
            icon: icons.solutions,
        },
        {
            name: 'Submissions',
            to: `submissions`,
            icon: icons.history,
        },
        {
            name: 'Discuss',
            to: `discuss`,
            icon: icons.discuss,
        },
    ];

    return (
        <nav className="bg-white border-b rounded-lg border-gray-200 overflow-hidden">
            <div className="px-4 md:px-6 rounded-lg max-w-screen-xl mx-auto w-full flex overflow-x-auto gap-x-4">
                {tabs.map((tab) => (
                    <NavLink
                        end
                        key={tab.name}
                        to={tab.to}
                        className={({ isActive }) => `
                            flex items-center gap-2 whitespace-nowrap py-3 text-sm font-medium
                            ${isActive ? 'text-[#4977ec] border-b-2 border-[#4977ec]' : 'text-gray-600 hover:text-gray-700'}
                        `}
                    >
                        <div className="size-4">{tab.icon}</div>
                        {tab.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
