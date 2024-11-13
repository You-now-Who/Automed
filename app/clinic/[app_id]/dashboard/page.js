import React from "react";

export default function ClinicDash() {
  return (
    <>
      <div>ClinicDash</div>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold mb-4">Clinic Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Patients</h2>
              <p className="text-gray-700">
                Manage patient records and appointments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Appointments</h2>
              <p className="text-gray-700">View and schedule appointments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Reports</h2>
              <p className="text-gray-700">Generate and view clinic reports.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
