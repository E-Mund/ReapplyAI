"use client"

import AddResume from "@/components/Resumes/AddResume";
import DisplayResumes from "@/components/Resumes/DisplayResumes";
import { ResumeProps } from "@/components/Resumes/Resume";
import { useState } from "react";

const RESUMES_INIT: ResumeProps["resume"][]= [
  {
    id: 1,
    title: 'STEVE',
    description: 'MY FIRST RESUME',
    imageUrl: "https://plus.unsplash.com/premium_photo-1726754461023-3a40e4fa9cda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

export default function Home() {
  const [allResumes, setAllResumes] = useState(RESUMES_INIT);

  const handleAddItem = (newItem: ResumeProps["resume"]) => {
    setAllResumes(prevItems => [newItem, ...prevItems]);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <AddResume onAddItem={handleAddItem}/>
      <DisplayResumes resumes={allResumes}/>
    </div>
  );
}
