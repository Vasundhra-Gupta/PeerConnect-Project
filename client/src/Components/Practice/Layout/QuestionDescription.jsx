import { useQuestionContext } from '@/Context/QuestionContext';
import { useParams } from 'react-router-dom';

export default function QuestionDescription() {
    const question = useQuestionContext();

    const formattedAcceptanceRate = question.acceptanceRate.toFixed(1);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            {/* Question Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
                {question.title}
            </h1>

            {/* Difficulty Badge */}
            <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    question.difficulty === 'easy'
                        ? 'bg-green-100 text-green-800 border border-green-600'
                        : question.difficulty === 'medium'
                          ? 'bg-yellow-100 text-yellow-800 border border-yellow-600'
                          : 'bg-red-100 text-red-800 border border-red-600'
                }`}
            >
                {question.difficulty.charAt(0).toUpperCase() +
                    question.difficulty.slice(1)}
            </div>

            {/* Detailed Description with Markdown-like formatting */}
            <div className="prose max-w-none text-gray-700 mb-6">
                <div className="whitespace-pre-line space-y-2">
                    {question.detailedDescription
                        .split('\n')
                        .map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                </div>
            </div>

            {/* Constraints Section (if available) */}
            {question.constraints && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3">Constraints</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        {question.constraints.map((constraint, i) => (
                            <li key={i} className="text-gray-700">
                                <code className="bg-gray-100 px-1 rounded text-sm">
                                    {constraint}
                                </code>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Examples Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Examples</h2>
                <div className="space-y-4">
                    {question.testCases.map((testCase, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 p-4 rounded-md border border-gray-200"
                        >
                            <p className="font-medium text-gray-800 mb-2">
                                Example {i + 1}:
                            </p>
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <span className="text-gray-600">
                                        Input:{' '}
                                    </span>
                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                        {testCase.input}
                                    </code>
                                </div>
                                <div>
                                    <span className="text-gray-600">
                                        Output:{' '}
                                    </span>
                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                        {testCase.output}
                                    </code>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Metadata Grid */}
            <div className="flex flex-col gap-4 text-sm mb-6">
                <div className="pb-5 border-b-1 border-b-gray-300">
                    <h3 className="font-medium text-gray-800 mb-2">
                        Companies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {question.companies.map((company, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="pb-5 border-b-1 border-b-gray-300">
                    <h3 className="font-medium text-gray-800 mb-1">
                        Acceptance Rate
                    </h3>
                    <p>{formattedAcceptanceRate}%</p>
                </div>
                <div >
                    <h3 className="font-medium text-gray-800 mb-1">
                        Frequency
                    </h3>
                    <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                            <div
                                className="bg-blue-600 h-1.5 rounded-full"
                                style={{ width: `${question.frequency}` }}
                            ></div>
                        </div>
                        <span>{question.frequency}</span>
                    </div>
                </div>
                <div className="pb-5 border-b-1 border-b-gray-300">
                    <h3 className="font-medium text-gray-800 mb-2">
                        Supported Languages
                    </h3>
                    <div className="flex flex-wrap gap-1">
                        {question.supportedLanguages.map((lang, i) => (
                            <span
                                key={i}
                                className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tags Section */}
            <div className="pb-5 mb-6 border-b-1 border-b-gray-300">
                <h3 className="font-medium text-gray-800 mb-2">
                    Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Platform Link */}
            <div className="text-sm text-gray-600">
                <span className="font-medium">Source: </span>
                <a
                    href={question.platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    {question.platform.name}
                </a>
            </div>
        </div>
    );
}
