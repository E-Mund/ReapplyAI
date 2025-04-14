'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button/Button";

import "./header.css";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [buttonName, setButtonName] = useState("Login | Signup");
    
    function login_out() {
        if (isLoggedIn == true) {
            setButtonName("Logout");
        } else {
            setButtonName("Login | Signup");
        }
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <header className="header">
            <div className="title">
                <Image src="/title.svg" alt="title" width="200" height="150" className="image"/>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/resumes">Resumes</Link></li>
                    <li><Link href="/templates">Templates</Link></li>
                </ul>
            </div>
            <div className="login">
                {/* Changed from <Button> to <Link> */}
                <Link href='/login' className='button'>
                Login | Signup
                </Link>
            </div>
        </header>
    );
};