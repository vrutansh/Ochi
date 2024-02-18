import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
  return (
    <div className='w-full py-20 rounded-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap '>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}}  className='text-[24vw] leading-[20vw] font-["Test_Founders_Grotesk_X-Cond_SmBd"] font-semibold uppercase pt-2 mb-[1vw]  '>We Are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[24vw] leading-[20vw] font-["Test_Founders_Grotesk_X-Cond_SmBd"] font-semibold uppercase pt-2 mb-[1vw] '>We Are Ochi</motion.h1>
            
        </div>
    </div>
    
  )
}

export default Marquee