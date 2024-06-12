import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn, fadeScaleIn, slideRotateIn ,fadeIn } from "@/utils/motion";

const About = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row justify-center md:justify-around px-4 py-10 bg-quaternary xs:justify-center">
      <div className="flex flex-col gap-4 h-full md:w-[90%] md:mx-auto xs:gap-2 py-8 items-center text-black justify-center">
        {/* <motion.div variants={fadeIn ("", "", 0.1, 1)} className="text-6xl xs:text-4xl flex w-full justify-center font-bold text-primary">ABOUT US</motion.div> */}
        {/* <div className="flex w-48 border-2 rounded-tr-full rounded-br-full border-secondary"></div> */}
        <div className="flex md:h-full mt-8 xs:mt-2 flex-row xs:flex-col md:flex-col xs:gap-4 md:justify-around">
          <div className="flex flex-col w-2/3 xs:w-full md:w-full">
            <div className="flex flex-col w-full items-center xs:text-center md:text-center justify-center">
              <div className="text-5xl xs:text-2xl xs:w-full font-bold mb-4">We Turn Ideas Into Reality</div>
              <div className="text-xl w-2/3 xs:w-full md:w-full text-black font-bold mb-4">
                We apply innovative design solutions to enhance people’s residential
                well-being and to help workplaces succeed & achieve more in
                comfortable environments!
              </div>
              <div className="text-lg italic w-2/3 xs:w-full md:w-full font-light text-black mb-4">
                Our team collaborates with clients across all our offices located
                throughout the US. Our mission is to implement outstanding design
                ideas and solutions for any project we’re working on, carefully
                considering client guidelines, technical possibilities, and
                environmental issues.
              </div>
            </div>
          </div>
          <div className="2xl:hidden xs:hidden flex w-full border border-primary"></div>
            <div className="flex flex-col w-1/3 xs:w-full md:w-full xs:gap-2 xs:p-2 justify-center 2xl:border-l xl:border-l xs:border-t border-slate-900 text-center">
              <div className="text-9xl text-black font-bold">33</div>
              <div className="text-2xl  font-semibold text-gray-700">YEARS</div>
              <div className="text-lg  font-light text-black">OF SUCCESSFUL WORK IN THE MARKET</div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
