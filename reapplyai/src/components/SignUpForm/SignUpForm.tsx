import React, { useState } from "react";
import "./signupForm.css";
import Button from "@/components/Button/Button";


const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill out all inputs");
            return;
        }
        setEmail('');
        setPassword('');
        console.log("Form was submitted");
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
                <Button name = "Create account" onClick={() => console.log("Form Submitted")} type = "submit"/>
            </form>
        </div>
    );
}
/*
<Button name = "Create account" onClick={() => console.log("Form Submitted") }/>
<button type="submit" className="bg-white text-blue-600 px-[6px] py-[3px] rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition">
    Create Account
 </button> 
*/

export default SignUpForm;