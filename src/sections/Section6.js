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
      <div><div>GET IN TOUCH WITH OUR TEAM</div></div>
      <div><div>LET’S WORK TOGETHER!</div></div>
      </div>
    </main>
  );
}







