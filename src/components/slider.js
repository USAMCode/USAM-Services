import { useState, useEffect } from "react";
import ReactCardCarousel from 'react-card-carousel'

const slides = [
  {
    id: 1,
    text: "I have been using this service for over a year now, and it has completely transformed the way we do business. The efficiency and reliability are unmatched, and the customer support is always there when we need them. Highly recommend to anyone looking to streamline their operations!",
  },
  {
    id: 2,
    text: "The team's creativity and attention to detail have significantly boosted our marketing efforts. Their innovative strategies and professional approach have led to a noticeable increase in our customer engagement and sales. I couldn't be happier with the results.",
  },
  {
    id: 3,
    text: "Switching to this platform was one of the best decisions we've made. It’s user-friendly, and the features are exactly what we need to manage our daily tasks efficiently. The support team is incredibly responsive and helpful. Highly recommend it to anyone in the fitness industry.",
  },
  {
    id: 4,
    text: "The software has revolutionized our HR processes. From recruitment to employee management, everything is seamless and efficient. The customization options are particularly impressive, allowing us to tailor the system to our specific needs. Fantastic product and excellent customer service!",
  },
  {
    id: 5,
    text: "As a small business owner, finding reliable and affordable tools is crucial. This service has exceeded my expectations in every way. It's cost-effective, easy to use, and the customer support is top-notch. It’s been a game-changer for my business operations.",
  },
];

export default function Sliders() {
  return (
    <>
      <div className="flex flex-col xs:hidden gap-10 justify-center items-center w-[90%] h-full mx-auto">
        <div className="flex text-5xl font-bold text-black">
          We value our Client's Feedback
        </div>
        <div className="relative flex flex-col w-full h-2/3">
          <div className="overflow-hidden h-full w-full justify-center flex flex-col rounded-lg">
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              {slides.map((slide, index) => (
                <div key={index} className="flex flex-row w-full justify-center items-center gap-10 rounded-md shadow-lg bg-tertiary p-20">
                  <div className="flex w-72 h-72 rounded-full">
                    <img className="flex rounded-full w-full h-full object-cover" src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg" alt=""/>
                  </div>
                  <div className="text-black w-96 text-lg bg-tertiary">{slide.text}</div>
                </div>
              ))}
            </ReactCardCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
