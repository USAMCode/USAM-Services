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

const OtherConsulting = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-8 relative w-full">
        <div className="w-full relative">
          <img
            src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
            alt=""
            className="w-full h-[650px] xs:h-[300px] md:h-[450px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        </div>
        <div className="bg-white h-full xs:hidden w-[90%] mx-auto flex flex-col">
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black border-l-4 p-20 md:px-5 md:py-10 lg:p-0 sm:p-10 lg:px-5 lg:py-10 xl:p-10 border-l-first">
            <div className="flex flex-row gap-8 md:gap-4 lg:gap-6 sm:flex-col sm:gap-6 justify-around items-center">
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full lg:w-full md:w-full sm:w-full h-full"
                />
              </div>
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-6 md:gap-2 lg:gap-4 ">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl lg:text-2xl font-serif">
                Process Discovery and Optimization
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans"
                >
                  Identify inefficiencies and bottlenecks in your current workflows. Our experts analyze your existing processes in tools such as Plant 3D, 
                  Civil 3D, Revit, and Inventor, and provide tailored recommendations to streamline operations, reduce waste, and enhance overall productivity.
                   For example, we can optimize your Plant 3D workflows to reduce pipeline design time or streamline Civil 3D processes to accelerate road and bridge design projects.
                </motion.div>
                <div className="flex w-full">
                  <button onClick={() => setShow(true)} className="flex px-4 py-2 rounded-full bg-first 2xl:text-2xl text-xl md:text-base text-white">
                    Contact Us
                  </button>
                </div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
            </div>
          </div>
          <div className="flex w-full border-2 border-first rounded-bl-md rounded-tr-md"></div>
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black p-20 sm:p-10 md:px-2 md:p-10 lg:py-10 lg:px-5 xl:p-10  border-r-4 border-r-first">
            <div className="flex flex-row sm:flex-col-reverse sm:gap-6 md:gap-4 justify-around lg:justify-between items-center">
              <div className="h-full flex flex-col gap-6 w-full lg:w-4/6 xl:w-2/4">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl md:w-full lg:text-2xl font-serif sm:w-full lg:w-[90%] w-[80%] m-auto ">
                Custom Automation Solutions
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans sm:w-full w-[80%] md:w-full lg:w-[90%] m-auto"
                >
                  Transform repetitive tasks into automated processes with our custom automation solutions.
                   We develop bespoke tools and scripts for Autodesk software like Revit, Inventor, Civil 3D, and Plant 3D to automate routine tasks. For instance,
                   automating the generation of bills of materials in Inventor or automating the creation of construction documentation in Revit can save you time and reduce the risk of errors.
                </motion.div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInBlur(0.25, 0.5)}
                className="w-full lg:w-3/6 xl:w-2/4 h-full flex justify-center items-center "
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex w-full border-2 border-first rounded-tl-md"></div>
          {/* =========================================================================================================================================== */}


          <div className="bg-white text-black border-l-4 p-20 md:px-5 md:py-10 lg:p-0 sm:p-10 lg:px-5 lg:py-10 xl:p-10 border-l-first">
            <div className="flex flex-row gap-8 md:gap-4 lg:gap-6 sm:flex-col sm:gap-6 justify-around items-center">
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full lg:w-full md:w-full sm:w-full h-full"
                />
              </div>
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-6 md:gap-2 lg:gap-4 ">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl lg:text-2xl font-serif">
                Data Management Consulting
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans"
                >
                  Ensure your data is organized, secure, and easily accessible with our data management consulting services. We help you implement best practices for data storage, retrieval, and governance, whether on-premises or in the cloud, using tools like Vault for data management in Inventor and Plant 3D or BIM 360 for Revit projects. 
                  This ensures your data supports your business objectives and enhances collaboration.
                </motion.div>
                <div className="flex w-full">
                  <button className="flex px-4 py-2 rounded-full bg-first 2xl:text-2xl text-xl md:text-base text-white">
                    Contact Us
                  </button>
                </div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
            </div>
          </div>
          <div className="flex w-full border-2 border-first rounded-bl-md rounded-tr-md"></div>
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black p-20 sm:p-10 md:px-2 md:p-10 lg:py-10 lg:px-5 xl:p-10  border-r-4 border-r-first">
            <div className="flex flex-row sm:flex-col-reverse sm:gap-6 md:gap-4 justify-around lg:justify-between items-center">
              <div className="h-full flex flex-col gap-6 w-full lg:w-4/6 xl:w-2/4">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl md:w-full lg:text-2xl font-serif sm:w-full lg:w-[90%] w-[80%] m-auto ">
                Project Implementation Assistance
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans sm:w-full w-[80%] md:w-full lg:w-[90%] m-auto"
                >
                  Navigate complex project requirements with ease through our project implementation assistance. 
                  Our team provides hands-on support during the planning, execution, and closing phases of your projects using tools such as Civil 3D for infrastructure 
                  projects or Revit for building design.We ensure all aspects are managed effectively and 
                   delivered on time and within budget, such as overseeing the implementation of a large-scale infrastructure project using Civil 3D.
                </motion.div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInBlur(0.25, 0.5)}
                className="w-full lg:w-3/6 xl:w-2/4 h-full flex justify-center items-center "
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex w-full border-2 border-first rounded-tl-md"></div>
          {/* =========================================================================================================================================== */}

          <div className="bg-white text-black border-l-4 p-20 md:px-5 md:py-10 lg:p-0 sm:p-10 lg:px-5 lg:py-10 xl:p-10 border-l-first">
            <div className="flex flex-row gap-8 md:gap-4 lg:gap-6 sm:flex-col sm:gap-6 justify-around items-center">
              <div className="w-full lg:w-1/2 h-full flex justify-center items-center ">
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full lg:w-full md:w-full sm:w-full h-full"
                />
              </div>
              <div className="w-full lg:w-1/2 h-full flex flex-col gap-6 md:gap-2 lg:gap-4 ">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl lg:text-2xl font-serif">
                Process Standardization Services
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans"
                >
                  Achieve consistency and reliability in your operations with our process standardization services. 
                  We help you establish and enforce standardized procedures and best practices across your projects using software like Revit, 
                  Inventor, Plant 3D, and Civil 3D. For example, standardizing the workflow for
                   HVAC system design in Revit or setting up standard templates and procedures for plant design in Plant 3D ensures uniformity, compliance,
                    and high-quality results every time.
                </motion.div>
                <div className="flex w-full">
                  <button className="flex px-4 py-2 rounded-full bg-first 2xl:text-2xl text-xl md:text-base text-white">
                    Contact Us
                  </button>
                </div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
            </div>
          </div>
          <div className="flex w-full border-2 border-first rounded-bl-md rounded-tr-md"></div>
          {/* ============================================================================================================================================ */}

          <div className="bg-white text-black p-20 sm:p-10 md:px-2 md:p-10 lg:py-10 lg:px-5 xl:p-10  border-r-4 border-r-first">
            <div className="flex flex-row sm:flex-col-reverse sm:gap-6 md:gap-4 justify-around lg:justify-between items-center">
              <div className="h-full flex flex-col gap-6 w-full lg:w-4/6 xl:w-2/4">
                <div className="font-semibold text-3xl sm:text-2xl md:text-xl md:w-full lg:text-2xl font-serif sm:w-full lg:w-[90%] w-[80%] m-auto ">
                Technology Integration Consulting
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-xl md:text-base sm:text-base lg:text-lg font-sans sm:w-full w-[80%] md:w-full lg:w-[90%] m-auto"
                >
                  Seamlessly connect your design, ERP, CRM, and billing software with our technology integration consulting. 
                  We enable data flow and interoperability between different systems, such as integrating Revit with your ERP system to streamline project costing or 
                  connecting Plant 3D with your CRM for better project management. 
                  This creates a cohesive digital environment that enhances visibility, efficiency, and informed decision-making.
                </motion.div>
              </div>
              {/* <div className="p-28 lg:p-16 bg-white shadow-xl rounded-md md:p-16 sm:p-12">PICTURE</div> */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInBlur(0.25, 0.5)}
                className="w-full lg:w-3/6 xl:w-2/4 h-full flex justify-center items-center "
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                  alt="Drawing Automation"
                  className="rounded-md object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          {/* <div className="flex w-full border-2 border-first rounded-tl-md"></div> */}
          {/* =========================================================================================================================================== */}

          
          <div className="flex flex-row w-full justify-between">
            <div className="flex w-2/5 h-0 border-2  border-first"></div>
            <button
              className="flex w-1/6 px-4 sm:px-2 py-2 bg-first text-white relative text-center justify-center items-center text-3xl xl:text-2xl sm:text-base lg:text-2xl md:text-base sm:-top-5 lg:-top-6 md:-top-5 -top-7 rounded-full"
              onClick={() => setShow(true)}
            >
              Contact Us
            </button>
            <div className="flex w-2/5 border-2 h-0 border-first"></div>
          </div>
        </div>

        {/*  ==========================================DUPLICATe ==========================================*/}

        <div className="bg-white flex flex-col gap-10 xs:gap-4 w-full h-full 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden ">
          <div className="bg-white text-black w-full p-20 xs:p-5">
            <div className="flex flex-row xs:gap-4 justify-around items-center xs:w-full xs:flex xs:flex-col xs:p-0 xs:space-y-9  ">
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
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
                  Product Configuration involves setting up customizable templates and automation processes within Autodesk tools to quickly and
                   accurately configure products based on specific client needs. This service streamlines the design process, reduces lead times, 
                   and ensures precision in every configuration.
                </motion.div>
              </div>
            </div>
          </div>

          {/* ==================================================================================================== */}

          <div className="bg-white text-black p-20  xs:p-5">
            <div className="flex flex-row xs:gap-8 xs:flex-col-reverse justify-around items-center">
              <div className="px-20 w-2/3 xs:px-0 xs:w-full space-y-6 ">
                <div className="font-semibold xs:text-2xl font-serif">
                Optimize Your Design Process with Advanced Product Configuration
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={textVariant(0.5)}
                  className="text-[15px] font-sans"
                >
                  Configuring products to meet specific client needs can be complex and time-consuming, especially
                   in industries like AEC and manufacturing. Our Product Configuration services simplify this process, using Autodesk tools like Inventor, 
                   Revit, Civil 3D, and Plant 3D to create flexible and efficient configurations that meet your exact requirements.
                </motion.div>
              </div>
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Consulting.webp"
                alt=""
                className="w-full bg-white shadow-xl rounded-md md:p-16 sm:p-12"
              />
            </div>
          </div>

          {/* =========================================================================================================================================== */}

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
              className="flex px-4 py-2 bg-first relative text-white text-center justify-center items-center text-2xl rounded-full"
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

export default OtherConsulting;
