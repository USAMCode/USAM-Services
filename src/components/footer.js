import React from 'react'
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

const Footer = () => {
  return (
    <div className='flex flex-col bg-neutral-800 xs:pb-4 md:pb-10 sm:pb-5'>
      <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex flex-row xs:flex-col sm:flex-col xl:h-auto w-full md:flex md:flex-col lg:flex lg:flex-col text-cyan-400 gap-4 pt-5 px-10 xs:px-2 flex items-center"
        >
          {/* <div className="flex text-black text-5xl xs:text-4xl font-semibold">
            Follow Us
          </div> */}
          <ul className="flex flex-row w-1/3 xs:w-full sm:w-full justify-center gap-12 xs:gap-4 md:flex md:flex-row md:w-full lg:flex lg:flex-row xl:w-full xl:flex xl:flex-row lg:w-full sm:flex sm:flex-row flex-wrap py-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://www.linkedin.com/in/joel-revington-105994135"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Linkedin.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://twitter.com/JoelRevington15"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Twitter.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://www.instagram.com/joel_revington/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Instagram.png"
                  alt=""
                  />
              </a>
            </li>
            <li>
              <a
                className="flex flex-row gap-5 items-center"
                // href="https://www.facebook.com/profile.php?id=100009270750468"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                  className="w-12 h-12"
                  src="https://portfolio20072023.s3.ap-south-1.amazonaws.com/Facebook.png"
                  alt=""
                  />
              </a>
            </li>
          </ul>
          <div className="flex text-lg flex-row xs:flex-col xs:gap-4 sm:w-full md:w-full lg:flex lg:flex-row lg:w-full xl:flex xl:flex-row xl:w-full w-1/3 xs:w-full justify-around">
            <div className="flex flex-col xs:flex-row gap-2 w-full text-center justify-around">
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 w-full justify-around text-center">
              <div>+(91)-9344375567</div>
              <div>mahesh.m@usam.in</div>
            </div>
          </div>
            <div className="flex text-center tracking-wide text-cyan-400">No 4, 1st Cross Street, CIT Colony, Mylapore, Chennai – 600004.</div>
        </motion.div>
    </div>
  )
}

export default Footer