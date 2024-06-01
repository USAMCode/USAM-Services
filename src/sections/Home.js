import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from "@/section/SectionWrapper";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, 2000); // Change the interval as needed (2000ms = 2 seconds)

    return () => clearInterval(interval);
}, []);
  const images = [
    "https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg",
    "https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg",
    "https://usam.s3.ap-south-1.amazonaws.com/Image3.jpg",
    "https://usam.s3.ap-south-1.amazonaws.com/Image4.jpg",
  ];
  return (
    <div className="flex flex-row bg-[#CDD2E8] h-screen">
      <div className="flex flex-col w-3/5 justify-center items-center text-center bg-fixed">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-4xl md:text-6xl text-black font-bold mb-4"
        >
          Welcome to Our Service
        </motion.div>
        <div className="text-lg md:text-xl text-black mb-8">
          We provide the best solutions to enhance your business and life.
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-orange-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="flex w-2/5 items-center justify-end">
        <div className="w-5/6 h-3/5 relative rounded-md bg-secondary z-10">
          <div className="flex absolute w-full h-full rounded-md top-16 right-16 bg-white">
            <Carousel
            interval={null}
              activeIndex={index}
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
              }}
              indicators={false}
              controls={false}
            >
              {images.map((image, index) => (
                <Carousel.Item
                  key={index}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <img
                    src={image}
                    className="d-block w-[100%]"
                    style={{ objectFit: "cover" }}
                    alt={`Slide ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Home, "Home");
