"use client"

import AddResume from "@/components/Resumes/AddResume";
import DisplayResumes from "@/components/Resumes/DisplayResumes";
import { ResumeProps } from "@/components/Resumes/Resume";
import { useState, useEffect } from "react";

const RESUMES_INIT: ResumeProps["resume"][]= [
  {
    id: 1,
    title: "Computer Science",
    description: "Time for the real world",
    imageUrl: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }, 
  {
    id: 2,
    title: "Taco Bell",
    description: "First Job",
    imageUrl: "https://plus.unsplash.com/premium_photo-1685316938388-c3dfe9a57ce1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "My First Resume",
    description: "Gotta Apply For Jobs",
    imageUrl: "https://plus.unsplash.com/premium_photo-1726754461023-3a40e4fa9cda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {  
     setIsLoggedIn(true);
    }
  });

  const [allResumes, setAllResumes] = useState(RESUMES_INIT);

  const handleAddItem = (newItem: ResumeProps["resume"]) => {
    setAllResumes(prevItems => [newItem, ...prevItems]);
  }

  return (
    <>
      {isLoggedIn && (
        <div className="flex flex-col items-center justify-center">
          <AddResume onAddItem={handleAddItem}/>
          <DisplayResumes resumes={allResumes}/>
        </div>
      )}
    </>
  );
}
