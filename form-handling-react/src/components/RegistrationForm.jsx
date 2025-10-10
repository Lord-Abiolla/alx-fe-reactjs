import React, { useState } from "react";

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // basic validation
        if (!username.trim()) {
            newErrors.username = "Username is required!";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email address!";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required!";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setTimeout(() => {
                setErrors({});
            }, 3000);
            return;
        }

        const user = { username, email, password };
        console.log("Form submitted:", user);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="border-0 bg-gray-300 max-w-2xl w-full shadow-2xl rounded-2xl flex flex-col items-center justify-center p-6">
                <h1 className="font-bold text-blue-800 text-2xl mb-4">
                    Registration Form
                </h1>

                <form className="flex flex-col w-full max-w-md" onSubmit={handleSubmit}>
                    <input
                        className="border-0 outline-0 bg-white rounded-2xl shadow-md p-3 m-2"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && (
                        <p className="text-red-700 text-sm ml-3">{errors.username}</p>
                    )}

                    <input
                        className="border-0 outline-0 bg-white rounded-2xl shadow-md p-3 m-2"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p className="text-red-700 text-sm ml-3">{errors.email}</p>
                    )}

                    <input
                        className="border-0 outline-0 bg-white rounded-2xl shadow-md p-3 m-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p className="text-red-700 text-sm ml-3">{errors.password}</p>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-800 rounded-2xl text-white p-3 w-1/2 cursor-pointer flex justify-center items-center mx-auto mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
