"use client";

import { Carousel } from "flowbite-react";

export function MultiSlider() {
  const testimonials = [
    {
      id: 1,
      image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+2.png"
    },
    {
      id: 2,
      image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+3.png"

    },
    {
      id: 3,
      image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+4.png"

    },
    {
      id: 4,
      image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+1.png"

    },
  ];

  return (
    <div className="h-full p-10 sm:h-64 xl:h-80 2xl:h-full">
      <Carousel slideInterval={3000}>
        <div className="flex gap-10 justify-around">
          {testimonials.slice(0, 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className=" w-1/3"
            >
              <div className="mb-3 w-full h-full flex justify-center">
                <img className="w-full h-full rounded-3xl" src={testimonial.image} alt=""/>
              </div>
              
            </div>
          ))}
        </div>
        <div className="flex gap-10 justify-around">
          {testimonials.slice(2, 4).map((testimonial) => (
            <div
              key={testimonial.id}
              className=" w-1/3"
            >
              <div className="mb-3 w-full h-full flex justify-center">
                <img className="w-full h-full rounded-3xl" src={testimonial.image} alt=""/>
              </div>
              
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
