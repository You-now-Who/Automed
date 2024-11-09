"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MainSections from "./_components/landing_page/MainSections";
import Navbar from "./_components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar   />
      <MainSections />
    </>
  );
}
