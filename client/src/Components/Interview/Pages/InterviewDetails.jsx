import { useParams } from 'react-router-dom';
import Agent from '../Components/Agent';

export default function InterviewDetails() {
    const { id } = useParams();

    // Mock interview data - replace with real fetch logic as needed
    const interview = {
        id,
        role: 'Frontend Developer',
        type: 'Technical',
        techstack: ['React', 'JavaScript'],
        questions: [
            'What is React?',
            'Explain the virtual DOM.',
            'How do hooks work in React?',
            'What are props and state?',
        ],
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                {interview.role} Interview
            </h1>
            <Agent
                userName="Candidate Name"
                interviewId={id}
                questions={interview.questions}
            />
        </div>
    );
}
