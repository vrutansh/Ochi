import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-800'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-none tracking-tight'>
            Ochi is a strategic partner for fast-growing tech <br /> businesses that need to raise funds, sell products,<br /> explain complex ideas, and hire great people. 
        </h1>
        <div className='w-full flex gap-7 border-t-[2px] pt-20 mt-12 border-[#a2b663] '>
          <div className='w-1/2'>
             <h1 className='text-6xl'>Our Approach</h1> 
             <button className=' flex gap-10 items-center uppercase px-8 py-4 bg-zinc-900 mt-10 rounded-full text-white'>
               Read More
               <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
              </button>
          </div>
          <div className='w-1/2 h-[70vh] rounded-2xl bg-zinc-300'>
            <img className='h-full w-full rounded-2xl object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" />
          </div>
        </div>
    </div>
  )
}

export default About