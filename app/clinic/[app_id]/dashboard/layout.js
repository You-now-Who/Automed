"use client"
import { useEffect, useState } from "react";
import { useAuthContext } from "@/app/_authModules/_authFunctions/AuthContext";
import Navbar from "../../../_components/Navbar";
import User from "@/app/_authModules/_dbFunctions/User";
import UserAppContext from "./UserAppContext";

export default function RootLayout({ children, params }) {
  const clinic_code = params.clinic_code;  

  const authUser =  useAuthContext();

  const [user, setUser] = useState(null);
  const [clinic, setClinic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  let userDb = new User(authUser.user.uid);

  useEffect(() => {
    userDb = new User(authUser.user.uid);
  }, [authUser]);

  useEffect(() => {
    userDb.getUserData()
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  // Check if the clinic has the doctor in the database
  useEffect(() => {
    if (user){
      console.log("User: ", user);
    }
  }, [user]);

  return (
    <>
        <UserAppContext.Provider value={{ user, isLoading }}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              
              {children}
            </>
          )}
        </UserAppContext.Provider>
    </>
  );
}
