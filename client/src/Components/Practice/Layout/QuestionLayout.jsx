import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import QuestionHeader from './QuestionHeader';
import { useSideBarContext } from '@/Context';
import { questionsByTopics } from '@/DummyData/questions';
import { QuestionContext } from '@/Context/QuestionContext';

export default function QuestionLayout() {
    const { setShowSideBar } = useSideBarContext();
    setShowSideBar(false);

    const { topicId, questionId } = useParams();

    // Find the correct question
    const topicQuestions = questionsByTopics[topicId] || [];
    const question = topicQuestions.find((q) => q.questionId === questionId);

    return (
        <QuestionContext.Provider value={question}>
            <div className="flex flex-col md:flex-row h-full w-full">
                {/* Left Side: Question Content */}
                <div className="w-full md:w-1/2 border-r border-gray-200 flex flex-col">
                    <QuestionHeader />
                    <div className="flex-1 overflow-y-auto p-4">
                        <Outlet />
                    </div>
                </div>

                {/* Right Side: Code Editor */}
                <div className="w-full md:w-1/2 flex-1 overflow-y-auto p-4">
                    <div className="h-full w-full bg-gray-100 rounded-md shadow-inner">
                        Code Editor Area
                    </div>
                </div>
            </div>
        </QuestionContext.Provider>
    );
}
