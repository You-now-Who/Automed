'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link"
import { useAuthContext } from '@/app/_authModules/_authFunctions/AuthContext';
import signIn from '@/app/_authModules/_authFunctions/signin';

const LoginPage = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const user = useAuthContext();

    const [clinicCode, setClinicCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user != null) {
            router.push("/");
        }
    }
    , [user]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const { result, error } = await signIn(email, password);
        if (error) {
            setError(error.message);
        } else {
            console.log("Result: ", result);
        }
    };

    return (
        <div className="bg-gradient-to-br from-white to-indigo-100 h-screen flex items-center justify-center">
            <div className="flex items-stretch w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-lg shadow-lg">
                
                {/* Left Side (Form) */}
                <div className="flex flex-col justify-center w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-l-lg">
                    <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-gray-200/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                            {/* Placeholder for logo */}
                            <span className="block w-4 h-4 bg-gray-500 rounded-full"></span>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Sign in to your account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="clinic_code" className="block text-sm font-medium text-gray-700">Clinic Code</label>
                            <input 
                                type="text" 
                                id="clinic_code" 
                                className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm" 
                                placeholder="XXXXXX" 
                                value={clinicCode}
                                onChange={(e) => setClinicCode(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white/50 backdrop-blur-sm" 
                                placeholder="corybarker@email.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm" 
                                placeholder="********" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-2 px-4 bg-gray-800/90 hover:bg-gray-900 text-white font-semibold rounded-md shadow-sm backdrop-blur-sm">
                            Sign In
                        </button>
                        <p className="mt-4 text-center">
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Forgot your password?</a>
                        </p>
                    </form>
                </div>

                {/* Right Side (Image/Terminal) */}
                <div className="w-1/2 border-l-2 rounded-r-lg flex items-center justify-center p-6 backdrop-blur-sm">
                    <img src="https://picsum.photos/800" alt="hospital" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
