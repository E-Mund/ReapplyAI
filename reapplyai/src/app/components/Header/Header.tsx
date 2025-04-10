'use client'
import Image from "next/image";

import Link from "next/link";

import Button from "../Button/Button";

import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="title">
                <h1>ReapplyAI</h1>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/resumes">Resumes</Link></li>
                    <li><Link href="/templates">Templates</Link></li>
                </ul>
            </div>
            <div className="login">
                <Button name="Login | Signup" onClick={() => console.log("Clicked!")}/>
            </div>
        </header>
    );
};