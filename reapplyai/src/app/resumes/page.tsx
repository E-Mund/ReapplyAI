"use client"

import AddResume from "@/components/Resumes/AddResume";
import DisplayResume from "@/components/Resumes/DisplayResumes";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AddResume/>
      <DisplayResume/>
    </div>
  );
}
