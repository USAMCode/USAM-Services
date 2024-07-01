import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring"; // Changed import from 'react-spring'
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import { Carousel } from "flowbite-react";
import Link from "next/link";

const Home = () => {

  const services = [
    {
      title: "Automation",
      content:
        "Unlock innovation and creativity and achieve outcomes faster with automation.",
      image:"https://usam.s3.ap-south-1.amazonaws.com/Automation.png",
      link:"services/automation"
    },
    {
      title: "Consulting",
      content:
        "Guiding Your Project Towards Success: Expert Consulting Every Step of the Way.",
        image:"https://usam.s3.ap-south-1.amazonaws.com/Consulting.png",
      link:"services/consulting"
      },
    {
      title: "Data & Insights",
      content:
        "The right people get the right information at the right time with connected data.",
        image:"https://usam.s3.ap-south-1.amazonaws.com/Data+Analysist.png",
      link:"services/datainsights"
      },
  ];

  return (
    <>
      <div className="flex flex-col bg-white xs:justify-center h-[80vh]">
        <div className="flex flex-col w-full absolute z-10 top-96 xs:w-[90%] n justify-center items-center text-center bg-fixed">
        </div>
        <div className="w-full  sm:hidden md:hidden lg:hidden items-center h-[100%] justify-center">
          <div className="relative top-20 xs:top-0 w-full h-[100%] object-contain  hover:backdrop-blur-md">
            <Carousel className="w-full" slideInterval={5000}>
              {services.map((service, index) => (
                <div key={index} className="flex w-full h-full justify-center">
                  <img className="w-full object-cover" src={service.image} alt=""/>
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="flex flex-col gap-4 absolute w-full xs:w-[80%] xs:mx-auto h-full justify-center items-center text-center">
                    <div className="text-5xl md:text-5xl xs:text-4xl text-white font-bold mb-4">{service.title}</div>
                    <div className="text-2xl lg:text-2xl xl:text-2xl xs:text-base md:text-xl text-white font-medium mb-8">{service.content}</div>
                    <Link href={service.link}>
                      <button className="bg-first text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-second hover:text-black transition duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div> 
              ))}
            </Carousel>
          </div>
        </div>
        {/* ========================================================================== */}

        <div className="2xl:hidden xl:hidden xs:hidden flex flex-col w-full h-full justify-between">
          <div className="relative flex flex-col w-full justify-center items-center h-full rounded-md">
            <div className="relative w-full h-full object-contain justify-center items-center rounded-md">
            <Carousel indicators rightControl=" " leftControl=" " className="w-full" slideInterval={5000}>
              {services.map((service, index) => (
                <div key={index} className="flex w-full h-full">
                  <img className="w-full object-cover" src={service.image} alt=""/>
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="flex flex-col gap-4 absolute w-full h-full justify-center items-center text-center">
                    <div className="text-5xl xs:text-4xl text-white font-bold">{service.title}</div>
                    <div className="text-base text-white font-medium">{service.content}</div>
                    <Link href={service.link}>
                      <button className="bg-first text-white px-6 py-2 rounded-full text-lg md:text-lg hover:bg-second transition duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div> 
              ))}
            </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Home, "Home");
