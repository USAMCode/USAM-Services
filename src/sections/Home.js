import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";

const Home = () => {
  return (
    <div  className="bg-[#CDD2E8] h-screen flex flex-col justify-center items-center text-center bg-fixed">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="text-4xl md:text-6xl text-black font-bold mb-4">
        Welcome to Our Service
      </motion.div>
      <div className="text-lg md:text-xl text-black mb-8">
        We provide the best solutions to enhance your business and life.
      </div>
      <button className="bg-primary text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-orange-600 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default SectionWrapper(Home, "Home");

// import { Inter } from "next/font/google";
// import Image from "next/image";
// import ServicesDropdown from "@/components/header";

// const inter = Inter({ subsets: ["latin"] });

// export default function Section1() {
//   return (
//     <main className={`${inter.className}`}>

//         <div className="bg-neutral-800 h-full"></div>

//       {/* <div className=" w-full">
//         <img
//           src="/images/pexels-photo-2290740.jpeg"
//           alt="Picture of the author"
//           className="w-full h-96 object-cover bg-fixed"
//         />
//       </div> */}

//       {/* <div>
//         <video autoPlay loop muted className="w-[1900px] h-[950px] object-cover bg-black" preload="none">
//           <source src="/9164465.mp4" type="video/mp4" />
//           <source src="/9164465.webm" type="video/webm" />
//           <track
//             src="/path/to/captions.vtt"
//             kind="subtitles"
//             srcLang="en"
//             label="English"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div> */}

//     </main>
//   );
// }
