import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn, fadeScaleIn, slideRotateIn ,fadeIn } from "@/utils/motion";

const About = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-col justify-center md:justify-around lg:justify-around bg-white xs:justify-center">
      <div className="flex flex-row gap-2 h-full w-[90%] mx-auto sm:w-[90%] sm:mx-auto md:w-[90%] md:mx-auto xs:gap-2 justify-around items-center text-black lg:justify-between">
        {/* <motion.div variants={fadeIn ("", "", 0.1, 1)} className="text-6xl xs:text-4xl flex w-full justify-center font-bold text-primary">ABOUT US</motion.div> */}
        {/* <div className="flex w-48 border-2 rounded-tr-full rounded-br-full border-secondary"></div> */}
        <div className="flex w-2/4 xl:p-10 md:w-full sm:w-full xs:w-full md:h-full sm:h-full lg:h-full mt-8 xs:mt-2 flex-col justify-center h-full xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:gap-4 md:justify-around sm:justify-around lg:justify-around">
          <div className="flex flex-col 2xl:h-1/2 xl:h-1/2 2xl:px-10 2xl:py-5 items-center justify-center text-center w-full xs:w-full md:w-full sm:w-full lg:w-full">
            <div className="flex flex-col w-full items-center xs:text-center md:text-center sm:text-center lg:text-center xl:text-center justify-center">
              <div className="text-5xl xs:text-3xl md:text-3xl lg:text-4xl xl:text-4xl xs:w-full font-bold mb-4">We Turn Ideas Into Reality</div>
              <div className="text-xl w-full xs:w-full sm:w-full md:w-full text-black font-bold mb-4">
                We apply innovative design solutions to enhance people’s residential
                well-being and to help workplaces succeed & achieve more in
                comfortable environments!
              </div>
              <div className="text-lg italic w-full xs:w-full sm:w-full md:w-full font-light text-black mb-4">
                Our team collaborates with clients across all our offices located
                throughout the US. Our mission is to implement outstanding design
                ideas and solutions for any project we’re working on, carefully
                considering client guidelines, technical possibilities, and
                environmental issues.
              </div>
            </div>
          </div>
          <div className="xs:hidden flex w-[90%] mx-auto sm:w-[90%] sm:mx-auto lg:w-[90%] lg:mx-auto border border-primary"></div>
          <div className="flex flex-col gap-2 h-1/2 w-full xs:w-full sm:w-full md:w-full lg:w-full xs:gap-2 xs:p-2 justify-center xs:border-t border-slate-900 text-center">
            <div className="text-9xl text-black font-bold">33</div>
            <div className="text-2xl  font-semibold text-gray-700">YEARS</div>
            <div className="text-lg  font-light text-black">OF SUCCESSFUL WORK IN THE MARKET</div>
          </div>
        </div>
        <div className="flex xs:hidden sm:hidden md:hidden h-full border border-primary"></div>
        <div className="flex xs:hidden sm:hidden md:hidden w-2/4 p-10">
          <img className="w-full h-full" src="" alt=""/>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
