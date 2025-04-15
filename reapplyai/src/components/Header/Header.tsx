'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation'

import Button from "@/components/Button/Button";

import "./header.css";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [buttonName, setButtonName] = useState("Login");
    
    function login_out() {
        setIsLoggedIn(!isLoggedIn);
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());

        if (isLoggedIn == true) {
            setButtonName("Login");
            redirect(`/login`); 
        } else {
            setButtonName("Logout");
            redirect(`/`);
        }
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
                </ul>
            </div>
            <div className="login">
                {/* Link or Button? */}
                {/* User is logged out */}
                <Button name={buttonName} type="button" onClick={login_out}/>
            </div>
        </header>
    );
};