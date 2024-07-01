import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn, fadeScaleIn, slideRotateIn ,fadeIn } from "@/utils/motion";

const About = () => {
  return (
    <div className="flex flex-col h-[100vh] lg:flex-col justify-center md:justify-around lg:justify-around bg-gray-200 xs:justify-center">
      <div className="flex flex-row xl:p-5 lg:flex-col xl:flex-row xl:gap-4 xs:py-2 sm:flex-col xl:justify-center lg:justify-center xs:flex-col md:flex-col gap-5 h-full w-[90%] mx-auto xs:w-[95%] sm:w-[95%] xl:w-[95%] sm:mx-auto md:w-[90%] md:gap-0 md:mx-auto xs:gap-0 lg:gap-0 sm:gap-0  justify-around items-center text-black">
        {/* <div className="flex w-48 border-2 rounded-tr-full rounded-br-full border-secondary"></div> */}
        <div className="flex w-2/4 justify-center xl:flex-col xs:h-3/5 lg:h-1/2 xl:h-full xl:w-full xl:items-center lg:w-full lg:flex-row lg:mx-auto md:flex-row md:w-full sm:w-full xs:w-full md:h-full sm:h-full xs:mt-2 flex-col xl:justify-center xs:justify-center lg:justify-between h-full xs:flex-col sm:flex-col xs:gap-0 md:justify-around sm:justify-center ">
          <div className="flex flex-col lg:hidden md:hidden sm:hidden lg:w-2/3 lg:px-5 2xl:h-1/2 xl:h-1/2 2xl:px-10 justify-end md:justify-center xl:justify-center lg:justify-end items-center w-full xs:w-full md:w-full sm:w-full">
            <div className="flex flex-col 2xl:gap-5 xl:gap-2 lg:gap-2 md:gap-4 sm:pt-5 xs:gap-2 w-full justify-center">
              <motion.div variants={fadeIn("", "", 0.1, 1)} className="text-5xl xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl xs:text-3xl flex w-full font-bold text-first">ABOUT US</motion.div>
              {/* <div className="text-4xl lg:text-2xl xl:text-3xl sm:text-2xl md:text-xl xs:text-xl xs:w-full font-semibold text-gray-900 ">We are here to Solve these Problems</div> */}
              <div className="flex flex-col gap-6 xs:gap-2 md:gap-3 sm:gap-3">
                <div className="text-2xl xl:text-lg w-full 2xl:w-full xl:w-full lg:text-xl md:text-[19px] sm:text-[18px] xs:text-lg xs:w-full sm:w-full md:w-full text-gray-800 font-semibold">
                  At USAM, we offer comprehensive solutions to<br></br>
                </div>
                <div className="flex flex-col gap-3 ">
                  <div className="flex flex-row 2xl:justify-center 2xl:items-center xs:justify-center xs:items-center">
                    <img src="/img/next.png" className="h-6 w-6 xs:h-4 xs:w-4 " />
                    <div className="pl-2 font-semibold text-base text-gray-800 xs:text-base md:text[16px] sm:text-base">Help you fully leverage your existing Autodesk software, unlocking its full potential.</div>
                  </div>
                  <div className="flex flex-row 2xl:justify-center 2xl:items-center xs:justify-center xs:items-center ">
                    <img src="/img/next.png" className="h-6 w-6 xs:h-4 xs:w-4" />
                    <div className="pl-2 font-semibold text-base text-gray-800 xs:text-base md:text[16px] sm:text-base">Automate repetitive tasks to enhance efficiency, accuracy, and reduce project timelines.</div>
                  </div>
                  <div className="flex flex-row 2xl:justify-center 2xl:items-center xs:justify-center xs:items-center ">
                    <img src="/img/next.png" className="h-6 w-6 xs:h-4 xs:w-4 " />
                    <div className="pl-2 font-semibold text-base text-gray-800 xs:text-base md:text[16px] sm:text-base">Implement robust data management and integration solutions, transforming your raw data into actionable insights for better decision-making.</div>
                  </div>
                </div>
              </div>
              <div className="text-lg w-full 2xl:w-full xs:w-full xl:text-base lg:text-lg md:text-base sm:text-base xs:text-sm sm:w-full md:w-full font-medium text-black ">
                Our expertise and innovative services are designed to elevate your design processes,
                ensuring you stay ahead in the CAD/BIM domain.
                Let us help you overcome these challenges and achieve your goals with greater efficiency and effectiveness.
              </div>
            </div>
          </div>
          {/* <div className="xs:hidden flex w-[90%] xl:w-[100%] mx-auto sm:w-[90%] sm:mx-auto lg:hidden md:hidden sm:hidden lg:mx-auto border border-first"></div> */}
          <div className="flex flex-col xs:flex-row justify-center gap-2 lg:hidden md:hidden sm:hidden h-1/3 xs:h-max xs:justify-center md:h-full lg:h-full w-2/3 xs:w-full sm:w-full sm:mt-2 md:w-2/3 md:justify-center lg:w-1/2 xs:gap-0 xs:p-0 xs-mt-0 items-center mt-5 border-slate-900 text-center">
            <div className="text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl xs:text-5xl text-first font-bold shadow-sm w-max p-4 sm:p-2">33</div>
            <div className="text-2xl lg:text-xl sm:text-lg font-semibold text-black">YEARS</div>
            {/* <div className="text-lg sm:text-base md:text-base xs:hidden xs:text-sm text-black">OF SUCCESSFUL WORK IN THE MARKET</div> */}
          </div>
          {/* -----------------------------------md & lg & sm---------------------------------- */}
          <div className="flex flex-col h-full justify-around md:justify-around md:gap-1 2xl:hidden xl:hidden xs:hidden">
            <div className="flex flex-row">
              <div className="flex flex-col gap-2 md:gap-1 w-3/5 justify-center">
                <motion.div variants={fadeIn("", "", 0.1, 1)} className="lg:text-5xl md:text-5xl sm:text-4xl flex w-full font-bold text-first">ABOUT US</motion.div>
                <div className="w-full lg:text-xl md:text-[19px] md:w-full text-gray-800 font-semibold">
                  At USAM, we offer comprehensive solutions to<br></br>
                </div>
                <div className="flex flex-col gap-3 md:gap-2 ">
                  <div className="flex flex-row 2xl:justify-center 2xl:items-center xs:justify-center xs:items-center">
                    <img src="/img/next.png" className="h-6 w-6 xs:h-4 xs:w-4 " />
                    <div className="pl-2 font-semibold text-lg text-gray-800 xs:text-base md:text-lg sm:text-base">Help you fully leverage your existing Autodesk software, unlocking its full potential.</div>
                  </div>
                  <div className="flex flex-row 2xl:justify-center 2xl:items-center xs:justify-center xs:items-center ">
                    <img src="/img/next.png" className="h-6 w-6 xs:h-4 xs:w-4" />
                    <div className="pl-2 font-semibold text-lg text-gray-800 xs:text-base md:text-base sm:text-base">Automate repetitive tasks to enhance efficiency, accuracy, and reduce project timelines.</div>
                  </div>
                  <div className="flex flex-row 2xl:justify-center 2xl:items-center xs:justify-lg xs:items-center ">
                    <img src="/img/next.png" className="h-6 w-6 xs:h-4 xs:w-4 " />
                    <div className="pl-2 font-semibold text-lg text-gray-800 xs:text-base md:text-lg sm:text-base">Implement robust data management and integration solutions, transforming your raw data into actionable insights for better decision-making.</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-2/5 justify-center items-center">
                <div className="text-first font-bold shadow-sm p-4 lg:text-6xl md:text-6xl sm:text-5xl">33</div>
                <div className="lg:text-xl md:text-xl font-semibold text-black">YEARS</div>
              </div>
            </div>
            <div className="text-lg w-full justify-start lg:text-lg md:text-base sm:text-base md:w-full font-medium text-black ">
                Our expertise and innovative services are designed to elevate your design processes,
                ensuring you stay ahead in the CAD/BIM domain.
                Let us help you overcome these challenges and achieve your goals with greater efficiency and effectiveness.
              </div>
          </div>
        </div>
        {/* <div className="flex xs:hidden sm:hidden md:hidden h-full border border-primary"></div> */}
        <div className="flex h-full xs:h-max 2xl:h-1/2 xl:h-96 xl:w-full sm:w-full sm:p-2 lg:p-5 w-2/4 md:w-4/5 md:p-4 md:justify-center  xs:w-full xs:justify-center lg:h-2/5 lg:w-full rounded-xl ">
          <video loop autoPlay muted className="w-full h-full object-contain rounded-xl ">
            <source src="/img/Technical Services.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
