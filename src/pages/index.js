import { Inter } from "next/font/google";
import Header from "@/components/header";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Section5 from "../sections/Section5";
import Section6 from "../sections/Section6";
import Footer from "@/components/footer";
import Testimonials from "@/sections/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Testimonials/>
      <Projects/>
      <Footer/>
      {/* <Section5/> */}
      {/* <Section6/> */}
    </>
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
