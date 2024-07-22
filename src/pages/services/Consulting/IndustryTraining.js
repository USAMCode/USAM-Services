import React, { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { motion } from "framer-motion";
import {
  bounceIn,
  fadeIn,
  fadeInBlur,
  fadeScaleIn,
  textVariant,
} from "@/utils/motion";

const ProductConfiguration = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-8 relative w-full">
        <div className="w-full relative">
          <img
            src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
            alt=""
            className="w-full h-[650px] xs:h-[300px] md:h-[450px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        </div>
        <div className="bg-white h-full xs:hidden w-[90%] mx-auto flex flex-col">
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black border-l-4 p-20 md:px-5 md:py-10 lg:p-0 sm:p-10 lg:px-5 lg:py-10 xl:p-10 border-l-primary">
            <div className="flex flex-row gap-8 md:gap-4 lg:gap-6 sm:flex-col sm:gap-6 justify-around items-center">
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full lg:w-full md:w-full sm:w-full h-full"
                />
              </div>
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-6 md:gap-2 lg:gap-4 ">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl lg:text-2xl font-serif">
                  What is Product Configuration?
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans"
                >
                  Product Configuration involves setting up customizable
                  templates and automation processes within Autodesk tools to
                  quickly and accurately configure products based on specific
                  client needs. This service streamlines the design process,
                  reduces lead times, and ensures precision in every
                  configuration.
                </motion.div>
                <div className="flex w-full">
                  <button onClick={() => setShow(true)} className="flex px-4 py-2 rounded-full bg-primary 2xl:text-2xl text-xl md:text-base text-white">
                    Contact Us
                  </button>
                </div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
            </div>
          </div>
          <div className="flex w-full border-2 border-primary rounded-bl-md rounded-tr-md"></div>
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black p-20 sm:p-10 md:px-2 md:p-10 lg:py-10 lg:px-5 xl:p-10  border-r-4 border-r-primary">
            <div className="flex flex-row sm:flex-col-reverse sm:gap-6 md:gap-4 justify-around lg:justify-between items-center">
              <div className="h-full flex flex-col gap-6 w-full lg:w-4/6 xl:w-2/3">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl md:w-full lg:text-2xl font-serif sm:w-full lg:w-[90%] w-[80%] m-auto ">
                  Optimize Your Design Process with Advanced Product
                  Configuration
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans sm:w-full w-[80%] md:w-full lg:w-[90%] m-auto"
                >
                  Configuring products to meet specific client needs can be
                  complex and time-consuming, especially in industries like AEC
                  and manufacturing. Our Product Configuration services simplify
                  this process, using Autodesk tools like Inventor, Revit, Civil
                  3D, and Plant 3D to create flexible and efficient
                  configurations that meet your exact requirements.
                </motion.div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInBlur(0.25, 0.5)}
                className="w-full lg:w-3/6 xl:w-1/3 h-full flex justify-center items-center "
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex w-full border-2 border-primary"></div>
          {/* =========================================================================================================================================== */}

          <div className="bg-gray-100 p-10 sm:p-5 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="flex flex-col h-[70%] my-auto gap-10 py-16">
              <div className="flex w-full text-center justify-center font-bold text-3xl sm:text-2xl md:text-2xl font-serif ">
                Why Choose Our Product Configuration Services
              </div>
              <div className="flex flex-row justify-center gap-6 lg:flex lg:flex-col md:flex md:flex-col xl:flex xl:flex-col sm:flex sm:flex-col w-[90%] m-auto ">
                <div className="flex flex-row gap-6 xl:items-center xl:justify-center ">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeScaleIn(0.2, 0.5)}
                    className="shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl md:text-xl font-semibold ">
                      Customization
                    </div>
                    <div className="text-lg md:text-base font-sans text-center w-full">
                      Easily create customized product configurations that meet
                      the unique requirements of each project or client.
                    </div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeScaleIn(0.4, 0.5)}
                    className=" shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5 "
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl md:text-xl font-serif font-semibold ">
                      Efficiency
                    </div>
                    <div className="text-lg md:text-base font-sans text-center w-full">
                      Speed up the design process with automated configuration
                      tools, reducing lead times and increasing productivity.
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-row gap-6 xl:justify-center">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeScaleIn(0.6, 0.5)}
                    className=" shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl md:text-xl font-serif font-semibold">
                      Accuracy
                    </div>
                    <div className="text-lg md:text-base font-sans text-center w-full">
                      Ensure precise and error-free configurations with
                      automated checks and validations.
                    </div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeScaleIn(0.8, 0.5)}
                    className=" shadow-xl rounded-lg bg-white w-2/4 xl:w-2/5 flex flex-col gap-3 p-5"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif md:text-xl font-semibold">
                      Flexibility
                    </div>
                    <div className="text-lg md:text-base font-sans text-center w-full">
                      Adapt quickly to changing client demands and project
                      requirements with flexible configuration options.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex w-2/5 border-2 border-primary rounded-r-full"></div>
            <div className="flex w-1/5 border-none "></div>
            <div className="flex w-2/5 border-2 border-primary rounded-l-full"></div>
          </div>
          {/* ========================================================================================================================================= */}

          <div className="bg-white text-black py-20 px-10 flex flex-col gap-12 border-l-4 border-l-primary border-r-4 border-r-primary">
            <div className="font-semibold text-3xl sm:text-2xl md:text-2xl text-center font-serif h-[70%] my-auto">
              How We Implement Product Configuration
            </div>
            <div className="flex flex-row gap-10 xl:gap-0 sm:gap-4 md:gap-4 justify-around items-center xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">
              {/* <div className="bg-white shadow-xl rounded-md xl:justify-center xl:items-center lg:justify-center lg:items-center">PICTURE</div> */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("right", "spring", 0.5, 0.5)}
                className=" flex w-2/4 h-full lg:w-2/4 sm:w-full md:w-full justify-center items-center "
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full xl:w-full lg:w-full lg:h-full sm:w-full h-full"
                />
              </motion.div>
              <div className=" w-2/4 xl:w-2/3 lg:w-2/4 xl:justify-center xl:items-center xl:px-12 lg:justify-center lg:items-center md:w-full md:justify-center md:items-center md:p-8 md:px-8 sm:w-full sm:justify-center sm:items-center sm:p-0">
                <div className="text-[17px] xl:justify-center xl:items-center w-full flex flex-col gap-5">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("left", "spring", 0.5, 0.5)}
                    className="w-3/4 p-8 xl:p-4 lg:p-4 flex flex-col gap-5 lg:gap-2 rounded-md shadow-lg xl:w-full lg:w-full md:w-full sm:w-full "
                  >
                    <div className="text-xl font-semibold font-serif">
                      Template Development
                    </div>
                    <div className="text-[17px] font-sans">
                      Create customizable templates within Autodesk tools to
                      streamline the configuration process.
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("left", "spring", 0.5, 0.5)}
                    className="w-3/4 p-8 xl:p-4 lg:p-4 flex flex-col gap-5 lg:gap-2 rounded-md shadow-lg xl:w-full lg:w-full md:w-full sm:w-full "
                  >
                    <div className="text-xl font-semibold font-serif">
                      Automation Tools
                    </div>
                    <div className="text-[17px] font-sans">
                      Set up automation tools to handle repetitive tasks and
                      ensure accurate configurations.
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("left", "spring", 0.5, 0.5)}
                    className="w-3/4 p-8 xl:p-4 lg:p-4 rounded-md flex flex-col gap-5 lg:gap-2 shadow-lg xl:w-full lg:w-full md:w-full sm:w-full"
                  >
                    <div className="text-xl font-semibold font-serif">
                      Integration
                    </div>
                    <div className="text-[17px] font-sans">
                      Integrate configuration tools with other systems (e.g.,
                      ERP, CRM) to provide a seamless workflow from design to
                      production.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-20 lg:p-10 md:p-10 sm:p-10 justify-center text-center items-center border-l-4 border-r-4 border-t-4 border-primary">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={textVariant(0.5)}
              className="flex text-black text-2xl sm:text-lg md:text-xl"
            >
              Enhance your design capabilities with our Product Configuration
              services.
              <br /> Contact us today to learn how we can help you create
              precise and efficient configurations tailored to your needs.
            </motion.div>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex w-2/5 h-0 border-2  border-primary"></div>
            <button
              className="flex w-1/5 px-4 sm:px-2 py-2 bg-primary relative text-center justify-center items-center text-4xl xl:text-4xl sm:text-lg lg:text-2xl md:text-xl sm:-top-5 lg:-top-6 md:-top-5 -top-7 rounded-md"
              onClick={() => setShow(true)}
            >
              Contact Us
            </button>
            <div className="flex w-2/5 border-2 h-0 border-primary"></div>
          </div>
        </div>

        {/*  ==========================================DUPLICATe ==========================================*/}

        <div className="bg-white flex flex-col gap-10 xs:gap-4 w-full h-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden ">
          <div className="bg-white text-black w-full p-20 xs:p-5">
            <div className="flex flex-row xs:gap-4 justify-around items-center xs:w-full xs:flex xs:flex-col xs:p-0 xs:space-y-9  ">
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
                alt=""
                className="w-full bg-white shadow-xl rounded-md"
              />
              <div className=" w-full">
                <div className="font-semibold text-2xl font-serif">
                  What is Product Configuration?
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-[15px] font-sans"
                >
                  Product Configuration involves setting up customizable
                  templates and automation processes within Autodesk tools to
                  quickly and accurately configure products based on specific
                  client needs. This service streamlines the design process,
                  reduces lead times, and ensures precision in every
                  configuration.
                </motion.div>
              </div>
            </div>
          </div>

          {/* ==================================================================================================== */}

          <div className="bg-white text-black p-20  xs:p-5">
            <div className="flex flex-row xs:gap-8 xs:flex-col-reverse justify-around items-center">
              <div className="px-20 w-2/3 xs:px-0 xs:w-full space-y-6 ">
                <div className="font-semibold xs:text-2xl font-serif">
                  Optimize Your Design Process with Advanced Product
                  Configuration
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-[15px] font-sans"
                >
                  Configuring products to meet specific client needs can be
                  complex and time-consuming, especially in industries like AEC
                  and manufacturing. Our Product Configuration services simplify
                  this process, using Autodesk tools like Inventor, Revit, Civil
                  3D, and Plant 3D to create flexible and efficient
                  configurations that meet your exact requirements.
                </motion.div>
              </div>
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
                alt=""
                className="w-full bg-white shadow-xl rounded-md md:p-16 sm:p-12"
              />
            </div>
          </div>
          {/* =========================================================================================================================================== */}

          <div className="bg-gray-100 w-[90%] mx-auto xs:p-5">
            <div className="p-4 xs:p-0">
              <div className="flex justify-center font-bold text-3xl font-serif p-6 xs:text-2xl xs:text-center ">
                Why Choose Our Product Configuration Services
              </div>
              <div className="flex flex-row justify-center gap-6 xs:flex xs:flex-col ">
                <div className="flex flex-row gap-6 xs:flex xs:flex-col ">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("right", "", 0.5, 0.5)}
                    className="shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif font-semibold p-4 xs:text-xl">
                      Customization
                    </div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">
                      Easily create customized product configurations that meet
                      the unique requirements of each project or client.
                    </div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("left", "", 0.5, 0.5)}
                    className=" shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif font-semibold p-4 xs:text-xl">
                      Efficiency
                    </div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">
                      Speed up the design process with automated configuration
                      tools, reducing lead times and increasing productivity.
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-row gap-6 xl:justify-center xs:flex xs:flex-col">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("right", "", 0.5, 0.5)}
                    className=" shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif font-semibold p-4 xs:text-xl">
                      Accuracy
                    </div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">
                      Ensure precise and error-free configurations with
                      automated checks and validations.
                    </div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn("left", "", 0.5, 0.5)}
                    className=" shadow-xl rounded-lg bg-white w-2/4 p-5 xs:w-full"
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="#6F4C5B"
                        className="size-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <div className="text-center text-2xl font-serif font-semibold p-4 xs:text-xl">
                      Flexibility
                    </div>
                    <div className="text-[17px] font-sans text-center w-full xs:text-base">
                      Adapt quickly to changing client demands and project
                      requirements with flexible configuration options.
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================================================================================= */}

          <div className="bg-white text-black p-20 xs:p-0">
            <div className="font-semibold text-2xl text-center p-8 font-serif xs:p-3">
              How We Implement Product Configuration
            </div>
            <div className="flex flex-row gap-4 p-5 justify-around items-center xs:flex xs:flex-col ">
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/1.png"
                alt=""
                className="w-full bg-white shadow-xl rounded-md md:p-16 sm:p-12"
              />
              <div className="px-20 w-2/3 xs:px-0 xs:w-full">
                <div className="text-[17px] flex flex-col gap-8 ">
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3 xs:w-full">
                    <div className="text-xl font-semibold font-serif">
                      Template Development
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={textVariant(0.5)}
                      className="text-[17px] font-sans"
                    >
                      Create customizable templates within Autodesk tools to
                      streamline the configuration process.
                    </motion.div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3 xs:w-full ">
                    <div className="text-xl font-semibold font-serif">
                      Automation Tools
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={textVariant(0.5)}
                      className="text-[17px] font-sans"
                    >
                      Set up automation tools to handle repetitive tasks and
                      ensure accurate configurations.
                    </motion.div>
                  </div>
                  <div className="w-2/3 p-5 rounded-md shadow-lg space-y-3 xs:w-full ">
                    <div className="text-xl font-semibold font-serif">
                      Integration
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={textVariant(0.5)}
                      className="text-[17px] font-sans"
                    >
                      Integrate configuration tools with other systems (e.g.,
                      ERP, CRM) to provide a seamless workflow from design to
                      production.
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-[85%] m-auto justify-center text-center items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={textVariant(0.5)}
              className="flex text-black text-lg text-start"
            >
              Enhance your design capabilities with our Product Configuration
              services.
              Contact us today to learn how we can help you create
              precise and efficient configurations tailored to your needs.
            </motion.div>
            <button
              className="flex px-4 py-2 bg-primary relative text-center justify-center items-center text-2xl rounded-md"
              onClick={() => setShow(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {show && <ContactModal show={show} setShow={setShow} />}
    </>
  );
};

export default ProductConfiguration;
