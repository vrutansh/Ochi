import React from 'react'

function Projects() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-12'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            
        </div>
    
        <div className="cards flex gap-6 w-full p-10 relative">
              
                <div className="cardcontainer relative w-1/2 h-[74vh]">

                 <h1 className='absolute left-full text-[#004D43] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                 {"FYDE".split("").map((item, index)=><span className=''>{item}</span>)}
                 </h1>

                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1100.png" alt="" />
                    </div>
                </div>
                

                <div className="cardcontainer relative w-1/2 h-[74vh] ">
                <h1 className='absolute right-full text-[#004D43] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                    {"TRAWA".split("").map((item, index)=><span className=''>{item}</span>)}
                </h1>

                    <div className='w-full h-full rounded-xl bg-amber-300 overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1100.jpg" alt="" />
                    </div>
                </div>

        </div>
       
        <div className="cards flex gap-6 w-full p-10">
              
                <div className="cardcontainer relative w-1/2 h-[74vh]">

                 <h1 className='absolute left-full text-[#004D43] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                 {"OFFICEVIBE".split("").map((item, index)=><span className=''>{item}</span>)}
                 </h1>

                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1100.jpg" alt="" />
                    </div>
                </div>

                <div className="cardcontainer relative w-1/2 h-[74vh] ">
                <h1 className='absolute right-full text-[#004D43] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["poppins"]'>
                    {"PLANETLY".split("").map((item, index)=><span className=''>{item}</span>)}
                </h1>

                    <div className='w-full h-full rounded-xl bg-amber-300 overflow-hidden'>
                        <img src="https://ochi.design/wp-content/uploads/2022/05/10-1326x1100.png" alt="" />
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Projects