// import { useState, useEffect, useRef } from "react";
// import ReactCardCarousel from "react-card-carousel";
// import { Carousel } from "flowbite-react";

// const slides = [
//   {
//     id: 1,
//     text: "I have been using this service for over a year now, and it has completely transformed the way we do business. The efficiency and reliability are unmatched, and the customer support is always there when we need them. Highly recommend to anyone looking to streamline their operations!",
//   },
//   {
//     id: 2,
//     text: "The team's creativity and attention to detail have significantly boosted our marketing efforts. Their innovative strategies and professional approach have led to a noticeable increase in our customer engagement and sales. I couldn't be happier with the results.",
//   },
//   {
//     id: 3,
//     text: "Switching to this platform was one of the best decisions we've made. It’s user-friendly, and the features are exactly what we need to manage our daily tasks efficiently. The support team is incredibly responsive and helpful. Highly recommend it to anyone in the fitness industry.",
//   },
//   {
//     id: 4,
//     text: "The software has revolutionized our HR processes. From recruitment to employee management, everything is seamless and efficient. The customization options are particularly impressive, allowing us to tailor the system to our specific needs. Fantastic product and excellent customer service!",
//   },
//   {
//     id: 5,
//     text: "As a small business owner, finding reliable and affordable tools is crucial. This service has exceeded my expectations in every way. It's cost-effective, easy to use, and the customer support is top-notch. It’s been a game-changer for my business operations.",
//   },
// ];

// export default function Sliders() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentSlide === slides.length - 1) {
//         setCurrentSlide(0);
//       } else {
//         setCurrentSlide(currentSlide + 1);
//       }
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [currentSlide, slides.length]);

//   return (
//     <>
//       <div className="flex flex-col gap-10 sm:gap-4 justify-center items-center w-[90%] xs:w-[100%] h-full mx-auto">
//         <div className="flex text-4xl md:text-4xl xs:text-3xl sm:text-3xl p-8 text-black">
//           We value our Client's Feedback
//         </div>
//         <div className="relative flex xs:hidden sm:hidden md:hidden flex-col w-[90%] mx-auto h-2/3">
//           <div className="overflow-hidden h-full w-full justify-center flex flex-col rounded-lg">
//             <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-row w-full justify-center items-center gap-10 rounded-md shadow-lg bg-tertiary p-20"
//                 >
//                   <div className="flex w-72 h-72 rounded-full">
//                     <img
//                       className="flex rounded-full w-full h-full object-cover"
//                       src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
//                       alt=""
//                     />
//                   </div>
//                   <div className="text-black w-96 text-lg bg-tertiary">
//                     {slide.text}
//                   </div>
//                 </div>
//               ))}
//             </ReactCardCarousel>
//           </div>
//         </div>
//         <div className="flex w-[90%] mx-auto h-full justify-center items-center xl:hidden 2xl:hidden md:hidden sm:hidden lg:hidden">
//           <Carousel
//             indicators={false}
//             leftControl
//             rightControl
//             className="p-4"
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="flex flex-col h-full gap-4 p-4">
//                 <img
//                   className="w-[100%] h-96"
//                   src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
//                   alt=""
//                 />
//                 <div className="text-black">{slide.text}</div>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//         <div className="xs:hidden sm:w-full sm:h-3/4 md:h-2/3 md:w-full xl:hidden 2xl:hidden lg:hidden">
//           <Carousel indicators={false} leftControl rightControl>
//             <div className="bg-white w-full h-full p-4">
//               <div className="h-full w-full flex flex-col">
//                 <img
//                   src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
//                   alt=""
//                   className="h-2/3 object-cover"
//                 />
//                 <div className="h-1/3 flex justify-center items-center text-black text-xl">
//                   As a small business owner, finding reliable and affordable
//                   tools is crucial. This service has exceeded my expectations in
//                   every way. It's cost-effective, easy to use, and the customer
//                   support is top-notch. It’s been a game-changer for my business
//                   operations.
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white w-full h-full p-4">
//               <div className="h-full w-full flex flex-col">
//                 <img
//                   src="https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg"
//                   alt=""
//                   className="h-2/3 object-cover"
//                 />
//                 <div className="h-1/3 flex justify-center items-center text-black text-xl">
//                   As a small business owner, finding reliable and affordable
//                   tools is crucial. This service has exceeded my expectations in
//                   every way. It's cost-effective, easy to use, and the customer
//                   support is top-notch. It’s been a game-changer for my business
//                   operations.
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white w-full h-full p-4">
//               <div className="h-full w-full flex flex-col">
//                 <img
//                   src="https://usam.s3.ap-south-1.amazonaws.com/Image3.jpg"
//                   alt=""
//                   className="h-2/3 object-cover"
//                 />
//                 <div className="h-1/3 flex justify-center items-center text-black text-xl">
//                   As a small business owner, finding reliable and affordable
//                   tools is crucial. This service has exceeded my expectations in
//                   every way. It's cost-effective, easy to use, and the customer
//                   support is top-notch. It’s been a game-changer for my business
//                   operations.
//                 </div>
//               </div>
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </>
//   );
// }



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
      perView: 6,
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
          perView:1,
          gap:36
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
      <div className="flex flex-col gap-5 sm:gap-4 w-[80%] sm:w-[90%] xs:w-[90%] h-3/4 mx-auto justify-center">
        <div className="flex justify-center w-full text-4xl h-1/5 items-center font-semibold md:text-4xl xs:text-3xl sm:text-3xl p-8 text-black">
          We value our Client's Feedback
        </div>
        <div className="w-[75%] xs:w-full xl:w-[90%] sm:w-full lg:w-[95%] h-2/3 md:w-full bg-gray-300 rounded-md mx-auto">
          <Carousel slideInterval={5000}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col w-3/4 h-3/4 xl:h-4/5 xl:w-4/5 lg:w-3/4 lg:h-3/4 md:w-3/4 md:gap-0 xs:gap-2 xs:p-8 md:p-8 md:h-4/6 lg:p-14 justify-center items-center gap-5 rounded-md shadow-lg bg-gray-100 p-20 sm:p-10"
              >
                <img src="https://usam.s3.ap-south-1.amazonaws.com/double-quotes+(2).png" className="flex justify-end items-end"/>
                <div className="flex 2xl:hidden xl:hidden md:hidden lg:hidden flex-col justify-center text-center">
                    <div className="text-lg font-semibold">{slide.name}</div>
                    <div className="text-base">{slide.city}</div>
                  </div>
                <div className="text-black w-full text-base sm:text-base xs:text-sm md:text-base bg-gray-100">
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
      <div className="flex flex-col gap-5 w-full h-1/4 items-center justify-center">
        <div className="flex w-full font-semibold text-4xl justify-center">Our Partners</div>
        <div className="glide-09 xl:bottom-4 md:bottom-3 lg:bottom-3 sm:bottom-3 xs:bottom-3 w-full" ref={glideRef}>
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
    </div>
    </>
  );
}



