import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { fadeScaleIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import Link from "next/link";


const Projects = () => {
  const projects = [
    {
      imgSrc: "https://d3e25fyg0500ti.cloudfront.net/1.webp",
      alt: "Gap Hunter",
      title: "Gap Hunter",
      description:
        "GapHunter automatically detects any gaps in your sketches and zooms directly to the area, allowing you to quickly and accurately address issues that could impact your design.",
      // link: "https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=8342440050065650514&appLang=en&os=Win64&mode=preview",
      link: "https://marketplace.autodesk.com/apps/608bf6ea-adbf-409b-8365-abb4eec0008c?priceId=23743976-ff73-4afe-955a-2c94f234a05a",
    },
    {
      imgSrc: "https://d3e25fyg0500ti.cloudfront.net/2.webp",
      alt: "Dim Check",
      title: "Dim Check",
      description:
        "DimCheck scans your drawings to identify any overridden dimensions, ensuring that all measurements adhere to your specified standards",
      // link: "https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=4214486912770355635&appLang=en&os=Win64&mode=preview",
      link: "https://marketplace.autodesk.com/apps/62693f07-e665-474d-8c6b-a75164fc7dfb?priceId=5a2d9f93-e1dd-4db0-a4f6-ec369bd928e7",
    },
    {
      imgSrc: "https://d3e25fyg0500ti.cloudfront.net/3.webp",
      alt: "Balloon Master",
      title: "Balloon Master",
      description:
        "BalloonMaster, the ultimate tool for ballooning dimensions specifically for inspection purposes in Inventor.",
      // link: "https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=630776272717761885&appLang=en&os=Win64&mode=preview",
      link: "https://marketplace.autodesk.com/apps/d4ac2239-59dc-4686-9f78-3e7bba0d0049?priceId=4a520971-6b34-4e96-8ab1-089d7ca13df9",
    },
    {
      imgSrc: "https://d3e25fyg0500ti.cloudfront.net/SlotMate.png",
      alt: "SlotMate",
      title: "SlotMate",
      description:
        "SlotMate automatically creates slot constraints and enables contact behavior for cylindrical components in Autodesk Inventor assemblies.",
      link: "https://marketplace.autodesk.com/apps/8c1b4871-5500-4320-92b4-c20129093ca6?priceId=0e445fbf-fd3a-485e-9e3a-0b858cf98681",
    },
  ];
  const revit = [
    {
      imgSrc: "https://d3e25fyg0500ti.cloudfront.net/elbow.ico",
      alt: "Elbow Rotate",
      title: "Elbow Rotate",
      description:
        "'Elbow Rotate'  is a Revit® add-in that allows precise, adjustable rotation of pipe-fitting elbows beyond the default 90-degree increments for enhanced flexibility.",
      // link: "https://apps.autodesk.com/RVT/en/Detail/Index?id=1819107434539299929&appLang=en&os=Win64",
      link: "https://marketplace.autodesk.com/apps/33e39db7-7ac2-4669-b2d9-684c28c3fae2?priceId=cdacfabe-2986-48cb-a67c-b4f80a1b803d",
    },
    {
      imgSrc: "https://d3e25fyg0500ti.cloudfront.net/TextManager.png",
      alt: "Text Manager",
      title: "Text Manager",
      description:
        "A tool designed to help Autodesk® Revit® users efficiently handle text-related tasks within their projects.",
      link: "https://marketplace.autodesk.com/apps/9e0b8bd7-cd7a-4ac2-83cf-077636604631?priceId=0cb7f75c-a125-4264-8976-8814ea88aa7e",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-8 w-[90%] xs:w-[95%] mx-auto">
        <motion.div variants={textVariant()}>
          <div className={styles.sectionSubText}>Our Products</div>


          <div className="2xl:text-3xl xl:text-3xl lg:text-2xl font-semibold sm:text-2xl xs:text-xl text-gray-700">
            For Autodesk Inventor
          </div>
        </motion.div>
        <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden xs:flex-col sm:flex-col md:flex-1 md:flex-wrap sm:justify-center sm:items-center xs:gap-8 sm:gap-8 w-full justify-between">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second sm:h-75 sm:w-[80%] xs:w-full xs:h-72 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl sm:h-75 sm:w-full xs:w-full xs:h-72  md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col gap-2 lg:p-5 lg:gap-2 md:gap-2">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl sm:ml-5 xs:ml-5 sm:text-xl">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg xl:text-xl sm:text-base xs:text-lg">
                    {project.description}{" "}
                  </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* ========================== */}
        <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden font-semibold sm:text-2xl xs:text-xl text-gray-700">
            For Autodesk Revit®
          </div>
        <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden xs:flex-col sm:flex-col md:flex-1 md:flex-wrap sm:justify-center sm:items-center xs:gap-8 sm:gap-8 w-full justify-between">
          {revit.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second sm:h-75 sm:w-[80%] xs:w-full xs:h-72 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl sm:h-75 sm:w-full xs:w-full xs:h-72  md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col gap-2 lg:p-5 lg:gap-2 md:gap-2">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl sm:ml-5 xs:ml-5 sm:text-xl">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg xl:text-xl sm:text-base xs:text-lg">
                    {project.description}{" "}
                  </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* -------------------------------------------------------- lg ---------------------------------------------------- */}
       
        <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-start lg:gap-x-12 lg:gap-y-16 w-full 2xl:hidden xl:hidden md:hidden sm:hidden xs:hidden ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second lg:w-80 h-75 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl lg:h-75 lg:w-80 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full lg:px-7 flex flex-col lg:gap-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-2">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg xl:text-xl lg:text-base xs:text-base">
                    {project.description}{" "}
                  </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* ================= */}
        <div className="lg:flex  2xl:hidden xl:hidden md:hidden sm:hidden xs:hidden lg:text-2xl font-semibold sm:text-2xl xs:text-xl text-gray-700">
            For Autodesk Revit®
          </div>
        <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-start lg:gap-x-12 lg:gap-y-16 w-full 2xl:hidden xl:hidden md:hidden sm:hidden xs:hidden ">
          {revit.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second lg:w-80 h-75 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl lg:h-75 lg:w-80 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full lg:px-7 flex flex-col lg:gap-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-2">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg xl:text-xl lg:text-base xs:text-base">
                    {project.description}{" "}
                  </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* --------------------------------------------------------2xl ---------------------------------------------------- */}


        <div className="2xl:flex flex-wrap justify-start gap-x-12 gap-y-16 w-full lg:hidden xl:hidden md:hidden sm:hidden xs:hidden ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 xs:w-full sm:w-full md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col lg:gap-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="2xl:text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-5">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg ">{project.description} </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* ========= */}
        <div className="2xl:flex w-full lg:hidden xl:hidden md:hidden sm:hidden xs:hidden 2xl:text-3xl font-semibold sm:text-2xl xs:text-xl text-gray-700">
          For Autodesk Revit®
        </div>
        <div className="2xl:flex flex-wrap justify-start gap-x-12 gap-y-16 w-full lg:hidden xl:hidden md:hidden sm:hidden xs:hidden ">
          {revit.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 xs:w-full sm:w-full md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col lg:gap-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="2xl:text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-5">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg ">{project.description} </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* --------------------------------------------------------xl ---------------------------------------------------- */}


        <div className="xl:flex flex-wrap justify-start gap-x-12 gap-y-16 w-full lg:hidden 2xl:hidden md:hidden sm:hidden xs:hidden ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 xs:w-full sm:w-full md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col lg:gap-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="2xl:text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-5">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg xl:text-lg lg:text-base xs:text-base">
                    {project.description}{" "}
                  </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* ========================== */}
        <div className="xl:flex lg:hidden 2xl:hidden md:hidden sm:hidden xs:hidden  xl:text-3xl font-semibold sm:text-2xl xs:text-xl text-gray-700">
          For Autodesk Revit®
        </div>
        <div className="xl:flex flex-wrap justify-start gap-x-12 gap-y-16 w-full lg:hidden 2xl:hidden md:hidden sm:hidden xs:hidden ">
          {revit.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl h-80 w-96 xs:w-full sm:w-full md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full p-10 flex flex-col lg:gap-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="2xl:text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-5">
                      {project.title}
                    </div>
                  </div>
                  <div className="2xl:text-lg xl:text-lg lg:text-base xs:text-base">
                    {project.description}{" "}
                  </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* --------------------------------------------------------md ---------------------------------------------------- */}


        <div className="md:flex 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden xs:flex-col sm:flex-col md:flex-1 md:flex-wrap md:gap-8 md:justify-center w-full justify-between">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second md:h-72 md:w-96 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl md:w-96 md:h-72 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full flex flex-col gap-2 md:p-6 md:gap-2 ">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="md:text-xl ml-4 font-semibold ">
                      {project.title}
                    </div>
                  </div>
                  <div className="md:text-base">{project.description} </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1  flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* ============= */}
        <div className="md:flex 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden font-semibold sm:text-2xl xs:text-xl text-gray-700">
          For Autodesk Revit®
        </div>
        <div className="md:flex 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden xs:flex-col sm:flex-col md:flex-1 md:flex-wrap md:gap-8 md:justify-center w-full justify-between">
          {revit.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className=" bg-second md:h-72 md:w-96 relative rounded-3xl"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeScaleIn(0.2, 0.5)}
                className="bg-white shadow-2xl md:w-96 md:h-72 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
              >
                <div className="w-full flex flex-col gap-2 md:p-6 md:gap-2 ">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                      />
                    </div>
                    <div className="md:text-xl ml-4 font-semibold ">
                      {project.title}
                    </div>
                  </div>
                  <div className="md:text-base">{project.description} </div>
                  <Link href={project.link}>
                    <div className="bg-first rounded-full w-1/3 p-1  flex justify-center text-white text-lg xl:p-1 ">
                      View
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* ==============================================sm=============================== */}




      </div>
    </>
  );
};


export default SectionWrapper(Projects, "projects");



