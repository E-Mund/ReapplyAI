import React, { useState } from "react";
import Button from "@/components/Button/Button";
import "./loginForm.css"

export interface LoginProps {
    user: {
        userId: number;
        email: string;
        password: string;
    }
}

const EXAMPLE_USER: LoginProps["user"] = {
    userId: 1,
    email: "test@email.com",
    password: "password"
    
}

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill out all inputs");
            return;
        }
        setEmail('');
        setPassword('');
        console.log("Form was submitted");
        if (email == EXAMPLE_USER.email && password == EXAMPLE_USER.password) {
            console.log("USER FOUND");
            setIsLoggedIn(!isLoggedIn);
        }
        console.log(isLoggedIn);
    }

    return (
        <div className= "w-100 bg-gradient-to-b from-blue-500 to-blue-300 text-white py-17 px-6 text-center border-4 border-white shadow-2xl rounded-xl">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className = "input-elements"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                       className = "input-elements"                       
                    />
                </div>
                <Button name = "Log In" onClick={() => console.log("Form Submitted") }/>
            </form>
        </div>
    );
}

export default LoginForm;