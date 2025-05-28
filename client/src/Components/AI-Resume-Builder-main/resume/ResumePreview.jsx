import { ResumeInfoContext } from '../ResumeInfoContext';
import React, { useContext } from 'react';
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import SummeryPreview from './preview/SummeryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';

function ResumePreview() {
    const { resumeInfo } = useContext(ResumeInfoContext);
    const themeColor = resumeInfo?.themeColor || '#4977ec';

    return (
        <div className="flex justify-center min-h-screen print:p-0 print:bg-white">
            {/* Modern Resume Container */}
            <div
                className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none"
                style={{
                    borderTop: `12px solid ${themeColor}`,
                }}
            >
                {/* Header with Contact Info */}
                <div
                    className="p-8 pb-6"
                    style={{ backgroundColor: `${themeColor}08` }}
                >
                    <PersonalDetailPreview resumeInfo={resumeInfo} />
                </div>

                {/* Two-Column Layout */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Column (Main Content) */}
                    <div className="md:w-2/3 p-8 space-y-8">
                        {/* Professional Summary */}
                        {resumeInfo?.summary && (
                            <section className="space-y-2">
                                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                                    Professional Summary
                                </h2>
                                <SummeryPreview resumeInfo={resumeInfo} />
                            </section>
                        )}

                        {/* Work Experience */}
                        {resumeInfo?.Experience?.length > 0 && (
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                                    Work Experience
                                </h2>
                                <ExperiencePreview resumeInfo={resumeInfo} />
                            </section>
                        )}

                        {/* Education */}
                        {resumeInfo?.education?.length > 0 && (
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                                    Education
                                </h2>
                                <EducationalPreview resumeInfo={resumeInfo} />
                            </section>
                        )}
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div
                        className="md:w-1/3 p-8 space-y-8"
                        style={{ backgroundColor: `${themeColor}05` }}
                    >
                        {/* Skills */}
                        {resumeInfo?.skills?.length > 0 && (
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">
                                    Skills & Expertise
                                </h2>
                                <SkillsPreview resumeInfo={resumeInfo} />
                            </section>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div
                    className="p-4 text-center text-xs text-gray-500 border-t border-gray-100"
                    style={{
                        backgroundColor: `${themeColor}08`,
                    }}
                >
                    <span className="opacity-70">
                        Generated with Resume Builder •{' '}
                        {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ResumePreview;
