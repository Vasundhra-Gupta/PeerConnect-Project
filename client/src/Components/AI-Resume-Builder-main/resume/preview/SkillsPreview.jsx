function SkillsPreview({ resumeInfo }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-6">
            {resumeInfo?.skills?.map((skill, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex justify-between text-xs font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.rating}/5</span>
                    </div>
                    <div className="h-2 mt-1 bg-gray-200 rounded">
                        <div
                            className="h-2 rounded"
                            style={{
                                backgroundColor: resumeInfo?.themeColor,
                                width: `${skill.rating * 20}%`,
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsPreview;
