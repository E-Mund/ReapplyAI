"use client"

import Welcome from "@/components/Splash/Welcome";
import Features from "@/components/Splash/Features";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Welcome/>
      <Features/>
    </div>
  );
}
