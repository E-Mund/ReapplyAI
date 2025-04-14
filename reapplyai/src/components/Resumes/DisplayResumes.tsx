'use client';

import Resume, { ResumeProps } from "./Resume";

interface DisplayResumesProps {
    resumes: ResumeProps["resume"][]
}

const DisplayResumes = ({resumes}: DisplayResumesProps) => {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {resumes.map((resume) => (
                <Resume key={resume.id} resume={resume}/>
            ))}
        </div>
    )
}

export default DisplayResumes;