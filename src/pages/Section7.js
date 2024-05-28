import { Inter } from "next/font/google";
import Image from "next/image";
import ServicesDropdown from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
        <h1>OUR PARTNERS</h1>
    </main>
  );
}

