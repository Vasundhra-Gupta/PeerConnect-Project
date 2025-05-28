import { useQuestionContext } from '@/Context/QuestionContext';

export default function QuestionSubmissions() {
    const question = useQuestionContext();
    const submissions = question.submissions;

    return (
        <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Your Submissions</h3>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                                Language
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                                Runtime
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                                Memory
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                                Status
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                                When
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {submissions.map((submission) => (
                            <tr key={submission.id}>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {submission.language}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {submission.runtime}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {submission.memory}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-green-600">
                                    {submission.status}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {submission.timestamp}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
