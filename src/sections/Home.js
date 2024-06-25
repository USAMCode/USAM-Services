import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring"; // Changed import from 'react-spring'
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import Link from "next/link";
import glide from "@glidejs/glide";

const Home = () => {
  const images = [
    "/images/AdobeStock_286032339.jpeg",
    "/images/AdobeStock_501059332.jpeg",
    "/images/AdobeStock_589427987.jpeg",
  ];

  useEffect(() => {
    const slider = new glide(".glide-09",{
      type:"carousel",
      autoplay:1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 6,
      classes:{
        nav:{
          active:"[&>*]:bg-wuiSlate-700"
        }
      },
      breakpoints:{
        1024:{
          perView:2
        },
        640:{
          perView:1,
          gap:36
        }
      }
    }).mount()
    return() => {
      slider.destroy()
    }
  },[])

  const services = [
    {
      title: "Automation",
      content:
        "Unlock innovation and creativity and achieve outcomes faster with automation.",
      link:"services/automation"
    },
    {
      title: "Consulting",
      content:
        "Guiding Your Project Towards Success: Expert Consulting Every Step of the Way.",
      link:"services/consulting"
      },
    {
      title: "Data & Insights",
      content:
        "The right people get the right information at the right time with connected data.",
      link:"services/datainsights"
      },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <div className="flex flex-col bg-quinary xs:justify-center h-screen">
        <div className="flex flex-col w-full absolute z-10 top-96 xs:w-[90%] n justify-center items-center text-center bg-fixed">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className={`text-7xl md:text-6xl xs:text-4xl ${index % services.length === 2 ? "text-black" : "text-white"}  font-bold mb-4`}
          >
            {services[index % services.length].title}
          </motion.div>
          <div className={`text-3xl xs:text-xl md:text-xl ${index % services.length === 2 ? "text-black" : "text-white"} font-medium mb-8`}>
            {services[index % services.length].content}
          </div>
          <Link href={services[index % services.length].link}>
            <button className="bg-primary text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
        <div className="w-full  sm:hidden md:hidden lg:hidden items-center h-[100%] justify-center">
          <div className="relative top-24 xs:top-0 w-full h-[100%] object-contain  hover:backdrop-blur-md">
            {transitions((style, item) => (
              <animated.div
                style={{
                  ...style,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <img
                  src={item}
                  className="w-full h-full object-cover"
                  alt={`slide ${index}`}
                />
              </animated.div>
            ))}
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>
        </div>
        {/* ========================================================================== */}

        <div className="2xl:hidden xl:hidden xs:hidden flex flex-col w-full h-full justify-between">
          <div className="relative flex flex-col w-full justify-center items-center h-full rounded-md">
            <div className="relative w-full h-full object-contain justify-center items-center rounded-md">
              {transitions((style, item) => (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    justifyContent: "center",
                    alignContent: "center",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <img
                    src={item}
                    className="w-full h-3/4 object-cover"
                    alt={`slide ${index}`}
                  />
                </animated.div>
              ))}
              {/* <div className="flex absolute flex-col w-full h-full xs:hidden 2xl:hidden xl:hidden justify-center items-center text-center bg-fixed">
                <motion.div
                  variants={slideIn("left", "tween", 0.2, 1)}
                  className="text-4xl md:text-5xl sm:text-5xl lg:text-6xl text-black font-bold mb-4"
                >
                  {services[index % services.length].title}
                </motion.div>
                <div className="text-lg w-[90%] mx-auto md:text-xl text-black mb-8">
                  {services[index % services.length].content}
                </div>
                <div className="flex w-full justify-center">
                  <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold md:text-xl hover:bg-orange-600 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      <div className="glide-09 absolute 2xl:bottom-5 xl:bottom-4 md:bottom-3 lg:bottom-3 sm:bottom-3 xs:bottom-3 w-full hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default SectionWrapper(Home, "Home");
