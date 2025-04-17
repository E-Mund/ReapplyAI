"use client"

import Welcome from "@/components/Splash/Welcome";
import Features from "@/components/Splash/Features";
import connectMongoDB from "../../config/mongodb";


export default function Home() {
  connectMongoDB();
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Welcome/>
      <Features/>
    </div>
  );
}
