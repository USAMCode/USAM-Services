// src/components/Projects.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { fadeIn, fadeScaleIn, textVariant } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Projects = [
    {
      img: "https://usam-services.s3.ap-south-1.amazonaws.com/Image1.jpg",
      content: "",
    },
    {
      img: "https://usam-services.s3.ap-south-1.amazonaws.com/Image1.jpg",
      content: "",
    },
    {
      img: "https://usam-services.s3.ap-south-1.amazonaws.com/Image1.jpg",
      content: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === Projects.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full relative ">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 focus:outline-none gap-4  justify-center items-center w-full"
            >
              <div className="flex flex-col gap-4 h-full w-full justify-center items-center">
                <img
                  src={project.img}
                  alt="Welcome to USAM"
                  className="w-full bg-white h-2/4"
                />
                <div className="text-black">Welcome to USAM</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-[90%] xs:w-[95%] mx-auto">
        <motion.div variants={textVariant()}>
          <div className={styles.sectionSubText}>Products</div>

          <div className="2xl:text-3xl xl:text-3xl lg:text-2xl font-semibold sm:text-2xl xs:text-xl text-gray-700">
            For You.
          </div>
        </motion.div>
        <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden xs:flex-col sm:flex-col md:flex-1 md:flex-wrap sm:justify-center sm:items-center xs:gap-8 sm:gap-8 w-full justify-between">
          {/* <div className="h-full flex lg:w-[90%] justify-center"> */}
          <motion.div



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
                    <img
                      src="/img/1.png"
                      className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl sm:ml-5 xs:ml-5 sm:text-xl">
                    Gap Hunter
                  </div>
                </div>
                <div className="2xl:text-lg xl:text-xl sm:text-base xs:text-lg">
                  GapHunter automatically detects any gaps in your sketches
                  and zooms directly to the area, allowing you to quickly and
                  accurately address issues that could impact your design.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=8342440050065650514&appLang=en&os=Win64&mode=preview"}>
                  <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                    View 
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative sm:h-75 sm:w-[80%] xs:w-full xs:h-72 md:w-80 lg:w-96 h-80 rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl sm:h-75 sm:w-full xs:w-full xs:h-72 md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col gap-3 md:gap-2">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/2.png"
                      className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-xl md:text-lg xl:text-2xl sm:ml-5 xs:ml-5 sm:text-xl">
                    Dim Check
                  </div>
                </div>
                <div className="2xl:text-lg xl:text-lg xs:text-lg sm:text-base">
                  DimCheck scans your drawings to identify any overridden
                  dimensions, ensuring that all measurements adhere to your
                  specified standards{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=4214486912770355635&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </Link>

              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative sm:h-75 sm:w-[80%] md:w-80 lg:w-96 xs:w-full xs:h-72 rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl sm:h-75 sm:w-full  xs:w-full xs:h-72 md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col gap-3">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/3.png"
                      className="w-10 h-10 object-cover lg:h-14 lg:w-14 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-xl xl:text-2xl sm:ml-5 xs:ml-5 sm:text-xl">
                    Balloon Master
                  </div>
                </div>
                <div className=" 2xl:text-lg xl:text-lg xs:text-lg sm:text-base">
                  BalloonMaster, the ultimate tool for ballooning dimensions
                  specifically for inspection purposes in Inventor.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=630776272717761885&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>

        {/* -------------------------------------------------------- lg ---------------------------------------------------- */}

        <div className="lg:flex lg:justify-between lg:flex-row lg:flex-nowrap w-full 2xl:hidden xl:hidden md:hidden sm:hidden xs:hidden ">
          {/* <div className="h-full flex lg:w-[90%] justify-center"> */}
          <motion.div
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
                    <img
                      src="/img/1.png"
                      className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-2">
                    Gap Hunter
                  </div>
                </div>
                <div className="2xl:text-lg xl:text-xl lg:text-base xs:text-base">
                  GapHunter automatically detects any gaps in your sketches
                  and zooms directly to the area, allowing you to quickly and
                  accurately address issues that could impact your design.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=8342440050065650514&appLang=en&os=Win64&mode=preview"}>
                  <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                    View
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative lg:w-80 h-75 rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl lg:h-75 lg:w-80 xs:w-full sm:w-full md:w-80 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col lg:gap-4 md:gap-2">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/2.png"
                      className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl flex font-semibold lg:text-2xl md:text-lg xl:text-2xl  ml-2">
                    Dim Check
                  </div>
                </div>
                <div className="2xl:text-lg xl:text-lg lg:text-base xs:text-base">
                  DimCheck scans your drawings to identify any overridden
                  dimensions, ensuring that all measurements adhere to your
                  specified standards{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=4214486912770355635&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative lg:w-80 lg:h-75 rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl lg:h-75 lg:w-80 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full lg:p-10 flex flex-col gap-4">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/3.png"
                      className="w-10 h-10 object-cover lg:h-14 lg:w-14 "
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-2xl xl:text-2xl ml-2">
                    Balloon Master
                  </div>
                </div>
                <div className=" 2xl:text-lg xl:text-lg xs:text-base lg:text-base">
                  BalloonMaster, the ultimate tool for ballooning dimensions
                  specifically for inspection purposes in Inventor.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=630776272717761885&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>

        {/* ------------------------------------lg /------------------------------------------------ */}

        {/* --------------------------------------------------------2xl ---------------------------------------------------- */}

        <div className="2xl:flex justify-around w-full lg:hidden xl:hidden md:hidden sm:hidden xs:hidden ">
          {/* <div className="h-full flex lg:w-[90%] justify-center"> */}
          <motion.div
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
                    <img
                      src="/img/1.png"
                      className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                    />
                  </div>
                  <div className="2xl:text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-5">
                    Gap Hunter
                  </div>
                </div>
                <div className="2xl:text-lg ">
                  GapHunter automatically detects any gaps in your sketches
                  and zooms directly to the area, allowing you to quickly and
                  accurately address issues that could impact your design.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=8342440050065650514&appLang=en&os=Win64&mode=preview"}>
                  <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                    View
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 rounded-3xl"
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
                    <img
                      src="/img/2.png"
                      className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl flex font-semibold lg:text-2xl md:text-lg xl:text-2xl  ml-5">
                    Dim Check
                  </div>
                </div>
                <div className="2xl:text-lg">
                  DimCheck scans your drawings to identify any overridden
                  dimensions, ensuring that all measurements adhere to your
                  specified standards{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=4214486912770355635&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative w-96 h-80 md:w-80 lg:w-96 sm:w-full xs:w-full rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl h-80 w-96 sm:w-full xs:w-full md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col gap-4">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/3.png"
                      className="w-10 h-10 object-cover lg:h-14 lg:w-14 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-2xl xl:text-2xl ml-5">
                    Balloon Master
                  </div>
                </div>
                <div className=" 2xl:text-lg xl:text-lg xs:text-base lg:text-base">
                  BalloonMaster, the ultimate tool for ballooning dimensions
                  specifically for inspection purposes in Inventor.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=630776272717761885&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>

        {/* ------------------------------------2xl /------------------------------------------------ */}

        {/* --------------------------------------------------------xl ---------------------------------------------------- */}

        <div className="xl:flex justify-around w-full lg:hidden 2xl:hidden md:hidden sm:hidden xs:hidden ">
          {/* <div className="h-full flex lg:w-[90%] justify-center"> */}
          <motion.div
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
                    <img
                      src="/img/1.png"
                      className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                    />
                  </div>
                  <div className="2xl:text-2xl font-semibold lg:text-2xl md:text-lg xl:text-2xl ml-5">
                    Gap Hunter
                  </div>
                </div>
                <div className="2xl:text-lg xl:text-lg lg:text-base xs:text-base">
                  GapHunter automatically detects any gaps in your sketches
                  and zooms directly to the area, allowing you to quickly and
                  accurately address issues that could impact your design.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=8342440050065650514&appLang=en&os=Win64&mode=preview"}>
                  <div className="bg-first rounded-full w-1/3 p-1 flex justify-center text-white text-lg xl:p-1 ">
                    View
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative w-96 sm:w-full xs:w-full md:w-80 lg:w-96 h-80 rounded-3xl"
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
                    <img
                      src="/img/2.png"
                      className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl flex font-semibold lg:text-2xl md:text-lg xl:text-2xl  ml-5">
                    Dim Check
                  </div>
                </div>
                <div className="2xl:text-lg xl:text-lg lg:text-base xs:text-base">
                  DimCheck scans your drawings to identify any overridden
                  dimensions, ensuring that all measurements adhere to your
                  specified standards{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=4214486912770355635&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative w-96 h-80 md:w-80 lg:w-96 sm:w-full xs:w-full rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl h-80 w-96 sm:w-full xs:w-full md:w-80 lg:w-96 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col gap-4">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/3.png"
                      className="w-10 h-10 object-cover lg:h-14 lg:w-14 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="text-2xl font-semibold lg:text-2xl xl:text-2xl ml-5">
                    Balloon Master
                  </div>
                </div>
                <div className=" 2xl:text-lg xl:text-lg xs:text-base lg:text-base">
                  BalloonMaster, the ultimate tool for ballooning dimensions
                  specifically for inspection purposes in Inventor.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=630776272717761885&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>

        {/* ------------------------------------xl /------------------------------------------------ */}
        {/* --------------------------------------------------------md ---------------------------------------------------- */}

        <div className="md:flex 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden xs:flex-col sm:flex-col md:flex-1 md:flex-wrap md:gap-8 md:justify-center w-full justify-between">
          {/* <div className="h-full flex lg:w-[90%] justify-center"> */}
          <motion.div
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
                    <img
                      src="/img/1.png"
                      className=" h-10 w-10 object-cover lg:h-12 lg:w-12 md:h-10 md:w-10"
                    />
                  </div>
                  <div className="md:text-xl ml-4 font-semibold ">
                    Gap Hunter
                  </div>
                </div>
                <div className="md:text-base">
                  GapHunter automatically detects any gaps in your sketches
                  and zooms directly to the area, allowing you to quickly and
                  accurately address issues that could impact your design.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=8342440050065650514&appLang=en&os=Win64&mode=preview"}>
                  <div className="bg-first rounded-full w-1/3 p-1  flex justify-center text-white text-lg xl:p-1 ">
                    View
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative md:w-96 md:h-72 rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl md:w-96 md:h-72 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col gap-3 md:gap-2">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/2.png"
                      className="h-10 w-10 object-cover lg:h-14 lg:w-14 md:h-11 md:w-11 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="md:text-xl font-semibold md:ml-4 ">
                    Dim Check
                  </div>
                </div>
                <div className="md:text-base">
                  DimCheck scans your drawings to identify any overridden
                  dimensions, ensuring that all measurements adhere to your
                  specified standards{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=4214486912770355635&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1 ">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
          {/* <div className="h-full flex justify-center"> */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeScaleIn(0.2, 0.5)}
            className="bg-second relative md:w-96 md:h-72 rounded-3xl"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeScaleIn(0.2, 0.5)}
              className="bg-white shadow-2xl md:w-96 md:h-72 flex rounded-3xl justify-center items-center absolute top-[-10px] left-2 z-10"
            >
              <div className="w-full p-10 flex flex-col gap-3">
                <div className="flex items-center">
                  <div>
                    <img
                      src="/img/3.png"
                      className="w-10 h-10 object-cover lg:h-14 lg:w-14 xl:h-12 xl:w-12"
                    />
                  </div>
                  <div className="md:text-xl font-semibold md:ml-4 ">
                    Balloon Master
                  </div>
                </div>
                <div className=" 2xl:text-lg xl:text-lg xs:text-base">
                  BalloonMaster, the ultimate tool for ballooning dimensions
                  specifically for inspection purposes in Inventor.{" "}
                </div>
                <Link href={"https://apps.autodesk.com/INVNTOR/en/Detail/Index?id=630776272717761885&appLang=en&os=Win64&mode=preview"}>
                  <button className="bg-first rounded-full w-1/3 p-1 text-white text-lg xl:p-1">
                    View
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>


        {/* ------------------------------------md /------------------------------------------------ */}


      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
