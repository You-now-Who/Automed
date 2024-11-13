"use client"
import React, { useState, useEffect } from "react";

function RegisterPage() {
  // State to track user selection
  const [selectedOption, setSelectedOption] = useState("");


  // Handle option selection
  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!selectedOption) {
      alert("Please select an option to proceed.");
      return;
    }

    // Navigate to the selected registration page
    if (selectedOption === "clinic") {
      window.location.href = "/auth/register/clinic";
    } else if (selectedOption === "doctor") {
      window.location.href = "/auth/register/doctor";
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-white to-indigo-100 min-h-screen py-5 flex items-center justify-center">
        <div className="flex items-stretch w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-lg shadow-lg  py-10">
          {/* Left Side (Form) */}
          <div className="flex flex-col justify-center w-1/2 p-8 bg-white/80 backdrop-blur-sm rounded-l-lg">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-200/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="block w-4 h-4 bg-gray-500 rounded-full"></span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              What are you registering?
            </h2>

            {/* Option for Hospital/Clinic */}
            <div
              onClick={() => handleSelection("clinic")}
              className={`block max-w-sm px-6 py-10 bg-white border ${
                selectedOption === "clinic" ? "border-indigo-500" : "border-gray-200"
              } rounded-lg shadow hover:bg-gray-100 cursor-pointer mb-4`}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
                Hospital/Clinic
              </h5>
              <p className="font-normal text-gray-500">
                Want to integrate this in your own hospital? Register your clinic today to start using our services.
              </p>
            </div>

            <hr className="my-8 border-t border-gray-200" />

            {/* Option for Doctor */}
            <div
              onClick={() => handleSelection("doctor")}
              className={`block max-w-sm px-6 py-10 bg-white border ${
                selectedOption === "doctor" ? "border-indigo-500" : "border-gray-200"
              } rounded-lg shadow hover:bg-gray-100 cursor-pointer`}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
                Doctor
              </h5>
              <p className="font-normal text-gray-500">
                Already registered your clinic? Register as a doctor to start using our services.
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="mt-8 w-full py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-md shadow-sm backdrop-blur-sm"
            >
              Proceed
            </button>
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
