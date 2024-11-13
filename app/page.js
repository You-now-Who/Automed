"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MainSections from "./_components/landing_page/MainSections";
import Navbar from "./_components/Navbar";
import { useAuthContext } from "./_authModules/_authFunctions/AuthContext";

export default function Home() {
  const router = useRouter();
  const user = useAuthContext();

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);


  return (
    <>
      <Navbar user={user} />
      <MainSections />
    </>
  );
}
