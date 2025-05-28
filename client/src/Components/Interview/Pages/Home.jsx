import { Button } from '@/Components';
import InterviewCard from '../Components/InterviewCard';
import { Link } from 'react-router-dom';

export default function Home() {
    const interviews = [
        {
            id: '1',
            role: 'Frontend Developer',
            type: 'Technical',
            techstack: ['React', 'JavaScript'],
            createdAt: new Date(),
        },
        {
            id: '2',
            role: 'Backend Developer',
            type: 'Behavioral',
            techstack: ['Node.js', 'Express'],
            createdAt: new Date(),
        },
        // Add more interviews as needed
    ];

    return (
        <div className="p-4">
            <section className="card-cta relative overflow-hidden bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-800">
                <div className="flex flex-col gap-6 max-w-lg relative z-10">
                    <h2 className="text-3xl font-bold text-white animate-fadeIn">
                        Prepare for Interviews with AI-Driven Practice Sessions
                    </h2>
                    <p className="text-lg text-gray-300">
                        Tackle authentic interview questions & receive immediate
                        feedback
                    </p>

                    <Button
                        className="bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-white font-medium max-sm:w-full"
                        btnText={
                            <Link
                                href="/interview"
                                className="flex items-center gap-2"
                            >
                                <span>Start an Interview</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 animate-bounce"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Link>
                        }
                    />
                </div>

                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 max-sm:hidden">
                    <img
                        src="/robot.png"
                        alt="robo-dude"
                        width={400}
                        height={400}
                        className="animate-float"
                    />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-600 opacity-15 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take Interviews</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interviews.map((interview) => (
                        <InterviewCard
                            key={interview.id}
                            interview={interview}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
