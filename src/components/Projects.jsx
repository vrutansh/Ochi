import { motion, useAnimation } from 'framer-motion';
import { Power4 } from "gsap/all";
import React, { useState } from 'react';

function Projects() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) =>{
         cards[index].start({y: "0"});
    }

    const handleHoverEnd = (index) =>{
        cards[index].start({y: "100%"});
   }
    
  return (
    <div data-scroll data-scroll-section className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-12'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            
        </div>
    
        <div className="cards flex gap-6 w-full p-10 relative">
              
                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[74vh]">

                 <h1 className='absolute flex right-0 flex text-lime-300 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                 {"FYDE".split("").map((item, index)=>(
                   <motion.span
                     initial={{y:"100%"}}
                      animate={cards[0]} 
                      transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}  
                      className=' inline-block'>
                       {item}
                   </motion.span>))}
                 </h1>

                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1100.png" alt="" />
                    </div>
                </motion.div>
                

                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)}
                 className="cardcontainer relative w-1/2 h-[74vh] ">
                <h1 className='absolute flex overflow-hidden right-full text-teal-500 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                    {"TRAWA".split("").map((item, index)=>(
                     <motion.span
                     initial={{y:"100%"}}
                      animate={cards[1]} 
                      transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}  
                      className=' inline-block'>
                       {item}
                   </motion.span>))}
                </h1>

                    <div className='w-full h-full rounded-xl bg-amber-300 overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1100.jpg" alt="" />
                    </div>
                </motion.div>

        </div>
       

        <div className="cards flex gap-6 w-full p-10 relative">
              
              <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[74vh]">

               <h1 className='absolute flex right-0 flex text-pink-700 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
               {"OFFICEVIBES".split("").map((item, index)=>(
                 <motion.span
                   initial={{y:"100%"}}
                    animate={cards[0]} 
                    transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}  
                    className=' inline-block'>
                     {item}
                 </motion.span>))}
               </h1>

                  <div className='w-full h-full rounded-xl overflow-hidden'>
                      <img src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1100.jpg" alt="" />
                  </div>
              </motion.div>
              

              <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)}
               className="cardcontainer relative w-1/2 h-[74vh] ">
              <h1 className='absolute flex overflow-hidden right-full text-emerald-400 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                  {"PLANETLY".split("").map((item, index)=>(
                   <motion.span
                   initial={{y:"100%"}}
                    animate={cards[1]} 
                    transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}  
                    className=' inline-block'>
                     {item}
                 </motion.span>))}
              </h1>

                  <div className='w-full h-full rounded-xl bg-amber-300 overflow-hidden'>
                      <img src="https://ochi.design/wp-content/uploads/2022/05/10-1326x1100.png" alt="" />
                  </div>
              </motion.div>

      </div>
        
        
    </div>
  )
}

export default Projects