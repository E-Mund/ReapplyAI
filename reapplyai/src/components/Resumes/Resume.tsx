import Button from "../Button/Button";

export interface ResumeProps {
  resume: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export default function Resume({ resume }: ResumeProps) {
  return (
    <div className="bg-blue-100 w-40 h-60 rounded-lg shadow-md flex flex-col p-3">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-semibold mb-2">{resume.title}</h1>
        {resume.imageUrl && (
          <img
            src={resume.imageUrl}
            alt="icon"
            className="w-6 h-6 object-cover rounded-full"
          />
        )}
      </div>
      <p className="text-sm flex-1 overflow-hidden text-ellipsis break-words line-clamp-4">
        {resume.description}
      </p>
      <a
        href="/edit"
        className="mt-3 self-center bg-blue-200 hover:bg-blue-400 hover:text-white text-sm px-3 py-1 rounded transition"
      >
        edit
      </a>
    </div>
  );
}
