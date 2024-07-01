import { useState, useEffect, useRef } from "react";
import { Carousel } from "flowbite-react";
import glide from "@glidejs/glide";

const slides = [
  {
    id: 1,
    text: "I have been using this service for over a year now, and it has completely transformed the way we do business. The efficiency and reliability are unmatched, and the customer support is always there when we need them. Highly recommend to anyone looking to streamline their operations!",
    name: "Joel Revington",
    city:"Chennai"
  },
  {
    id: 2,
    text: "The team's creativity and attention to detail have significantly boosted our marketing efforts. Their innovative strategies and professional approach have led to a noticeable increase in our customer engagement and sales. I couldn't be happier with the results.",
    name: "Joel Revington",
    city:"Chennai"
  },
  {
    id: 3,
    text: "Switching to this platform was one of the best decisions we've made. It’s user-friendly, and the features are exactly what we need to manage our daily tasks efficiently. The support team is incredibly responsive and helpful. Highly recommend it to anyone in the fitness industry.",
    name: "Joel Revington",
    city:"Chennai"
  },
  {
    id: 4,
    text: "The software has revolutionized our HR processes. From recruitment to employee management, everything is seamless and efficient. The customization options are particularly impressive, allowing us to tailor the system to our specific needs. Fantastic product and excellent customer service!",
    name: "Joel Revington",
    city:"Chennai"
  },
  {
    id: 5,
    text: "As a small business owner, finding reliable and affordable tools is crucial. This service has exceeded my expectations in every way. It's cost-effective, easy to use, and the customer support is top-notch. It’s been a game-changer for my business operations.",
    name: "Joel Revington",
    city:"Chennai",
  },
];

export default function Sliders() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const glideRef = useRef(null);

  useEffect(() => {
    const slider = new glide(glideRef.current,{
      type:"carousel",
      autoplay:1,
      animationDuration: 6000,
      animationTimingFunc: "linear",
      perView: 7,
      classes:{
        nav:{
          active:"[&>*]:bg-wuiSlate-700"
        }
      },
      breakpoints:{
        1535:{
          perView:5
        },
        1280:{
          perView:4
        },
        1024:{
          perView:3
        },
        768:{
          perView:2
        },
        640:{
          perView:2,
          gap:24
        }
      }
    })
    slider.mount()
    return() => {
      slider.destroy()
    }
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <>
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-col gap-3 xl:gap-2 sm:gap-4 w-[80%] sm:w-[90%] xs:w-[95%] h-3/4 mx-auto justify-center">
        <div className="flex justify-center w-full text-5xl h-1/5 items-center font-semibold md:text-4xl xs:text-2xl sm:text-3xl p-8 sm:p-2 xs:p-2 text-first">
          We value our Client&apos;s Feedback
        </div>
        <div className="w-[75%] xs:w-full xl:w-[90%] sm:w-full lg:w-[95%] h-2/3 md:w-full bg-gray-300/60 rounded-md mx-auto">
          <Carousel slideInterval={5000}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col w-3/4 h-3/4 xl:h-4/5 xl:w-4/5 lg:w-3/4 lg:h-3/4 md:w-3/4 md:gap-0 xs:gap-2 xs:p-2 md:p-8 md:h-4/6 lg:p-14 justify-center items-center gap-5 rounded-md p-20 sm:p-10"
              >
                {/* <img src="https://usam.s3.ap-south-1.amazonaws.com/double-quotes+(2).png" className="flex justify-end items-end"/> */}
                <div className="flex 2xl:hidden xl:hidden md:hidden lg:hidden flex-col justify-center text-center">
                    <div className="text-lg font-semibold">{slide.name}</div>
                    <div className="text-base">{slide.city}</div>
                  </div>
                <div className="text-black xs:p-2 w-full text-lg sm:text-base xs:text-sm md:text-base">
                  {slide.text}
                </div>
                <div className="flex flex-row sm:hidden xs:hidden justify-between w-full">
                  <div className="flex w-20 h-20 rounded-full">
                    {/* <img
                      className="flex rounded-full w-full h-full object-cover"
                      src="https://usam.s3.ap-south-1.amazonaws.com/rating.png"
                      alt=""
                    /> */}
                  </div>
                  <div className="flex flex-col sm:hidden xs:hidden justify-center">
                    <div className="text-xl font-semibold">{slide.name}</div>
                    <div>{slide.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full h-1/4 items-center justify-around">
        <div className="flex w-full font-semibold text-5xl xs:text-3xl text-first justify-center">Our Partners</div>
        <div className="glide-09 xl:bottom-4 md:bottom-3 lg:bottom-3 sm:bottom-3 xs:bottom-3 w-full" ref={glideRef}>
          {/* <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Andritz.png"
                  className="m-auto h-12 w-24 object-contain"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/BlueScope.png"
                  className="m-auto h-16 relative -top-2 w-28 object-contain"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/CRN.png"
                  className="m-auto h-12 w-auto"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Danieli.png"
                  className="m-auto h-12 w-28 object-contain"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Dellner.png"
                  className="m-auto h-12 w-auto"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Diameler.png"
                  className="m-auto h-12 w-auto"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/Isro.png"
                  className="m-auto h-12 w-auto"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/KSM.png"
                  className="m-auto h-12 w-auto"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/L%26T.png"
                  className="m-auto h-24 relative -top-6 w-auto"
                />
              </li>
              <li>
                <img
                  src="https://usam.s3.ap-south-1.amazonaws.com/N%26V.jpg"
                  className="m-auto h-12 w-auto"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



