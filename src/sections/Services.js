import SectionWrapper from "@/section/SectionWrapper";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { fadeIn } from "@/utils/motion";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="bg-quinary flex flex-col h-screen justify-center items-center text-center md:text-start px-4 xs:px-0 xs:py-10 py-10">
        <div className="flex w-full justify-center h-1/4 xs:1/5 items-center py-10 xs:py-5">
          <motion.div
            variants={fadeIn("", "", 0.2, 0.6)}
            className="text-6xl xs:text-4xl font-bold text-black"
          >
            Our Services
          </motion.div>
        </div>
        <div className="flex xl:flex-row xs:flex-col xs:hidden md:hidden sm:hidden w-[95%] lg:w-full xl:w-full xs:w-full m-auto justify-around text-lg text-black p-10 lg:p-0 xs:p-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            {/* <img
              src="/images/api.jpg"
              alt="Picture of the author"
              className="object-contain bg-fixed w-[500px] rounded-lg"
            /> */}
            <div className="h-72 xs:h-48 rounded-xl w-96 lg:w-80 bg-white"></div>
            <div className="flex flex-col w-96 lg:w-80">
              <motion.div
                variants={fadeIn("", "", 0.5, 0.7)}
                className="font-semibold text-3xl xs:text-xl"
              >
                Automation
              </motion.div>
              <motion.div
                variants={fadeIn("", "", 0.8, 0.5)}
                className="font-light"
              >
                Unlock innovation and creativity and achieve outcomes faster
                with automation.
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-72 xs:h-48 rounded-xl w-96 lg:w-80 bg-white"></div>
            {/* <img
              src="/images/customer-service-hotline-operators-consult-customers-call-center-modern-vector-flat-illustration_720185-107.avif"
              alt="Picture of the author"
              className="object-contain w-[500px] bg-fixed rounded-lg"
            /> */}
            <div className="flex flex-col w-96 lg:w-80">
              <motion.div
                variants={fadeIn("", "", 0.5, 0.5)}
                className="font-semibold text-3xl xs:text-xl"
              >
                Consulting
              </motion.div>
              <motion.div
                variants={fadeIn("", "", 0.8, 0.5)}
                className="font-light"
              >
                Guiding Your Project Towards Success: Expert Consulting Every
                Step of the Way.
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="h-72 xs:h-48 rounded-xl w-96 lg:w-80 bg-white"></div>
            {/* <img
              src="/images/meeting-strategy-marketing-analytic_18660-1060.avif"
              alt="Picture of the author"
              className="object-contain w-[500px] bg-fixed rounded-lg"
            /> */}
            <div className="flex flex-col w-96 lg:w-80">
              <motion.div
                variants={fadeIn("", "", 0.5, 0.5)}
                className="font-semibold text-3xl xs:text-xl"
              >
                Data & Insights
              </motion.div>
              <motion.div
                variants={fadeIn("", "", 0.8, 0.5)}
                className="font-light"
              >
                The right people get the right information at the right time
                with connected data.
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center 2xl:hidden lg:hidden xl:hidden md:hidden sm:hidden">
          <div className="w-[90%] mx-auto p-4 h-full flex flex-col sm:gap-12 justify-center gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <img
                src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
                alt=""
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute left-0 bottom-0 p-2 flex flex-row justify-between items-center bg-black bg-opacity-50 w-full text-white ">
                <div className="font-semibold text-lg">Automation</div>
                <div className="underline">Learn More</div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <img
                src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
                alt=""
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute left-0 bottom-0 p-2 flex flex-row justify-between items-center bg-black bg-opacity-50 w-full text-white ">
                <div className="font-semibold text-lg">Consulting</div>
                <div className="underline">Learn More</div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <img
                src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
                alt=""
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute left-0 bottom-0 p-2 flex flex-row justify-between items-center bg-black bg-opacity-50 w-full text-white ">
                <div className="font-semibold text-lg">Data & Insights</div>
                <div className="underline">Learn More</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] h-full mx-auto 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden">
          <div className="flex flex-col w-full h-full gap-8">
            <div className="flex flex-row w-full h-1/2 gap-4 justify-center items-center">
              <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2 h-3/4">
                <CardContent className="flex flex-col gap-2 h-full justify-center">
                  <div className="flex font-semibold text-3xl">
                    Automation
                  </div>
                  <div className="text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link className="text-xl underline font-semibold" href="">Explore More</Link>
                </CardContent>
              </Card>
              <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2 h-3/4">
                <CardContent className="flex flex-col gap-2 h-full justify-center">
                  <div className="flex font-semibold text-2xl">
                    Consulting
                  </div>
                  <div className="text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link className="text-xl underline font-semibold" href="">Explore More</Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-full h-1/2 justify-center">
              <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2 h-3/4">
                <CardContent className="flex flex-col gap-2 h-full justify-center">
                  <div className="flex font-semibold text-2xl">
                    Data & Insights
                  </div>
                  <div className="text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link className="text-xl underline font-semibold" href="">Explore More</Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden xs:hidden flex w-[90%] m-auto h-full justify-center items-center">
          <div className="flex flex-col w-full h-3/4 items-center justify-between">
            <div className="flex flex-row w-full gap-4 justify-center items-center">
              <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2">
                <CardContent className="flex flex-col gap-2 justify-center items-start text-left">
                  <div className="flex font-semibold text-3xl">
                    Automation
                  </div>
                  <div className="text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link className="text-xl underline font-semibold" href="">Explore More</Link>
                </CardContent>
              </Card>
              <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2">
                <CardContent className="flex flex-col gap-2 justify-centeritems-start text-left">
                  <div className="flex font-semibold text-3xl ">
                    Consulting
                  </div>
                  <div className="text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link className="text-xl underline font-semibold" href="">Explore More</Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-full justify-center">
              <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2">
                <CardContent className="flex flex-col gap-2 h-full justify-center items-start text-left">
                  <div className="flex font-semibold text-3xl">
                    Data & Insights
                  </div>
                  <div className="text-lg"> 
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link className="text-xl underline font-semibold" href="">Explore More</Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Services, "services");
