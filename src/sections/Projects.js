// src/components/Projects.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const Projects = () => {
  return(
    <>
    <motion.div variants={fadeIn ("left", "type", 0.5, 0.5)} className='text-neutral-400 font-extrabold text-5xl p-6 justify-center items-center text-center'>PROJECTS</motion.div>
    <div className='flex flex-row  gap-9 bg-black p-12 '>
      <div className="h-72 rounded-xl w-96 bg-white"></div>
      <div className="h-72 rounded-xl w-96 bg-white"></div>
      <div className="h-72 rounded-xl w-96 bg-white"></div>
      <div className="h-72 rounded-xl w-96 bg-white"></div>
      <div className="h-72 rounded-xl w-96 bg-white"></div>
    </div>
    </>
  )
};

export default Projects;
