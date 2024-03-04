import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full  bg-zinc-900 pt-2 ">
        <div className="textstructue mt-52 px-20">
          {["We Create", "Eye Opening","Presentations"].map((item,index)=>(
              <div className="masker ">

               <div className='w-fit flex overflow-hidden'>
                 
                { index === 1 && (
                <motion.div
                   initial={{width: 0}} 
                   animate={{width: "9.2vw"}} 
                   transition={{ease: [0.76, 0, 0.24, 1], duration:1}} 
                   className='w-[9.2vw] mr-[.76vw] rounded-md mt-9 h-[6vw] relative -top-[1.4vw]  overflow-hidden'>
                    <img className='w-full h-full fit-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                   </motion.div>) }


               <h1 key={index} className="flex items-center h-full uppercase text-[9.5vw] leading-[7.8vw] tracking-normal font-lg font-bold font-['Test_Founders_Grotesk_X-Cond_SmBd']">{item}</h1>
               </div>
           </div>
          
          ))}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>

          {["For public and private companies","From the Pitch to IPO"].map((items,index)=>(
             <p key={index} className='text-md font-light tracking-tight leading-none'>{items}</p>
          ))}
            <div className='start flex items-center gap-5'>
                  <div className='px-4 py-2 border-[1px] font-light text-md uppercase capitalize border-zinc-500 rounded-full'>Start the Project</div>

                  <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'><span className='rotate-[45deg]'><FaArrowUpLong/></span></div>
            </div>
        </div>
    </div>
  )
}

export default Landing