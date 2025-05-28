import { useQuestionContext } from '@/Context/QuestionContext';

export default function QuestionSolutions() {
    const question = useQuestionContext();
    const solutions = question.solutions;

    return (
        <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Community Solutions</h3>

            <div className="space-y-6">
                {solutions?.map((solution, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                            <span className="font-medium">
                                {solution.language}
                            </span>
                            <span className="text-sm text-gray-500 ml-2">
                                {solution.explanation}
                            </span>
                        </div>
                        <pre className="p-4 overflow-x-auto bg-gray-900 text-gray-100">
                            <code>{solution.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}
