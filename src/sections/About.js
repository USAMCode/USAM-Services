import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn, fadeScaleIn, slideRotateIn ,fadeIn } from "@/utils/motion";

const About = () => {
  return (
    <div className="flex flex-col h-[100vh] lg:flex-col justify-center md:justify-around lg:justify-around bg-gray-200 xs:justify-center">
      <div className="flex flex-row lg:flex-col xl:flex-col sm:flex-col xl:justify-center lg:justify-around xs:flex-col md:flex-col gap-5 xl:gap-0 h-full w-[90%] mx-auto sm:w-[90%] sm:mx-auto md:w-[90%] md:mx-auto xs:gap-0 lg:gap-0 sm:gap-0  justify-around items-center text-black">
        {/* <div className="flex w-48 border-2 rounded-tr-full rounded-br-full border-secondary"></div> */}
        <div className="flex w-2/4 xs:h-3/5 lg:h-2/5 xl:h-1/2 xl:w-full xl:items-center lg:w-full lg:flex-row lg:mx-auto md:flex-row md:w-full sm:w-full xs:w-full md:h-full sm:h-full xs:mt-2 flex-col xl:flex-row xl:justify-center xs:justify-center lg:justify-between h-full xs:flex-col sm:flex-col xs:gap-0 md:justify-around sm:justify-center ">
          <div className="flex flex-col lg:w-2/3 lg:px-5 2xl:h-1/2 xl:h-1/2 2xl:px-10 justify-end md:justify-center xl:justify-center lg:justify-end items-center w-full xs:w-full md:w-full sm:w-full">
            <div className="flex flex-col 2xl:gap-4 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-1 xs:gap-2 w-full justify-center">
              <motion.div variants={fadeIn ("", "", 0.1, 1)} className="text-6xl xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl xs:text-4xl flex w-full font-bold text-first">ABOUT US</motion.div>
              <div className="text-4xl lg:text-2xl xl:text-3xl sm:text-2xl md:text-xl xs:text-xl xs:w-full font-bold">We Turn Ideas Into Reality</div>
              <div className="text-xl xl:text-lg w-full 2xl:w-3/4 xl:w-4/5 lg:text-base md:text-base sm:text-base xs:text-base xs:w-full sm:w-full md:w-full text-black font-semibold">
                We apply innovative design solutions to enhance people’s residential
                well-being and to help workplaces succeed & achieve more in
                comfortable environments!
              </div>
              <div className="text-lg w-full 2xl:w-5/6 xs:w-full xl:text-lg lg:text-base md:text-sm sm:text-sm xs:text-sm sm:w-full md:w-full font-medium text-black">
                Our team collaborates with clients across all our offices located
                throughout the US. Our mission is to implement outstanding design
                ideas and solutions for any project we’re working on, carefully
                considering client guidelines, technical possibilities, and
                environmental issues.
              </div>
            </div>
          </div>
          {/* <div className="xs:hidden flex w-[90%] xl:w-[100%] mx-auto sm:w-[90%] sm:mx-auto lg:hidden md:hidden sm:hidden lg:mx-auto border border-first"></div> */}
          <div className="flex flex-col gap-2 h-1/3 md:h-full lg:h-full w-2/3 xs:w-full sm:w-full md:w-full lg:w-1/2 xs:gap-2 xs:p-2 items-center justify-center border-slate-900 text-center">
            <div className="text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl xs:text-5xl text-first font-bold shadow-sm w-max p-4">33</div>
            <div className="text-2xl lg:text-xl sm:text-lg font-semibold text-black">YEARS</div>
            <div className="text-lg sm:text-base md:text-base xs:hidden xs:text-sm text-black">OF SUCCESSFUL WORK IN THE MARKET</div>
          </div>
        </div>
        {/* <div className="flex xs:hidden sm:hidden md:hidden h-full border border-primary"></div> */}
        <div className="flex h-full xs:h-2/5 xl:w-full 2xl:h-1/2 xl:h-1/2 sm:w-full sm:p-5 lg:p-5 w-2/4 md:w-5/6 xs:w-full lg:h-2/4 lg:w-full">
          <video loop autoPlay muted className="w-full h-full object-contain">
            <source src="https://usam.s3.ap-south-1.amazonaws.com/sample.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
