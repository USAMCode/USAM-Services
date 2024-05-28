import { Inter } from "next/font/google";
import Image from "next/image";
import ServicesDropdown from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Section6() {
  return (
    <main className={`${inter.className}`}>

      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>

      <br></br>
      <div className="flex flex-row">
      <div><h1>GET IN TOUCH WITH OUR TEAM</h1></div>
      <div><p>LET’S WORK TOGETHER!</p></div>
      </div>
    </main>
  );
}







