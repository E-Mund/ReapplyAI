"use client";

import ClipArt from "@/assets/resume-clip-art.png";
import Image from "next/image";
import { useState } from "react";
import { ResumeProps } from "./Resume";

interface AddResumeProps {
  onAddItem: (item: ResumeProps["resume"]) => void;
};

const AddResume = ({ onAddItem }: AddResumeProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: ResumeProps["resume"] = {
      id: Math.floor(Math.random() * 100000),
      ...formData
    };
    onAddItem(newItem);
    setFormData({title: '', description: '', imageUrl: ''});
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 py-10 px-6 flex items-center justify-center">
      <div>
        <Image src={ClipArt} alt="Description of image" width="200"/>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1>Create Resume:</h1>
        <input 
          name="title" 
          type="text" 
          value={formData.title}
          onChange={handleChange}
          placeholder="Title" 
          required />
        <textarea 
          name="description" 
          value={formData.description}
          onChange={handleChange}
          placeholder="Description" 
          required />
        <input 
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Enter Cover Image Url"
        />
        <button type="submit" className="bg-blue-400 rounded hover:bg-blue-300 hover:text-white">Add Resume</button>
      </form>
    </div>
  );
};

export default AddResume;
