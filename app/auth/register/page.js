import React from "react";

function RegisterPage() {
  return (
    <>
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
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              What are you registering?
            </h2>

            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </a>
          </div>

          {/* Right Side (Image/Terminal) */}
          <div className="w-1/2 border-l-2 rounded-r-lg flex items-center justify-center p-6 backdrop-blur-sm">
            <img
              src="https://picsum.photos/800"
              alt="hospital"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
