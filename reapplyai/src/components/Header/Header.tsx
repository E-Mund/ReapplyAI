'use client'

import { useState, useEffect } from "react";
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
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    }

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
      });

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
                {/* Link or Button? */}
                <button onClick={login_out} className='button'>
                {/* User is logged out */}
                { 
                    !isLoggedIn && (
                        <span>Login | Signup</span>
                    )
                }
                {/* User is logged in */}
                { 
                    isLoggedIn && (
                        <span>Logout</span>
                    )
                }
                </button>
            </div>
        </header>
    );
};