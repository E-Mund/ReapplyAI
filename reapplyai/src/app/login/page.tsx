"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import LoginForm, { LoginProps } from "@/components/Login/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center">
      <LoginForm />
    </div>
  );
}
