import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import {
  textVariant,
} from "@/utils/motion";

const About = () => {
  return (
    <>
      <div className="justify-around flex bg-gray-200 flex-row gap-4 items-center">
        <div className="flex xs:flex-col xl:flex-col xl:gap-8 sm:flex-col md:flex-col xs:gap-5 sm:gap-4 md:gap-4 md:w-[90%] w-[95%] mx-auto py-10">
          <div className="flex flex-col lg:flex-row xl:flex-row xs:gap-2 sm:gap-2 md:gap-2 xl:gap-4 md:w-full sm:w-full xs:w-full xs:items-center w-1/2 h-full">
            <div className="flex flex-col lg:w-2/4">
              <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>About US</p>
              </motion.div>
              <motion.div
                className="flex w-5/6 md:w-full sm:w-full xs:w-full"
                variants={textVariant()}
              >
                <div className="flex flex-col gap-4 xs:gap-2">
                  <div className="text-2xl xs:text-lg xl:text-lg w-full 2xl:w-full xl:w-full text-gray-800 font-semibold">
                    At USAM, we offer comprehensive solutions to<br></br>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <div className="flex flex-row xs:justify-center xs:items-center">
                      <img
                        src="/img/next.png"
                        className="h-6 w-6 xs:h-4 xs:w-4 "
                      />
                      <div className="pl-2 font-semibold text-lg text-gray-800">
                        Help you fully leverage your existing Autodesk software,
                        unlocking its full potential.
                      </div>
                    </div>
                    <div className="flex flex-row xs:justify-center xs:items-center ">
                      <img
                        src="/img/next.png"
                        className="h-6 w-6 xs:h-4 xs:w-4"
                      />
                      <div className="pl-2 font-semibold text-lg text-gray-800">
                        Automate repetitive tasks to enhance efficiency,
                        accuracy, and reduce project timelines.
                      </div>
                    </div>
                    <div className="flex flex-row xs:justify-center xs:items-center ">
                      <img
                        src="/img/next.png"
                        className="h-6 w-6 xs:h-4 xs:w-4 "
                      />
                      <div className="pl-2 font-semibold text-lg text-gray-800">
                        Implement robust data management and integration
                        solutions, transforming your raw data into actionable
                        insights for better decision-making.
                      </div>
                    </div>
                  </div>
                  <div className="text-lg w-full lg:hidden font-medium xs:font-normal text-black ">
                    Our expertise and innovative services are designed to
                    elevate your design processes, ensuring you stay ahead in
                    the CAD/BIM domain. Let us help you overcome these
                    challenges and achieve your goals with greater efficiency
                    and effectiveness.
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col lg:w-2/4 justify-center gap-2 items-center mt-5 border-slate-900 text-center">
              <div className="text-7xl xs:text-5xl sm:text-5xl text-first font-bold shadow-sm w-max p-4">
                33
              </div>
              <div className="text-2xl lg:text-xl sm:text-lg font-semibold text-black">
                YEARS
              </div>
              {/* <div className="text-lg sm:text-base md:text-base xs:hidden xs:text-sm text-black">OF SUCCESSFUL WORK IN THE MARKET</div> */}
            </div>
          </div>
          <div className="hidden xl:hidden lg:flex text-lg w-full font-medium xs:font-normal text-black ">
            Our expertise and innovative services are designed to elevate your
            design processes, ensuring you stay ahead in the CAD/BIM domain. Let
            us help you overcome these challenges and achieve your goals with
            greater efficiency and effectiveness.
          </div>
          <div className="flex w-1/2 xl:hidden xs:w-full sm:w-full md:w-full rounded-xl ">
            <video
              loop
              controls
              className="w-full h-full xl:h-1/2 object-contain rounded-xl"
            >
              <source src="/img/Technical Services.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="xl:flex hidden flex-row items-center gap-4">
            <div className="flex w-1/2 xl:justify-center xl:items-center xs:w-full sm:w-full md:w-full rounded-xl ">
              <video
                loop
                controls
                className="w-full h-full xl:h-1/2 object-contain rounded-xl"
              >
                <source src="/img/Technical Services.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="hidden lg:flex text-lg w-full p-10 font-medium xs:font-normal text-black ">
              Our expertise and innovative services are designed to elevate your
              design processes, ensuring you stay ahead in the CAD/BIM domain. Let
              us help you overcome these challenges and achieve your goals with
              greater efficiency and effectiveness.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
