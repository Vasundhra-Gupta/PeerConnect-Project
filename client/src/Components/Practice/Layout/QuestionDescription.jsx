import { useQuestionContext } from '@/Context/QuestionContext';
import { useParams } from 'react-router-dom';

export default function QuestionDescription() {
    const question = useQuestionContext();
    return (
        <div className="bg-white p-4 rounded-lg">
            <div className="prose prose-sm max-w-none">
                <p>{question.detailedDescription}</p>

                <div className="mt-4 space-y-3">
                    {question.testCases.map((testCase, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded">
                            <p className="font-medium">Example {i + 1}:</p>
                            <p>
                                Input:{' '}
                                <code className="bg-gray-100 px-1 rounded">
                                    {testCase.input}
                                </code>
                            </p>
                            <p>
                                Output:{' '}
                                <code className="bg-gray-100 px-1 rounded">
                                    {testCase.output}
                                </code>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="font-medium">Companies:</p>
                    <p>{question.companies.join(', ')}</p>
                </div>
                <div>
                    <p className="font-medium">Frequency:</p>
                    <p>{question.frequency}</p>
                </div>
                <div>
                    <p className="font-medium">Acceptance Rate:</p>
                    <p>{question.acceptanceRate}%</p>
                </div>
                <div>
                    <p className="font-medium">Supported Languages:</p>
                    <p>{question.supportedLanguages.join(', ')}</p>
                </div>
            </div>
        </div>
    );
}
