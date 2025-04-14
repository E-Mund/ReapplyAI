import React, { useState } from "react";
import "./signupForm.css";
import Button from "../Button/Button";


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
        <div className= "wholeForm">
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
                <Button name = "Create account" onClick={() => console.log("Form Submitted")
                  /*  
                    <button
                    type="submit"
                    className="submitButton"
                >
                    Create Account
                </button>
                */
                } />
            </form>
        </div>
    );
}

export default SignUpForm;