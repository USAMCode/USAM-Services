import SectionWrapper from "@/section/SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { bounceIn, slideIn, textVariant } from "@/utils/motion";
import dynamic from "next/dynamic";
import * as animationData from "../../public/images/services.json";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const Services = () => {
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
            <div className={styles.sectionSubText} >Services</div>
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
                  src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
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
                  src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
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
                  src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
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
          <div className="flex flex-col w-full rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.35, 0.5)}
              className="shadow-lg flex flex-col sm:p-5 sm:gap-0 w-full bg-gradient-to-br from-third via-second to-first rounded-lg"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
                alt=""
                className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/automation"}
                className="2xl:text-3xl xl:text-2xl flex sm:text-xl w-full sm:justify-center font-semibold text-black"
              >
                Automation
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col w-full gap-5 rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.65, 0.5)}
              className="shadow-lg flex flex-col w-full sm:p-5 sm:gap-0 bg-gradient-to-br from-third via-second to-first gap-5 rounded-lg"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
                alt=""
                className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/consulting"}
                className="2xl:text-3xl xl:text-2xl sm:text-xl w-full flex sm:justify-center font-semibold text-black"
              >
                Consulting
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col w-full rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.5, 0.5)}
              className="shadow-lg flex flex-col sm:p-5 sm:gap-0 rounded-lg bg-gradient-to-br from-third via-second to-first"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
                alt=""
                className="object-contain h-24 sm:h-36 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/datainsights"}
                className="2xl:text-3xl xl:text-2xl sm:text-xl flex w-full sm:justify-center font-semibold text-black"
              >
                Data & Insights
              </Link>
            </motion.div>
          </div>
        </div>
        {/* -----------------------------------------------md------------------------------------- */}
        <div className="hidden xl:hidden lg:hidden md:flex flex-row gap-5 w-full justify-around">
          <div className="flex flex-col w-full rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.35, 0.5)}
              className="shadow-lg flex flex-col p-5 gap-5 md:gap-0 md:p-7 w-full bg-gradient-to-br from-third via-second to-first rounded-lg"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
                alt=""
                className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/automation"}
                className="2xl:text-3xl xl:text-2xl md:text-xl flex w-full justify-center font-semibold text-black"
              >
                Automation
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col w-full gap-5 rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.65, 0.5)}
              className="shadow-lg flex flex-col w-full p-5 md:gap-0 md:p-7 bg-gradient-to-br from-third via-second to-first gap-5 rounded-lg"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
                alt=""
                className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/consulting"}
                className="2xl:text-3xl xl:text-2xl md:text-xl w-full flex justify-center font-semibold text-black"
              >
                Consulting
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col w-full rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.5, 0.5)}
              className="shadow-lg flex flex-col gap-5 p-5 md:gap-0 md:p-7 rounded-lg bg-gradient-to-br from-third via-second to-first"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
                alt=""
                className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/datainsights"}
                className="2xl:text-3xl xl:text-2xl md:text-xl flex w-full justify-center font-semibold text-black"
              >
                Data & Insights
              </Link>
            </motion.div>
          </div>
        </div>
        {/* ------------------------------------------------lg---------------------------------------------- */}
        <div className="hidden xl:hidden lg:flex flex-col gap-5 w-full items-center justify-center">
          <div className="flex flex-col w-2/3 rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.35, 0.5)}
              className="shadow-lg flex flex-col p-6 gap-0 w-full bg-gradient-to-br from-third via-second to-first rounded-lg"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
                alt=""
                className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/automation"}
                className="2xl:text-3xl xl:text-2xl  lg:text-xl flex w-full justify-center font-semibold text-black"
              >
                Automation
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col w-2/3 gap-5 rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.65, 0.5)}
              className="shadow-lg flex flex-col w-full p-6 gap-0 bg-gradient-to-br from-third via-second to-first rounded-lg"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
                alt=""
                className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/consulting"}
                className="2xl:text-3xl xl:text-2xl lg:text-xl w-full flex justify-center font-semibold text-black"
              >
                Consulting
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col w-2/3 rounded-lg ">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={bounceIn(0.5, 0.5)}
              className="shadow-lg flex flex-col p-6 gap-0 rounded-lg bg-gradient-to-br from-third via-second to-first"
            >
              <img
                src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
                alt=""
                className="object-contain h-24 md:h-32 xl:h-40 2xl:h-64"
              />
              <Link
                href={"/services/datainsights"}
                className="2xl:text-3xl xl:text-2xl lg:text-xl flex w-full justify-center font-semibold text-black"
              >
                Data & Insights
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="bg-white h-[100vh] flex justify-center items-center">
    //     <div className="flex flex-row h-full w-[90%] gap-4 sm:w-[95%] sm:gap-2 xs:w-[95%] xl:w-[100%] items-center sm:justify-center xl:justify-center justify-around xs:justify-around xs:gap-1 md:justify-center lg:h-full lg:justify-center lg:gap-5 mx-auto lg:flex lg:flex-col md:h-full md:flex md:flex-col sm:flex-col xs:flex-col z-10 absolute">
    //       <div className="flex flex-col gap-2 w-1/2 md:h-1/2 md:justify-center xs:gap-2 xs:h-max xs:justify-center md:p-2 lg:w-[95%] sm:w-full lg:mx-auto lg:gap-5 sm:gap-3 md:w-full xs:w-full">
    //         <div className="text-5xl w-full items-start font-bold md:text-5xl sm:text-4xl xs:text-3xl text-first">
    //           Our Services
    //         </div>
    //         {/* <div className="text-2xl font-bold md:text-3xl xs:text-xl">
    //           For You
    //         </div> */}
    //         <motion.div
    //           initial="hidden"
    //           whileInView="show"
    //           viewport={{ once: true, amount: 0.25 }}
    //           variants={fadeIn("right", "spring", 0.5, 0.8)}
    //           className="text-lg w-full gap-2 sm:gap-2 xs:gap-2 justify-center items-center flex flex-col xl:w-full lg:w-full sm:w-full xs:w-full xs:mt-0 xs:mb-0 md:w-full md:text-[17px] sm:text-base   "
    //         >
    //           <div className=" text-[19px] xl:text-lg sm:text-[18px] xs:text-base font-semibold text-gray-800">With over 33 years of experience in the CAD/BIM domain, We at USAM have identified critical areas where design companies often lag</div>
    //           <div className="flex flex-col gap-2 lg:gap-6 xs:gap-1">
    //             <div className="flex flex-col">
    //               <div className=" font-semibold text-base md:font-bold text-gray-800">Leveraging Existing Software</div>
    //               <div className="xs:text-sm sm:text-sm xl:text-base">Many companies fail to fully utilize the capabilities of their Autodesk software, missing out on features and functionalities that could significantly enhance their design processes</div>
    //             </div>
    //             <div className="flex flex-col">
    //               <div className="font-semibold text-lg text-gray-800 md:font-bold">Automating Repetitive Tasks</div>
    //               <div className="xs:text-sm xl:text-base sm:text-sm">Repetitive and manual tasks consume valuable time and resources, leading to inefficiencies, increased project timelines, and a higher risk of errors.</div>
    //             </div>
    //             <div className="flex flex-col">
    //               <div className="font-semibold text-lg text-gray-800 md:font-bold">Managing Data Properly</div>
    //               <div className="xs:text-sm xl:text-base sm:text-sm">Poor data management and integration result in lost information, poor decision-making, and missed opportunities for optimization.</div>
    //             </div>
    //           </div>
    //         </motion.div>

    //         {/* <button className="bg-first lg:hidden sm:hidden xs:hidden md:hidden text-xl w-max text-white rounded-full px-4 py-2 transition-colors duration-200">
    //           See more
    //         </button> */}
    //         <div className="flex h-full lg:hidden md:hidden sm:hidden xs:hidden w-3/4 xl:w-2/4">
    //           <Lottie options={defaultOptions} />
    //         </div>
    //       </div>

    //       <div className="flex flex-row lg:w-[95%] lg:mx-auto gap-8 xl:gap-4 lg:gap-1 lg:justify-around lg:hidden md:hidden xs:hidden">
    //         <div className="flex flex-col md:gap-3 w-full gap-5 lg:gap-14 lg:flex-row md:flex-row md:justify-center">
    //           <div className="flex flex-col gap-5 rounded-lg ">
    //             <motion.div
    //               initial="hidden"
    //               whileInView="show"
    //               viewport={{ once: true, amount: 0.25 }}
    //               variants={bounceIn(0.35, 0.5)}
    //               className="shadow-lg flex flex-col p-5 sm:p-3 gap-5 xl:gap-3 bg-gradient-to-br from-third via-second to-first sm:gap-1 sm:w-72 w-80 xl:w-72 lg:w-72 md:w-64 rounded-lg"
    //             >
    //               <img
    //                 src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
    //                 alt=""
    //                 className="w-full object-contain h-32 sm:h-36 xl:h-40 2xl:h-64"
    //               />
    //               <Link
    //                 href={"/services/automation"}
    //                 className="text-3xl flex w-full justify-center lg:text-2xl font-semibold text-black md:text-xl sm:text-lg"
    //               >
    //                 Automation
    //               </Link>
    //             </motion.div>
    //           </div>

    //           <div className="flex flex-col gap-5  rounded-lg ">
    //             <motion.div
    //               initial="hidden"
    //               whileInView="show"
    //               viewport={{ once: true, amount: 0.25 }}
    //               variants={bounceIn(0.65, 0.5)}
    //               className="shadow-lg flex flex-col p-5 sm:p-3 xl:gap-3 bg-gradient-to-br from-third via-second to-first gap-5 sm:gap-1 sm:w-72 w-80 xl:w-72 lg:w-72 md:w-64 rounded-lg"
    //             >
    //               <img
    //                 src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
    //                 alt=""
    //                 className="w-full object-contain h-32 sm:h-36 xl:h-40 2xl:h-64"
    //               />
    //               <Link
    //                 href={"/services/consulting"}
    //                 className="text-3xl w-full flex justify-center lg:text-2xl font-semibold text-black md:text-xl sm:text-lg"
    //               >
    //                 Consulting
    //               </Link>
    //             </motion.div>
    //           </div>
    //         </div>

    //         <div className="flex w-full md:justify-center">
    //           <div className="justify-center flex h-full items-center">
    //             <motion.div
    //               initial="hidden"
    //               whileInView="show"
    //               viewport={{ once: true, amount: 0.25 }}
    //               variants={bounceIn(0.5, 0.5)}
    //               className="shadow-lg flex flex-col p-5 sm:p-3 gap-5 sm:gap-1 w-80 xl:gap-3 sm:w-72 xl:w-72 lg:w-72 md:w-64 rounded-lg bg-gradient-to-br from-third via-second to-first"
    //             >
    //               <img
    //                 src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
    //                 alt=""
    //                 className="w-full object-contain h-32 sm:h-36 xl:h-40 2xl:h-64"
    //               />
    //               <Link
    //                 href={"/services/datainsights"}
    //                 className="text-3xl flex w-full justify-center lg:text-2xl font-semibold md:text-xl sm:text-lg text-black"
    //               >
    //                 Data & Insights
    //               </Link>
    //             </motion.div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* -------------------------------Large-------------------------------- */}
    //       <div className="flex 2xl:hidden xl:hidden md:hidden sm:hidden xs:hidden w-full justify-around gap-5">
    //         <div className="flex flex-col gap-5 rounded-lg ">
    //           <motion.div
    //             initial="hidden"
    //             whileInView="show"
    //             viewport={{ once: true, amount: 0.25 }}
    //             variants={bounceIn(0.35, 0.5)}
    //             className="shadow-lg flex flex-col p-5 gap-3 bg-gradient-to-br from-third via-second to-first w-80 rounded-lg"
    //           >
    //             <img
    //               src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
    //               alt=""
    //               className="w-full object-contain h-64"
    //             />
    //             <Link
    //               href={"/services/automation"}
    //               className="text-2xl w-full text-center font-semibold text-black"
    //             >
    //               Automation
    //             </Link>
    //           </motion.div>
    //         </div>
    //         <div className="flex flex-col gap-5 rounded-lg ">
    //           <motion.div
    //             initial="hidden"
    //             whileInView="show"
    //             viewport={{ once: true, amount: 0.25 }}
    //             variants={bounceIn(0.65, 0.5)}
    //             className="shadow-lg flex flex-col p-5 bg-gradient-to-br from-third via-second to-first gap-3 sm:w-full w-80 rounded-lg"
    //           >
    //             <img
    //               src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
    //               alt=""
    //               className="w-full object-contain h-64"
    //             />
    //             <Link
    //               href={"/services/consulting"}
    //               className="text-2xl w-full text-center font-semibold text-black"
    //             >
    //               Consulting
    //             </Link>
    //           </motion.div>
    //         </div>
    //         <div className="justify-center flex h-full items-center">
    //           <motion.div
    //             initial="hidden"
    //             whileInView="show"
    //             viewport={{ once: true, amount: 0.25 }}
    //             variants={bounceIn(0.5, 0.5)}
    //             className="shadow-lg flex flex-col p-5 gap-3 w-80 rounded-lg bg-gradient-to-br from-third via-second to-first"
    //           >
    //             <img
    //               src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
    //               alt=""
    //               className="w-full object-contain h-64"
    //             />
    //             <Link
    //               href={"/services/datainsights"}
    //               className="text-2xl font-semibold w-full text-center text-black"
    //             >
    //               Data & Insights
    //             </Link>
    //           </motion.div>
    //         </div>
    //       </div>
    //       {/* ------------------------------Medium----------------------------------- */}
    //       <div className="flex flex-row w-full h-1/2 justify-around gap-4 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden">
    //         <motion.div
    //           initial="hidden"
    //           whileInView="show"
    //           viewport={{ once: true, amount: 0.25 }}
    //           variants={bounceIn(0.35, 0.5)}
    //           className="shadow-lg flex flex-col px-4 py-4 gap-5 w-full h-max bg-gradient-to-br from-third via-second to-first rounded-lg"
    //         >
    //           <img
    //             src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
    //             alt="Drawing Automation"
    //             className="w-full object-contain h-60"
    //           />
    //           <Link
    //             href={"/services/automation"}
    //             className="text-2xl flex w-full justify-center font-semibold text-black"
    //           >
    //             Automation
    //           </Link>
    //         </motion.div>
    //         <motion.div
    //           initial="hidden"
    //           whileInView="show"
    //           viewport={{ once: true, amount: 0.25 }}
    //           variants={bounceIn(0.65, 0.5)}
    //           className="shadow-lg flex flex-col px-4 py-4 w-full bg-gradient-to-br h-max from-third via-second to-first gap-5 rounded-lg"
    //         >
    //           <img
    //             src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
    //             alt="Drawing Automation"
    //             className="w-full object-contain h-60"
    //           />
    //           <Link
    //             href={"/services/consulting"}
    //             className="text-2xl flex w-full justify-center font-semibold text-black"
    //           >
    //             Consulting
    //           </Link>
    //         </motion.div>
    //         <motion.div
    //           initial="hidden"
    //           whileInView="show"
    //           viewport={{ once: true, amount: 0.25 }}
    //           variants={bounceIn(0.5, 0.5)}
    //           className="shadow-lg flex flex-col px-4 py-4 gap-5 w-full rounded-lg h-max bg-gradient-to-br from-third via-second to-first"
    //         >
    //           <img
    //             src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
    //             alt="Drawing Automation"
    //             className="w-full object-contain h-60"
    //           />
    //           <Link
    //             href={"/services/datainsights"}
    //             className="text-2xl flex w-full justify-center font-semibold text-black"
    //           >
    //             Data & Insights
    //           </Link>
    //         </motion.div>
    //       </div>
    //       {/* ----------------------------------------xs---------------------------------------- */}
    //       <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col gap-4">
    //         <div className="flex w-full">
    //           <motion.div
    //             initial="hidden"
    //             whileInView="show"
    //             viewport={{ once: true, amount: 0.25 }}
    //             variants={fadeIn("right", "tween", 0.35, 0.5)}
    //             className="shadow-lg flex flex-row px-4 py-2 gap-4 items-center bg-gradient-to-br from-second via-second to-first w-full rounded-lg"
    //           >
    //             <div className="flex w-1/6">
    //               <img
    //                 src="https://d1nw187rmwcpt3.cloudfront.net/Automation_Icon.png"
    //                 alt="Drawing Automation"
    //                 className="rounded-md object-cover w-full"
    //               />
    //             </div>
    //             <Link
    //               href={"/services/automation"}
    //               className="text-2xl font-semibold text-black"
    //             >
    //               Automation
    //             </Link>
    //           </motion.div>
    //         </div>
    //         <div className="flex w-full">
    //           <motion.div
    //             initial="hidden"
    //             whileInView="show"
    //             viewport={{ once: true, amount: 0.25 }}
    //             variants={fadeIn("left", "tween", 0.5, 0.5)}
    //             className="shadow-lg flex flex-row px-4 py-2 gap-4 items-center bg-gradient-to-br from-third via-second to-first w-full rounded-lg"
    //           >
    //             <div className="flex w-1/6">
    //               <img
    //                 src="https://d1nw187rmwcpt3.cloudfront.net/Consulting_Icon.png"
    //                 alt="Drawing Automation"
    //                 className="rounded-md object-cover w-full"
    //               />
    //             </div>
    //             <Link
    //               href={"/services/consulting"}
    //               className="text-2xl font-semibold text-black"
    //             >
    //               Consulting
    //             </Link>
    //           </motion.div>
    //         </div>
    //         <div className="flex w-full">
    //           <motion.div
    //             initial="hidden"
    //             whileInView="show"
    //             viewport={{ once: true, amount: 0.25 }}
    //             variants={fadeIn("right", "tween", 0.65, 0.5)}
    //             className="shadow-lg flex flex-row px-4 py-2 gap-4 items-center w-full rounded-lg bg-gradient-to-br from-third via-second to-first"
    //           >
    //             <div className="flex w-1/6">
    //               <img
    //                 src="https://d1nw187rmwcpt3.cloudfront.net/DataInsights_Icon.png"
    //                 alt="Drawing Automation"
    //                 className="rounded-md object-cover w-full"
    //               />
    //             </div>
    //             <Link
    //               href={"/services/datainsights"}
    //               className="text-2xl font-semibold text-black"
    //             >
    //               Data & Insights
    //             </Link>
    //           </motion.div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};
export default SectionWrapper(Services, "services");
