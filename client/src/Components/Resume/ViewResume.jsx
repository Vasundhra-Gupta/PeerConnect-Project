import { Button } from './ui/button';
import { ResumeInfoContext } from './ResumeInfoContext';
import ResumePreview from './resume/ResumePreview';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from './GlobalApi';
import { RWebShare } from 'react-web-share';

function ViewResume() {
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();

    useEffect(() => {
        const data = GlobalApi.GetResumeById(resumeId);
        setResumeInfo(data);
    }, []);

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                    <h2 className="text-center text-2xl font-medium">
                        Congrats! Your Ultimate AI generates Resume is ready !
                    </h2>
                    <p className="text-center text-gray-400">
                        Now you are ready to download your resume and you can
                        share unique resume url with your friends and family
                    </p>
                    <div className="flex justify-between px-44 my-10">
                        <Button onClick={() => window.print()}>Download</Button>

                        <RWebShare
                            data={{
                                text: 'Hello Everyone, This is my resume please open url to see it',
                                url:
                                    import.meta.env.VITE_BASE_URL +
                                    '/resume/' +
                                    resumeId +
                                    '/view',
                                title:
                                    resumeInfo?.firstName +
                                    ' ' +
                                    resumeInfo?.lastName +
                                    ' resume',
                            }}
                            onClick={() => console.log('shared successfully!')}
                        >
                            <Button>Share</Button>
                        </RWebShare>
                    </div>
                </div>
            </div>
            <div className="my-10 mx-10 md:mx-20 lg:mx-36 h-full">
                <div id="print-area">
                    <ResumePreview />
                </div>
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default ViewResume;
