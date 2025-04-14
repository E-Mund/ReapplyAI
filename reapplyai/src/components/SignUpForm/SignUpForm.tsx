import React, { useState } from "react";

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
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
        }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            padding: "8px",
                            margin: "8px 0",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            backgroundColor: "#f9f9f9",
                            width: "100%",
                        }}
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
                        style={{
                            padding: "8px",
                            margin: "8px 0",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            backgroundColor: "#f9f9f9",
                            width: "100%",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 16px",
                        backgroundColor: "#1a73e8",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginTop: "12px",
                        width: "100%"
                    }}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;