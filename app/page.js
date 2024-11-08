import Image from "next/image";
import MainSections from "./_components/landing_page/MainSections";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSections />
    </>
  );
}
