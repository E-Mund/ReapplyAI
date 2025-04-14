"use client"
import Image from "next/image";
<<<<<<< HEAD

import Button from "../../components/Button/Button";
=======
import Button from "../components/Button/Button";
import SignUpForm from "../components/SignUpForm/SignUpForm";
>>>>>>> 8ddce21 (changes commit)

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>Sign Up</h2>
        <SignUpForm />
      </main>
    </div>
  );
}