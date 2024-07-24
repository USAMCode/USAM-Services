import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles/styles";
import glide from "@glidejs/glide";
import MultiSlider from "./MultiSlider";


const Sliders = () => {
  const glideRef = useRef(null);

  const images = [
    { src: "https://d1nw187rmwcpt3.cloudfront.net/Andritz.webp", alt: "Andritz", width: 96, height: 48, className: "m-auto h-12 w-24 object-contain" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/BlueScope.webp", alt: "BlueScope", width: 112, height: 64, className: "m-auto h-16 relative -top-2 w-28 object-contain" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/CRN.webp", alt: "CRN", width: 96, height: 48, className: "m-auto h-12 w-auto" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/Danieli.webp", alt: "Danieli", width: 112, height: 48, className: "m-auto h-12 w-28 object-contain" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/Dellner.webp", alt: "Dellner", width: 96, height: 48, className: "m-auto h-12 w-auto" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/Diameler.webp", alt: "Diameler", width: 96, height: 48, className: "m-auto h-12 w-auto" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/Isro.webp", alt: "Isro", width: 96, height: 48, className: "m-auto h-12 w-auto" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/KSM.webp", alt: "KSM", width: 96, height: 48, className: "m-auto h-12 w-auto" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/L%26T.webp", alt: "L&T", width: 96, height: 192, className: "m-auto h-24 relative -top-6 w-auto" },
    { src: "https://d1nw187rmwcpt3.cloudfront.net/N%26V.webp", alt: "N&V", width: 96, height: 48, className: "m-auto h-12 w-auto" },
  ];

  useEffect(() => {
    const slider = new glide(glideRef.current, {
      type: "carousel",
      autoplay: 1,
      animationDuration: 6000,
      animationTimingFunc: "linear",
      perView: 7,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1535: {
          perView: 5,
        },
        1280: {
          perView: 4,
        },
        1024: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        640: {
          perView: 2,
          gap: 24,
        },
      },
    });
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, []);

 

  return (
    <>
      <div className="flex w-full h-screen flex-col lg:gap-10 2xl:gap-4">

        <div className=" flex-col gap-3 xl:gap-4  sm:gap-4 w-[80%] sm:w-[90%] xs:w-[95%] h-3/4 mx-auto justify-center items-center">
          <motion.div variants={textVariant()} className={`${styles.sectionSubText} flex w-full xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl  xs:text-2xl justify-center`}>
            We value our Client&apos;s Feedback
          </motion.div>
          <div className="h-full w-full">
          <MultiSlider />
          </div>

        </div>
        <div className="flex flex-col gap-5 lg:py-5 2xl:py-0 w-full h-1/4 items-center justify-around">
          <div className="flex w-full font-semibold text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl text-first justify-center ">
            Our Partners
          </div>
          <div
            className="glide-09 w-full"
            ref={glideRef}
          >
            {/* <!-- Slides --> */}
            <div data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {images.map((image, index) => (
                <li key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className={image.className}
                  />
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sliders;