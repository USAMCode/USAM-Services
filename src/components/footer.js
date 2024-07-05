import React from 'react'
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 bg-neutral-900 relative xs:py-4 md:py-4 sm:py-5'>
      <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex xl:flex-row xl:justify-around sm:px-0 flex-row xs:flex-col sm:flex-col xl:h-auto w-full md:flex md:flex-col lg:flex lg:flex-row text-second gap-4 md:py-5 px-5 lg:px-2 xs:px-2 flex items-center"
        >
          <div className='flex w-full justify-center items-center xs:flex-row sm:flex-row md:flex-row lg:flex-col gap-8'>
            <img className='w-40 xs:w-32 md:w-52 h-12 lg:w-40 2xl:w-52 object-contain' src='https://usam.s3.ap-south-1.amazonaws.com/UsamWhite.png' alt=''/>
            <img className='w-40 xs:w-32 md:w-52 lg:w-40 h-12 2xl:w-52 object-contain' src='https://usam.s3.ap-south-1.amazonaws.com/AutodeskWhite.png' alt=''/>
          </div>
          <ul className="flex flex-row xs:w-full sm:w-full justify-center gap-12 2xl:gap-12 xl:flex xl:gap-6 lg:gap-x-12 lg:gap-y-6 xs:gap-4 md:flex md:flex-row md:w-full xl:flex-row lg:w-full sm:flex sm:flex-row flex-wrap py-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                href="https://www.linkedin.com/company/usam-technoloy-solutions-p-ltd/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-10 h-10"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Linkedin.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                href="https://x.com/UsamTech"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-10 h-10"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Twitter.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                href="https://www.instagram.com/usam_since_1990/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10 h-10"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Instagram.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                href="https://www.facebook.com/usam.technology/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-10 h-10"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Facebook.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                href="https://www.youtube.com/@usamlearning"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-10 h-10"
                  src="https://usam.s3.ap-south-1.amazonaws.com/youtube.png"
                  alt=""
                  />
              </a>
            </li>
          </ul>
          <div className="flex text-lg flex-row xs:flex-col xs:gap-4 sm:w-full md:w-full lg:flex lg:flex-row lg:w-full xl:flex xl:flex-row xs:w-full justify-around">
            {/* <div className="flex flex-col xs:flex-row gap-2 w-full text-center justify-around">
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div> */}
            <div className="flex lg:flex-col md:text-lg lg:text-lg xl:text-xl xs:flex-col md:flex-row gap-2 w-full justify-around text-center">
              <div className='flex w-full justify-center'>+(91)-9344375567</div>
              <div className='flex w-full justify-center'>mahesh.m@usam.in</div>
              <div className='flex w-full justify-center'>www.usam.in</div>
            </div>
          </div>
          <div className='flex flex-col lg:w-full md:w-[85%] sm:w-[90%] xl:text-xl mx-auto w-full xs:gap-2 xs:p-4 sm:gap-2 xs:w-full xs:items-center'>
            <div className="flex w-full text-lg tracking-wide text-second underline">Corporate Office</div>
            <div className="flex w-full sm:w-full md:w-full lg:w-full xs:w-full tracking-wide text-second"><b>Chennai&nbsp;:</b>&nbsp;No 4, 1st Cross Street, CIT Colony, Mylapore, Chennai – 600004.</div>
            <div className='flex flex-col'>
              <div className='flex underline text-lg'>Our Branches&nbsp;:</div>
              <div className='flex flex-row xs:flex-1 xs:flex-wrap sm:flex-wrap lg:flex-wrap gap-2 lg:gap-0 xs:gap-0 w-full xs:w-[100%] justify-start'>
                <div>Coimbatore</div>&nbsp;|&nbsp;
                <div>Trichy</div>&nbsp;|&nbsp;
                <div>Bangalore</div>&nbsp;|&nbsp;
                <div>Hyderabad</div>&nbsp;|&nbsp;
                <div>Kochi</div>&nbsp;|&nbsp;
                <div>Bhubaneswar</div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className='flex flex-row xs:flex-col text-second w-[90%] xs:w-full xs:text-sm md:text-base xs:p-4 xs:items-center mx-auto justify-around'>
          <div>Copyright © 2021 USAM Technology Solutions Pvt Ltd.</div>
          <div>All rights reserved</div>
        </div>
    </div>
  )
}

export default Footer