import { useQuestionContext } from "@/Context/QuestionContext";

export default function QuestionEditorial() {
    const question = useQuestionContext()
    return (
        <div className="bg-white p-4 rounded-lg">
            <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold mb-2">Approach</h3>
                <p>{question.editorial.description}</p>

                {question.editorial.images?.length > 0 && (
                    <img
                        src={question.editorial.images[0]}
                        alt="Solution visualization"
                        className="mt-3 rounded border border-gray-200 max-w-full"
                    />
                )}

                <div className="mt-4">
                    <a
                        href={question.editorial.reference}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:underline"
                    >
                        Read full editorial
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
