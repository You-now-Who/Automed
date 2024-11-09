import React from "react";

function MainSections() {
return (
    <>
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 items-center border-b relative">
            <div className="container mx-auto px-4 pb-16 pt-52 relative z-10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    {[...Array(10)].map((_, row) => (
                            [...Array(10)].map((_, col) => (
                                    <div
                                            key={`${row}-${col}`}
                                            className="absolute h-2 w-2 bg-gray-200 rounded-full z-0"
                                            style={{
                                                    top: `${(row + 1) * 10}%`,
                                                    left: `${(col + 1) * 10}%`,
                                            }}
                                    />
                            ))
                    ))}
            </div>
                <div className="text-center justify-center">
                    <h1 className="text-6xl font mb-2"> Less time on <span className="font-black">paperwork</span>.</h1>
                    <h1 className="text-6xl font mb-6">
                        {" "}
                        More time to{" "}
                        <span className="text-green-500 font-black">save lives</span>!
                    </h1>
                    <p className="text-xl mb-8">
                        Reduce time spent of health workers on paperwork and
                        administrative tasks.
                    </p>
                    <button className="bg-gray-900 text-white hover:bg-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Get Started
                    </button>
                </div>
                <div className="flex justify-center pt-24">
                    <video className="w-7/12 h-auto max-w-full shadow-2xl rounded-2xl" controls>
                        <source
                            src="https://file-examples.com/storage/fe504ae8c8672e49a9e2d51/2017/04/file_example_MP4_1920_18MG.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="ml-10">
                        <h2 className="text-4xl font-bold mb-4">
                            Your Health, Our Priority
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We provide the best healthcare services to ensure you are always
                            in good health.
                        </p>
                        <button className="bg-gray-900 text-white hover:bg-gray-800 font-bold py-3 px-8 mt-32 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="Doctor" className="w-full rounded" />
                    </div>
                </div>
            </div>
        </main>
    </>
);
}

export default MainSections;
