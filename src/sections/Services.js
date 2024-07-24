import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { bounceIn, textVariant } from "@/utils/motion";
import dynamic from "next/dynamic";
import * as animationData from "../../public/images/services.json";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const Services = () => {
  const services = [
    {
      imgSrc: "https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.webp",
      title: "Automation",
      link: "/services/automation",
      alt: "Automation",
    },
    {
      imgSrc: "https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.webp",
      title: "Consulting",
      link: "/services/consulting",
      alt: "Consulting",
    },
    {
      imgSrc: "https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.webp",
      title: "Data & Insights",
      link: "/services/datainsights",
      alt: "Data & Insights",
    },
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="flex xs:w-[95%] sm:w-[95%] md:w-[90%] md:mx-auto sm:mx-auto xs:mx-auto h-auto 2xl:flex-row xl:w-[95%] 2xl:w-[90%] xl:mx-auto xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col lg:p-4 xs:gap-2 md:gap-4 sm:gap-4 w-full justify-center">
        <div className="flex flex-col gap-4 xl:gap-4 lg:gap-2 md:gap-3 sm:gap-2">
          <motion.div variants={textVariant()}>
            <div className={styles.sectionSubText}>Services</div>
            <div className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl font-semibold sm:text-2xl xs:text-xl text-gray-700">
              For You.
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "spring", 0.5, 0.8)}
            className="text-lg 2xl:w-5/6 xl:w-[90%] gap-2 md:gap-0 sm:gap-0 justify-center items-center flex flex-col"
          >
            <div className="2xl:text-xl xl:text-xl md:text-lg xs:text-lg font-semibold text-gray-900">
              With over 34 years of experience in the CAD/BIM domain, We at USAM
              have identified critical areas where design companies often lag
            </div>
            <div className="flex flex-col gap-4 xs:gap-1 mt-5 xl:mt-3 lg:mt-1">
              <div className="flex flex-col">
                <div className=" font-semibold 2xl:text-xl xl:text-xl md:text-lg xs:text-lg md:font-bold text-gray-800">
                  Leveraging Existing Software
                </div>
                <div className="2xl:text-lg xs:text-base sm:text-sm md:text-base xl:text-base lg:text-base">
                  Many companies fail to fully utilize the capabilities of their
                  Autodesk software, missing out on features and functionalities
                  that could significantly enhance their design processes
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold 2xl:text-xl md:text-lg xs:text-lg text-gray-800 md:font-bold">
                  Automating Repetitive Tasks
                </div>
                <div className="2xl:text-lg xs:text-sm xl:text-base md:text-base sm:text-sm lg:text-base">
                  Repetitive and manual tasks consume valuable time and
                  resources, leading to inefficiencies, increased project
                  timelines, and a higher risk of errors.
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold 2xl:text-xl md:text-lg xs:text-lg text-gray-800 md:font-bold">
                  Managing Data Properly
                </div>
                <div className="2xl:text-lg xs:text-sm md:text-base xl:text-base sm:text-sm lg:text-base">
                  Poor data management and integration result in lost
                  information, poor decision-making, and missed opportunities
                  for optimization.
                </div>
              </div>
            </div>
          </motion.div>
          <div className="lg:flex xs:hidden sm:hidden md:hidden w-3/5 h-max">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="flex flex-col xl:flex sm:hidden md:hidden lg:hidden gap-8 xs:gap-4 justify-center items-center">
          <div className="flex flex-row xs:flex-col w-full gap-5 xs:gap-4">
            <div className="flex flex-col gap-5 rounded-lg ">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.35, 0.5)}
                className="shadow-lg flex flex-col xs:flex-row xs:items-center p-5 xs:px-5 xs:py-2 bg-gradient-to-br from-third via-second to-first 2xl:w-80 xl:w-64 rounded-lg"
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.webp"
                  alt=""
                  className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
                />
                <Link
                  href={"/services/automation"}
                  className="2xl:text-3xl xl:text-2xl xs:text-xl flex w-full justify-center font-semibold text-black"
                >
                  Automation
                </Link>
              </motion.div>
            </div>

            <div className="flex flex-col gap-5 rounded-lg ">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.65, 0.5)}
                className="shadow-lg flex flex-col xs:items-center xs:flex-row p-5 xs:px-5 xs:py-2 bg-gradient-to-br from-third via-second to-first 2xl:w-80 xl:w-64 rounded-lg"
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.webp"
                  alt=""
                  className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
                />
                <Link
                  href={"/services/consulting"}
                  className="2xl:text-3xl xl:text-2xl xs:text-xl w-full flex justify-center font-semibold text-black"
                >
                  Consulting
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="flex w-full md:justify-center">
            <div className="justify-center flex xs:w-full h-full items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.5, 0.5)}
                className="shadow-lg flex flex-col xs:flex-row p-5 xs:px-5 xs:py-2 xs:items-center 2xl:w-80 xl:w-64 xs:w-full rounded-lg bg-gradient-to-br from-third via-second to-first"
              >
                <img
                  src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.webp"
                  alt=""
                  className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
                />
                <Link
                  href={"/services/datainsights"}
                  className="2xl:text-3xl xl:text-2xl xs:text-xl flex w-full justify-center font-semibold text-black"
                >
                  Data & Insights
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        {/* -----------------------------------------sm------------------------------------- */}
        <div className="hidden sm:flex flex-row gap-2 w-full justify-around">
          {services.map((service, index) => (
            <div className="flex flex-col w-full rounded-lg " key={index}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.35, 0.5)}
                className="shadow-lg flex flex-col sm:p-5 sm:gap-0 w-full bg-gradient-to-br from-third via-second to-first rounded-lg"
              >
                <img
                  src={service.imgSrc}
                  alt={service.alt}
                  className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
                />
                <Link
                  href={service.link}
                  className="2xl:text-3xl xl:text-2xl flex sm:text-xl w-full sm:justify-center font-semibold text-black"
                >
                  {service.title}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        {/* -----------------------------------------------md------------------------------------- */}
        <div className="hidden xl:hidden lg:hidden md:flex flex-row gap-5 w-full justify-around">
          {services.map((service, index) => (
            <div className="flex flex-col w-full rounded-lg " key={index}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.35, 0.5)}
                className="shadow-lg flex flex-col p-5 gap-5 md:gap-0 md:p-7 w-full bg-gradient-to-br from-third via-second to-first rounded-lg"
              >
                <img
                  src={service.imgSrc}
                  alt={service.alt}
                  className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
                />
                <Link
                  href={service.link}
                  className="2xl:text-3xl xl:text-2xl md:text-xl flex w-full justify-center font-semibold text-black"
                >
                  {service.title}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        {/* ------------------------------------------------lg---------------------------------------------- */}
        <div className="hidden xl:hidden lg:flex flex-col gap-5 w-full items-center justify-center">
          {services.map((service, index) => (
            <div className="flex flex-col w-2/3 rounded-lg " key={index}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.35, 0.5)}
                className="shadow-lg flex flex-col p-6 gap-0 w-full bg-gradient-to-br from-third via-second to-first rounded-lg"
              >
                <img
                  src={service.imgSrc}
                  alt={service.alt}
                  className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
                />
                <Link
                  href={service.link}
                  className="2xl:text-3xl xl:text-2xl  lg:text-xl flex w-full justify-center font-semibold text-black"
                >
                  {service.title}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Services, "services");
