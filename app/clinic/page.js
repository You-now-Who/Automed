"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../_authModules/_authFunctions/AuthContext';

export default function ClinicPage() {
    const router = useRouter();
    const user = useAuthContext();
    const [userData, setUserData] = useState({});
    const [error, setError] = useState("");
    const uid = user.user.uid;

    useEffect(() => {
        if (uid) {
          fetch(`/api/getUser?uid=${uid}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.error) {
                setError(data.error);
              } else {
                setUserData(data);
                console.log("User Data: ", data);
              }
            })
            .catch((err) => setError(err.message));
        }
      }, [uid]);

    useEffect(() => {
        if (user.user == null) {
            router.push("/auth/login");
        }
    }, []);

  return (
    <div>ClinicPage</div>
  )
}
