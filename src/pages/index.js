import { Inter } from "next/font/google";
import ServicesDropdown from "@/components/header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <ServicesDropdown/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </main>
  );
}
















{/* =================================================================================================== */}

      {/* <div className="relative">
      <video autoPlay loop muted className="w-full h-full object-cover bg-black" preload="none">
        <source src="/1616969.mp4" type="video/mp4" />
        <source src="/1616969.webm" type="video/webm" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-bubble bubble-effect text-white text-3xl">
          Bubble Font Example
        </p>

      </div>
    </div> */}

      {/* ============================================================================================================= */}
