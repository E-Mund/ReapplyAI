"use client";

import ClipArt from "@/assets/resume-clip-art.png";
import Image from "next/image";

const AddResume = () => {

  return (
    <div className="flex items-center justify-center">
      <div>
        <Image src={ClipArt} alt="Description of image" width="200"/>
      </div>
      <form className="flex flex-col">
        <h1>Create Resume:</h1>
        <input 
          name="title" 
          type="text" 
          placeholder="Title" 
          required />
        <textarea name="description" placeholder="Description" required />
        <button type="submit" className="bg-blue-300 rounded hover:bg-blue-500 ">Add Resume</button>
      </form>
    </div>
  );
};

export default AddResume;
