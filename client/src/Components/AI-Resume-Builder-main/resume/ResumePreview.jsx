import { ResumeInfoContext } from '../ResumeInfoContext';
import React, { useContext } from 'react';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
    const { resumeInfo } = useContext(ResumeInfoContext);

    return (
        <div className="h-full flex justify-center">
            <div
                className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
                style={{
                    borderTop: `15px solid ${resumeInfo?.themeColor || '#4977ec'}`,
                }}
            >
                {/* Header Section */}
                <div className="p-8 pb-6">
                    <PersonalDetailPreview resumeInfo={resumeInfo} />
                </div>

                {/* Main Content */}
                <div className="px-8 pb-8 space-y-8">
                    {/* Summary Section */}
                    {resumeInfo?.summary && (
                        <div className="border-t border-[#4977ec20] pt-6">
                            <SummeryPreview resumeInfo={resumeInfo} />
                        </div>
                    )}

                    {/* Experience Section */}
                    {resumeInfo?.Experience?.length > 0 && (
                        <div className="border-t border-[#4977ec20] pt-6">
                            <ExperiencePreview resumeInfo={resumeInfo} />
                        </div>
                    )}

                    {/* Education Section */}
                    {resumeInfo?.education?.length > 0 && (
                        <div className="border-t border-[#4977ec20] pt-6">
                            <EducationalPreview resumeInfo={resumeInfo} />
                        </div>
                    )}

                    {/* Skills Section */}
                    {resumeInfo?.skills?.length > 0 && (
                        <div className="border-t border-[#4977ec20] pt-6">
                            <SkillsPreview resumeInfo={resumeInfo} />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    className="p-4 text-center text-sm text-[#555555] border-t border-[#4977ec10]"
                    style={{
                        backgroundColor:
                            `${resumeInfo?.themeColor}10` || '#4977ec10',
                    }}
                >
                    Generated with Resume Builder
                </div>
            </div>
        </div>
    );
}

export default ResumePreview;
