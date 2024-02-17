import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap '>
            <h1 className='text-[15vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] font-semibold uppercase -mb-1 pt-[.25vw]  '>We Are Ochi</h1>
            <h1 className='text-[15vw] leading-none font-["Test_Founders_Grotesk_X-Cond_SmBd"] font-semibold uppercase -mb-1 pt-[.25vw] '>We Are Ochi</h1>
        </div>
    </div>
  )
}

export default Marquee