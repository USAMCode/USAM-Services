import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <br />

      <div className="flex flex-row bg-white text-Neutral-400 font-mono italic font-bold justify-between">
        <div><h1 className="font-bubble text-3xl">USAM Technology</h1></div>

        <div>
          <ul className="flex flex-row space-x-4 text-lg">
            <li className="cursor-pointer hover:text-gray-700">Home</li>
            <li className="cursor-pointer hover:text-gray-700">Services</li>
            <li className="cursor-pointer hover:text-gray-700">About</li>
            <li className="cursor-pointer hover:text-gray-700">Contact</li>
          </ul>
        </div>
      </div>

      <br />
      {/* ============================================== IMAGE SECTION =============================================================================== */}

      <div className="flex w-full">
        <img 
          src="/images/created_with_our_tool_center@2x.webp" 
          alt="Picture of the author" 
          className="w-full h-96 object-cover" 
        />
      </div>

      {/* ============================================== SECTION 2 SECTION =============================================================================== */}
      
      <div className="flex flex-row"> 
        <div>
          <h1>ABOUT US</h1>
          <h3>We Turn Ideas Into Reality</h3>
          <p>We apply innovative design solutions to enhance people’s residential well-being and to help workplaces succeed & achieve more in the comfortable environments!
            All our team collaborates with our clients, across all of our 3 offices, which are located throughout the US. Our mission is to implement the outstanding design ideas and solutions for any project we’re working on. During that process, we carefully combine client’s guidelines, technical possibilities as well as the environmental issues. Engineering and interior design solutions that we deliver are usually born after a collaborative process.
          </p>
        </div>

        <div>
          <h1>17</h1>
          <h3>YEARS</h3>
          <h5>OF SUCCESSFUL WORK IN THE MARKET</h5>
        </div>
      </div>

      <br></br>

      {/* ============================================== SECTION 3 SECTION =============================================================================== */}
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>

      <br></br>
      <div>
        <h1>Our Services</h1>

        <h3>Automation</h3>
        <h3>Consulting</h3>
        <h3>Data & Insights</h3>

      </div>

      <br></br>

    {/* ============================================== SECTION 4 SECTION =============================================================================== */}

      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>

      <br></br>
      <div className="flex flex-row">
      <div><h1>PROJECTS</h1></div>
      <div><p>Below you can take a look at our featured and recent projects that have been numerously awarded for our unique architectural approach.</p></div>
      </div>

      {/* ============================================== SECTION 5 SECTION =============================================================================== */}

      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>

      <br></br>
      <div className="flex flex-row">
      <div><h1>TESTIMONIALS</h1></div>
      <div><p>CUSTOMER 1.</p></div>
      </div>

      {/* ============================================== SECTION 6 SECTION =============================================================================== */}

      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>

      <br></br>
      <div className="flex flex-row">
      <div><h1>GET IN TOUCH WITH OUR TEAM</h1></div>
      <div><p>LET’S WORK TOGETHER!</p></div>
      </div>


      {/* ============================================== SECTION 7 SECTION =============================================================================== */}

      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>
      <hr className=""></hr>

      <br></br>
      {/* ========================================= CHAT BOT ======================================================================= */}

      <div><script src="//code.tidio.co/cnt7rui7jqr7ydpajx0ogmjeavdqmsua.js"></script></div>

      {/* ========================================== CHAT BOT ================================================================== */}
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
