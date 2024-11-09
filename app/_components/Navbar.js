import React from "react";

function Navbar({ status }) {
return (
    <>
        <nav className="bg-white/70 backdrop-blur-md border-b p-4 shadow-sm fixed top-0 left-0 right-0 z-50 mx-10 rounded-lg my-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-gray-800 font-bold text-xl">AutoMed</div>
                <div className="space-x-4">
                    {status !== 'authenticated' ? (
                        <>
                            <a href="/auth/login">
                                <button className="outline py-2 px-4 mr-3 rounded hover:shadow-md shadow-sm transition-all duration-200 transform hover:scale-105">Login</button>
                            </a>
                            <a href="/auth/register">
                                <button className="bg-gray-900 text-white py-2 px-3 rounded hover:shadow-md shadow-sm transition-all duration-200 transform hover:scale-105">Register</button>
                            </a>
                        </>
                    ) : (
                        <a href="/auth/signout">
                            <button className="bg-gray-900 text-white py-2 px-3 rounded hover:shadow-md shadow-sm transition-all duration-200 transform hover:scale-105">Sign Out</button>
                        </a>
                    )}
                </div>
            </div>
        </nav>
    </>
);
}

export default Navbar;
