import SectionWrapper from "@/section/SectionWrapper";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { fadeIn } from "@/utils/motion";

const inter = Inter({ subsets: ["latin"] });

const Services = () => {
  return (
    <>
      <div className="bg-quaternary h-screen justify-center items-center text-center px-4 py-10">
        <div className="flex w-full justify-center py-8">
          <motion.div variants={fadeIn ("left", "type", 0.2, 0.6)} className="text-6xl font-bold text-black">Our Services</motion.div>
        </div>
        <div className="flex flex-row w-[95%] m-auto justify-around text-lg text-black p-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            {/* <img
              src="/images/api.jpg"
              alt="Picture of the author"
              className="object-contain bg-fixed w-[500px] rounded-lg"
            /> */}
            <div className="h-72 rounded-xl w-96 bg-white"></div>
            <div className="flex flex-col w-96">
              <motion.div variants={fadeIn ("left", "type", 0.5, 0.7)} className="font-semibold text-3xl">Automation</motion.div>
              <motion.div variants={fadeIn ("left", "type", 0.8, 0.5)} className="font-light">
                Unlock innovation and creativity and achieve outcomes faster
                with automation.
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-72 rounded-xl w-96 bg-white"></div>
            {/* <img
              src="/images/customer-service-hotline-operators-consult-customers-call-center-modern-vector-flat-illustration_720185-107.avif"
              alt="Picture of the author"
              className="object-contain w-[500px] bg-fixed rounded-lg"
            /> */}
            <div className="flex flex-col w-96">
              <motion.div variants={fadeIn ("left", "type", 0.5, 0.5)}  className="font-semibold text-3xl">Consulting</motion.div>
              <motion.div variants={fadeIn ("left", "type", 0.8, 0.5)}  className="font-light w-">
                Guiding Your Project Towards Success: Expert Consulting Every
                Step of the Way.
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-72 rounded-xl w-96 bg-white"></div>
            {/* <img
              src="/images/meeting-strategy-marketing-analytic_18660-1060.avif"
              alt="Picture of the author"
              className="object-contain w-[500px] bg-fixed rounded-lg"
            /> */}
            <div className="flex flex-col w-96">
              <motion.div variants={fadeIn ("left", "type", 0.5, 0.5)}  className="font-semibold text-3xl">Data & Insights</motion.div>
              <motion.div variants={fadeIn ("left", "type", 0.8, 0.5)} className="font-light">
                The right people get the right information at the right time
                with connected data.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Services, "services");
