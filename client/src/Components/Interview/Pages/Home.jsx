import InterviewCard from '../Components/InterviewCard';

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
            <h1 className="text-2xl font-bold mb-4">Available Interviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interviews.map((interview) => (
                    <InterviewCard key={interview.id} interview={interview} />
                ))}
            </div>
        </div>
    );
}
