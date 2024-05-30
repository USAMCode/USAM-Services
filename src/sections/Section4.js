import { Inter } from "next/font/google";
import Image from "next/image";
import ServicesDropdown from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Section4() {
  return (
    <main className={` ${inter.className}`}>
      <div className="flex flex-row">
      <div><div className="font-bold">PROJECTS</div></div>
      <div><div>Below you can take a look at our featured and recent projects that have been numerously awarded for our unique architectural approach.</div></div>
      </div>

    </main>
  );
}

