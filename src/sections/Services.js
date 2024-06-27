import SectionWrapper from "@/section/SectionWrapper";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { bounceIn, slideIn, textVariant } from "@/utils/motion";
import { fadeIn } from "@/utils/motion";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center ">
        {/* <img src="/img/tp201-sasi-21.jpg" className="relative w-full h-full xs:hidden">
        </img> */}
        <div className="flex flex-row w-[90%] xs:w-[95%] justify-center lg:h-full lg:justify-center lg:gap-5 m-auto lg:flex lg:flex-col md:h-full md:flex md:flex-col sm:flex-col xs:flex-col z-10 absolute">
          <div className="flex flex-col w-1/2 md:p-2 justify-center lg:w-[90%] sm:w-full lg:mx-auto md:w-full xs:w-full">
            <div className="text-6xl w-full items-start font-bold md:text-5xl sm:text-4xl xs:text-3xl text-first">Our Services</div>
            <div className="text-2xl font-bold tracking-widest md:text-3xl xs:text-xl">For You</div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn('right', 'spring', 0.5, 0.8)}
              className="text-lg w-3/4 xl:w-5/6 lg:w-full sm:w-full xs:w-full mt-4 xs:mt-2 xs:mb-4 mb-8 md:w-full md:text-[17px] sm:text-base xs:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in dolore eu fugiat nulla pariatur.
            </motion.div>
            <button className="bg-first lg:hidden sm:hidden xs:hidden md:hidden text-xl w-max text-white rounded-full px-4 py-2 transition-colors duration-200">
              See more
            </button>
          </div>

          <div className="flex flex-row lg:w-[90%] lg:mx-auto gap-8 xl:gap-4 lg:gap-5 lg:justify-center md:hidden xs:hidden">
            <div className="flex flex-col md:gap-3 gap-5 lg:flex-row md:flex-row md:justify-center">
              <div className="flex flex-col gap-5  rounded-lg ">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={bounceIn(0.35, 0.5)} className="shadow-lg flex flex-col p-5 gap-5 xl:gap-3 bg-gradient-to-br from-first via-second to-first sm:gap-2 sm:w-full w-80 xl:w-75 lg:w-72 md:w-64 rounded-lg">
                  <div className="">
                    <img
                      src="/img/chat_4389387.png"
                      alt="Drawing Automation"
                      className="rounded-md object-cover sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="text-3xl lg:text-2xl font-semibold text-black md:text-xl sm:text-lg">Automation</div>
                  <div className="md:text-base text-lg sm:text-base">
                    Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link href={"/services/automation"} className="underline rounded-full font-semibold text-xl sm:text-base text-black w-max py-2 transition-colors duration-200">
                    Learn More
                  </Link>
                </motion.div>
              </div>

              <div className="flex flex-col gap-5  rounded-lg ">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={bounceIn(0.65, 0.5)} className="shadow-lg flex flex-col p-5 xl:gap-3 bg-gradient-to-br from-first via-second to-first gap-5 sm:gap-2 sm:w-full w-80 xl:w-75 lg:w-72 md:w-64 rounded-lg">
                  <div className="">
                    <img
                      src="/img/chat_4389387.png"
                      alt="Drawing Automation"
                      className="rounded-md object-cover sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="text-3xl lg:text-2xl font-semibold text-black md:text-xl sm:text-lg">Consulting</div>
                  <div className="md:text-base text-lg sm:text-base">
                    Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link href={'/services/consulting'} className="underline rounded-full font-semibold text-xl sm:text-lg text-black w-max py-2 transition-colors duration-200">
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="flex md:justify-center">
              <div className="justify-center flex h-full items-center">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={bounceIn(0.5, 0.5)} className="shadow-lg flex flex-col p-5  gap-5 sm:gap-2 w-80 xl:gap-3 sm:w-full xl:w-75 lg:w-72 md:w-64 rounded-lg bg-gradient-to-br from-first via-second to-first">
                  <div className="">
                    <img
                      src="/img/chat_4389387.png"
                      alt="Drawing Automation"
                      className="rounded-md object-cover sm:w-8 sm:h-8"
                    />
                  </div>
                  <div className="text-3xl lg:text-2xl font-semibold md:text-xl sm:text-lg text-black">Data & Insights</div>
                  <div className="md:text-base text-lg sm:text-base">
                    Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <Link href={'/services/datainsights'} className="underline rounded-full font-semibold text-xl sm:text-lg text-black w-max py-2 transition-colors duration-200">
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          {/* ------------------------------Medium----------------------------------- */}
          <div className="flex flex-row w-full gap-4 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden">
            <div className="flex w-1/3">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.35, 0.5)} className="shadow-lg flex flex-col px-4 py-4 gap-5 bg-gradient-to-br from-first via-second to-first w-full rounded-lg">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="text-2xl font-semibold text-black">Automation</div>
                <div className="md:text-base text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <Link href={'/services/automation'} className="underline rounded-full font-semibold text-xl text-black
                
                
                w-max py-2 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <div className="flex w-1/3">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.65, 0.5)} className="shadow-lg flex flex-col px-4 py-4 bg-gradient-to-br from-first via-second to-first gap-5 w-full rounded-lg">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="text-2xl font-semibold text-black md:text-xl">Consulting</div>
                <div className="md:text-base text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <Link href={'/services/consulting'} className="underline rounded-full font-semibold text-xl text-black
                
                
                w-max py-2 transition-colors duration-200">
                  Learn More
                </Link >
              </motion.div>
            </div>
            <div className="flex w-1/3">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={bounceIn(0.5, 0.5)} className="shadow-lg flex flex-col px-4 py-4 gap-5 w-80 md:w-72 rounded-lg bg-gradient-to-br from-first via-second to-first">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="text-2xl font-semibold md:text-xl text-black">Data & Insights</div>
                <div className="md:text-base text-lg">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <Link href={'/services/datainsights'} className="underline rounded-full font-semibold text-xl text-black
                
                
                w-max py-2 transition-colors duration-200">
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>
          {/* ----------------------------------------xs---------------------------------------- */}
          <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col gap-4">
            <div className="flex w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("right", "tween", 0.35, 0.5)} className="shadow-lg flex flex-col px-4 py-2 gap-1 bg-gradient-to-br from-first via-second to-first w-full rounded-lg">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover w-6 h-6"
                  />
                </div>
                <div className="text-lg font-semibold text-black">Automation</div>
                <div className="text-base">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <Link href={'/services/automation'} className="underline rounded-full font-semibold text-lg text-black
                
                
                w-max py-2 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <div className="flex w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("left","tween", 0.5, 0.5)} className="shadow-lg flex flex-col px-4 py-2 gap-1 bg-gradient-to-br from-first via-second to-first w-full rounded-lg">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover w-6 h-6"
                  />
                </div>
                <div className="text-lg font-semibold text-black">Consulting</div>
                <div className="text-base">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <Link href={'/services/consulting'} className="underline rounded-full font-semibold text-lg text-black
                
                
                w-max py-2 transition-colors duration-200">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <div className="flex w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeIn("right","tween",0.65, 0.5)} className="shadow-lg flex flex-col px-4 py-2 gap-1 w-full rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-500">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover w-6 h-6"
                  />
                </div>
                <div className="text-lg font-semibold text-black">Data & Insights</div>
                <div className="text-base">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <Link href={'/services/datainsights'} className="underline rounded-full font-semibold text-lg text-black
                
                
                w-max py-2 transition-colors duration-200">
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Services, "services");



// #5479f7, #99b9ff,#caddff





{/* <div className="flex flex-row w-1/2">
              <div className="flex flex-col gap-5 item-start">
                <div className="shadow-lg flex flex-col p-5 gap-3 w-75 rounded-xl">
                  <div className="">
                    <img
                      src="/img/chat_4389387.png"
                      alt="Drawing Automation"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="text-2xl font-semibold">Automation</div>
                  <div className="">
                    Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <button className="bg-gray-500 hover:bg-gray-600 rounded-full text-white p-2 w-1/3 transition-colors duration-200">
                    More
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-5 items-end">
                <div className="shadow-lg flex flex-col p-5 gap-3 w-75 rounded-xl">
                  <div className="">
                    <img
                      src="/img/chat_4389387.png"
                      alt="Drawing Automation"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="text-2xl font-semibold">Automation</div>
                  <div className="">
                    Unlock innovation and creativity and achieve outcomes faster with automation.
                  </div>
                  <button className="bg-gray-500 hover:bg-gray-600 rounded-full text-white p-2 w-1/3 transition-colors duration-200">
                    More
                  </button>
                </div>
              </div>
            </div> */}

{/* <div className="border justify-center h-full items-center">
              <div className="shadow-lg flex flex-col p-5 gap-3 w-75 rounded-xl">
                <div className="">
                  <img
                    src="/img/chat_4389387.png"
                    alt="Drawing Automation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="text-2xl font-semibold">Automation</div>
                <div className="">
                  Unlock innovation and creativity and achieve outcomes faster with automation.
                </div>
                <button className="bg-gray-500 hover:bg-gray-600 rounded-full text-white p-2 w-1/3 transition-colors duration-200">
                  More
                </button>
              </div>
            </div> */}











// <div className="bg-quinary flex flex-col h-screen justify-center items-center text-center md:text-start px-4 xs:px-0 xs:py-10 py-10">
//         <div className="flex w-full justify-center h-1/4 xs:1/5 items-center py-10 xs:py-5">
//           <motion.div
//             variants={fadeIn("", "", 0.2, 0.6)}
//             className="text-6xl xs:text-4xl font-bold text-black"
//           >
//             Our Services
//           </motion.div>
//         </div>
//         <div className="flex xl:flex-row xs:flex-col xs:hidden md:hidden sm:hidden w-[95%] lg:w-full xl:w-full xs:w-full m-auto justify-around text-lg text-black p-10 lg:p-0 xs:p-4">
//           <div className="flex flex-col gap-2 justify-center items-center">
//             {/* <img
//               src="/images/api.jpg"
//               alt="Picture of the author"
//               className="object-contain bg-fixed w-[500px] rounded-lg"
//             /> */}
//             <div className="h-72 xs:h-48 rounded-xl w-96 lg:w-80 bg-white"></div>
//             <div className="flex flex-col w-96 lg:w-80">
//               <motion.div
//                 variants={fadeIn("", "", 0.5, 0.7)}
//                 className="font-semibold text-3xl xs:text-xl"
//               >
//                 Automation
//               </motion.div>
//               <motion.div
//                 variants={fadeIn("", "", 0.8, 0.5)}
//                 className="font-light"
//               >
//                 Unlock innovation and creativity and achieve outcomes faster
//                 with automation.
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex flex-col gap-2 items-center">
//             <div className="h-72 xs:h-48 rounded-xl w-96 lg:w-80 bg-white"></div>
//             {/* <img
//               src="/images/customer-service-hotline-operators-consult-customers-call-center-modern-vector-flat-illustration_720185-107.avif"
//               alt="Picture of the author"
//               className="object-contain w-[500px] bg-fixed rounded-lg"
//             /> */}
//             <div className="flex flex-col w-96 lg:w-80">
//               <motion.div
//                 variants={fadeIn("", "", 0.5, 0.5)}
//                 className="font-semibold text-3xl xs:text-xl"
//               >
//                 Consulting
//               </motion.div>
//               <motion.div
//                 variants={fadeIn("", "", 0.8, 0.5)}
//                 className="font-light"
//               >
//                 Guiding Your Project Towards Success: Expert Consulting Every
//                 Step of the Way.
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex flex-col gap-2 items-center z-20">
//             <div className="h-72 xs:h-48 rounded-xl w-96 lg:w-80 bg-white"></div>
//             {/* <img
//               src="/images/meeting-strategy-marketing-analytic_18660-1060.avif"
//               alt="Picture of the author"
//               className="object-contain w-[500px] bg-fixed rounded-lg"
//             /> */}
//             <div className="flex flex-col w-96 lg:w-80">
//               <motion.div
//                 variants={fadeIn("", "", 0.5, 0.5)}
//                 className="font-semibold text-3xl xs:text-xl"
//               >
//                 Data & Insights
//               </motion.div>
//               <motion.div
//                 variants={fadeIn("", "", 0.8, 0.5)}
//                 className="font-light"
//               >
//                 The right people get the right information at the right time
//                 with connected data.
//               </motion.div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col w-full h-full justify-center items-center 2xl:hidden lg:hidden xl:hidden md:hidden sm:hidden">
//           <div className="w-[90%] mx-auto p-4 h-full flex flex-col sm:gap-12 justify-center gap-6">
//             <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
//               <img
//                 src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
//                 alt=""
//                 className="w-full h-64 object-cover rounded-md"
//               />
//               <div className="absolute left-0 bottom-0 p-2 flex flex-row justify-between items-center bg-black bg-opacity-50 w-full text-white ">
//                 <div className="font-semibold text-lg">Automation</div>
//                 <div className="underline">Learn More</div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
//               <img
//                 src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
//                 alt=""
//                 className="w-full h-64 object-cover rounded-md"
//               />
//               <div className="absolute left-0 bottom-0 p-2 flex flex-row justify-between items-center bg-black bg-opacity-50 w-full text-white ">
//                 <div className="font-semibold text-lg">Consulting</div>
//                 <div className="underline">Learn More</div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
//               <img
//                 src="https://usam.s3.ap-south-1.amazonaws.com/Image1.jpg"
//                 alt=""
//                 className="w-full h-64 object-cover rounded-md"
//               />
//               <div className="absolute left-0 bottom-0 p-2 flex flex-row justify-between items-center bg-black bg-opacity-50 w-full text-white ">
//                 <div className="font-semibold text-lg">Data & Insights</div>
//                 <div className="underline">Learn More</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-[90%] h-full mx-auto 2xl:hidden xl:hidden lg:hidden sm:hidden xs:hidden">
//           <div className="flex flex-col w-full h-full gap-8">
//             <div className="flex flex-row w-full h-1/2 gap-4 justify-center items-center">
//               <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2 h-3/4">
//                 <CardContent className="flex flex-col gap-2 h-full justify-center">
//                   <div className="flex font-semibold text-3xl">
//                     Automation
//                   </div>
//                   <div className="text-lg">
//                   Unlock innovation and creativity and achieve outcomes faster with automation.
//                   </div>
//                   <Link className="text-xl underline font-semibold" href="">Explore More</Link>
//                 </CardContent>
//               </Card>
//               <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2 h-3/4">
//                 <CardContent className="flex flex-col gap-2 h-full justify-center">
//                   <div className="flex font-semibold text-2xl">
//                     Consulting
//                   </div>
//                   <div className="text-lg">
//                   Unlock innovation and creativity and achieve outcomes faster with automation.
//                   </div>
//                   <Link className="text-xl underline font-semibold" href="">Explore More</Link>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="flex w-full h-1/2 justify-center">
//               <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2 h-3/4">
//                 <CardContent className="flex flex-col gap-2 h-full justify-center">
//                   <div className="flex font-semibold text-2xl">
//                     Data & Insights
//                   </div>
//                   <div className="text-lg">
//                   Unlock innovation and creativity and achieve outcomes faster with automation.
//                   </div>
//                   <Link className="text-xl underline font-semibold" href="">Explore More</Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//         <div className="2xl:hidden xl:hidden lg:hidden md:hidden xs:hidden flex w-[90%] m-auto h-full justify-center items-center">
//           <div className="flex flex-col w-full h-3/4 items-center justify-between">
//             <div className="flex flex-row w-full gap-4 justify-center items-center">
//               <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2">
//                 <CardContent className="flex flex-col gap-2 justify-center items-start text-left">
//                   <div className="flex font-semibold text-3xl">
//                     Automation
//                   </div>
//                   <div className="text-lg">
//                   Unlock innovation and creativity and achieve outcomes faster with automation.
//                   </div>
//                   <Link className="text-xl underline font-semibold" href="">Explore More</Link>
//                 </CardContent>
//               </Card>
//               <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2">
//                 <CardContent className="flex flex-col gap-2 justify-centeritems-start text-left">
//                   <div className="flex font-semibold text-3xl ">
//                     Consulting
//                   </div>
//                   <div className="text-lg">
//                   Unlock innovation and creativity and achieve outcomes faster with automation.
//                   </div>
//                   <Link className="text-xl underline font-semibold" href="">Explore More</Link>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="flex w-full justify-center">
//               <Card sx={{backgroundImage:"url(https://usam.s3.ap-south-1.amazonaws.com/Image2.jpg)", opacity:"1"}} className="w-1/2">
//                 <CardContent className="flex flex-col gap-2 h-full justify-center items-start text-left">
//                   <div className="flex font-semibold text-3xl">
//                     Data & Insights
//                   </div>
//                   <div className="text-lg">
//                   Unlock innovation and creativity and achieve outcomes faster with automation.
//                   </div>
//                   <Link className="text-xl underline font-semibold" href="">Explore More</Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//         <div className="xs:hidden sm:hidden md:hidden lg:hidden absolute flex justify-end w-full h-full">
//           <img className="h-full" src="https://usam.s3.ap-south-1.amazonaws.com/abstract.png" alt=""/>
//         </div>
//       </div>