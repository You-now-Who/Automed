import React from "react";
import { useRouter } from "next/navigation";
import { getAuth } from 'firebase/auth'

function Navbar({ user }) {
const router = useRouter();

const handleLogout = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    await auth.signOut();
    return router.push("/auth/register/doctor");
    }

// console.log(user);

return (
    <>
        <nav className="bg-white/70 backdrop-blur-md border-b p-4 shadow-sm fixed top-0 left-0 right-0 z-50 mx-10 rounded-lg my-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-gray-800 font-bold text-xl">AutoMed</div>
                <div className="space-x-4">
                    {user.user == null ? (
                        <>
                            <a href="/auth/login">
                                <button className="outline py-2 px-4 mr-3 rounded hover:shadow-md shadow-sm transition-all duration-200 transform hover:scale-105">Login</button>
                            </a>
                            <a href="/auth/register">
                                <button className="bg-gray-900 text-white py-2 px-3 rounded hover:shadow-md shadow-sm transition-all duration-200 transform hover:scale-105">Register</button>
                            </a>
                        </>
                    ) : (
                        <a href="#">
                            <button className="bg-gray-900 text-white py-2 px-3 rounded hover:shadow-md shadow-sm transition-all duration-200 transform hover:scale-105" onClick={handleLogout}>Sign Out</button>
                        </a>
                    )}
                </div>
            </div>
        </nav>
    </>
);
}

export default Navbar;
