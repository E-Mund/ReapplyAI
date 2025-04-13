'use client'
import Image from "next/image";

import Link from "next/link";

import Button from "../Button/Button";

import "./header.css";

export default function Header() {
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