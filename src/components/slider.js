import { useState, useEffect } from 'react';

const slides = [
  { id: 1, text:  "I have been using this service for over a year now, and it has completely transformed the way we do business. The efficiency and reliability are unmatched, and the customer support is always there when we need them. Highly recommend to anyone looking to streamline their operations!" },
  { id: 2, text: "The team's creativity and attention to detail have significantly boosted our marketing efforts. Their innovative strategies and professional approach have led to a noticeable increase in our customer engagement and sales. I couldn't be happier with the results." },
  { id: 3, text: "Switching to this platform was one of the best decisions we've made. It’s user-friendly, and the features are exactly what we need to manage our daily tasks efficiently. The support team is incredibly responsive and helpful. Highly recommend it to anyone in the fitness industry." },
  { id: 4, text: "The software has revolutionized our HR processes. From recruitment to employee management, everything is seamless and efficient. The customization options are particularly impressive, allowing us to tailor the system to our specific needs. Fantastic product and excellent customer service!" },
  { id: 5, text: "As a small business owner, finding reliable and affordable tools is crucial. This service has exceeded my expectations in every way. It's cost-effective, easy to use, and the customer support is top-notch. It’s been a game-changer for my business operations." },
  
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-12 flex items-center justify-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-lg italic text-black">{slide.text}</div>
          </div>


        ))}
      </div>
      {/* <div className="flex justify-center mt-28">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
