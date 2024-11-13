'use client'
import React, { useState, useEffect} from "react";;
import { useRouter } from "next/navigation";
import { clinicSignUp } from "@/app/_authModules/_authFunctions/signup";
import { useAuthContext } from "@/app/_authModules/_authFunctions/AuthContext";


function ClinicPage() {
  // State for form inputs
  const [npi, setNpi] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);

  const router = useRouter();

  const user = useAuthContext();

  useEffect(() => {
    if (user.user !=null) {
      router.push("/");
    }
  }, [user]);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!npi || !name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Logging form data for demonstration
    console.log("Form Data:", {
      npi,
      name,
      email,
      password,
      file,
    });

    // Call the signup function
    const { result, error } = await clinicSignUp(email, password, npi, name);
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log("Result: ", result);
    }
    
  };

  // File input handler
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="npi" className="block text-sm font-medium text-gray-700">
                  National Provider Identifier (NPI)
                </label>
                <input
                  type="text"
                  id="npi"
                  value={npi}
                  onChange={(e) => setNpi(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="987XXXXXX"
                  max={10}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Hospital Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="Meredian High Hospital"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white/50 backdrop-blur-sm"
                  placeholder="admin@mdhigh.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="********"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="con_password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="con_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300/50 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 backdrop-blur-sm"
                  placeholder="********"
                />
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Certification
              </label>
              <div className="flex items-center justify-center w-full mb-10">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF, SVG or PNG</p>
                  </div>
                  <input id="dropzone-file" type="file" onChange={handleFileChange} className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md shadow-sm backdrop-blur-sm"
              >
                Sign In
              </button>
              <p className="mt-4 text-center">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Forgot your password?
                </a>
              </p>
            </form>
          </div>

          {/* Right Side (Image/Terminal) */}
          <div className="w-1/2 border-l-2 rounded-r-lg flex items-center justify-center p-6 backdrop-blur-sm">
            <img src="https://picsum.photos/800" alt="hospital" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicPage;
