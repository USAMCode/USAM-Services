import React from "react";
import { Carousel } from "flowbite-react";
import Link from "next/link";

const Home = () => {
  
  const services = [
    {
      title: "Automation",
      content:
        "Unlock innovation and creativity and achieve outcomes faster with automation.",
      image: "https://d1nw187rmwcpt3.cloudfront.net/Automation.png",
      link: "services/automation",
    },
    {
      title: "Consulting",
      content:
        "Guiding Your Project Towards Success: Expert Consulting Every Step of the Way.",
      image: "https://d1nw187rmwcpt3.cloudfront.net/Consulting.png",
      link: "services/consulting",
    },
    {
      title: "Data & Insights",
      content:
        "The right people get the right information at the right time with connected data.",
      image: "https://d1nw187rmwcpt3.cloudfront.net/Data+Analysist.png",
      link: "services/datainsights",
    },
  ];

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] w-full mx-auto flex flex-row xs:flex-col items-start gap-5`}
      >
        <div className="flex flex-row gap-4 w-full h-full xs:w-[100%]">
        <Carousel className="w-full rounded-none" slideInterval={5000}>           
          {services.map((service, index) => (
            <div key={index} className="flex w-full h-full xs:rounded-none justify-center">
              <img className="w-full object-cover rounded-none xs:rounded-none" style={{borderRadius:"0px"}} src={service.image} alt=""/>
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="flex flex-col gap-4 absolute w-full xs:w-[80%] xs:mx-auto h-full justify-center items-center text-center">
                <div className="text-5xl md:text-5xl xs:text-4xl text-white font-bold mb-4">{service.title}</div>
                <div className="text-2xl lg:text-2xl xl:text-2xl w-[85%] mx-auto xs:text-base sm:text-base md:text-xl text-white font-medium mb-8">{service.content}</div>
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
    </section>
  );
};

export default Home;
