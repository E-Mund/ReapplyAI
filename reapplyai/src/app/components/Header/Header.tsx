import Image from "next/image";


import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div>
                <h1>ReapplyAI</h1>
                <ul>
                    <li>Home</li>
                    <li>Resumes</li>
                    <li>Templates</li>
                </ul>
            </div>
        </header>
    );
};