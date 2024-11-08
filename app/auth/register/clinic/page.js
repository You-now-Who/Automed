import React from "react";

function ClinicPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-indigo-100 min-h-screen flex items-center justify-center p-10">
        <div className="flex items-stretch w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-lg shadow-lg">
          {/* Left Side (Form) */}
          <div className="flex flex-col justify-center w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-l-lg">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-200/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="block w-4 h-4 bg-gray-500 rounded-full"></span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Register for a Hospital
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="npi"
                  className="block text-sm font-medium text-gray-700"
                >
                  National Provider Identifier (NPI)
                </label>
                <input
                  type="text"
                  id="npi"
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="987XXXXXX"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hospital Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white/50 backdrop-blur-sm"
                  placeholder="corybarker@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="********"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="con_password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="con_password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="********"
                />
              </div>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gray-800/90 hover:bg-gray-900 text-white font-semibold rounded-md shadow-sm backdrop-blur-sm"
              >
                Sign In
              </button>
              <p className="mt-4 text-center">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Forgot your password?
                </a>
              </p>
            </form>
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

export default ClinicPage;
