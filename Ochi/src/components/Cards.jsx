import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card rounded-xl w-full h-full bg-[#004D43]'></div>

        </div>

        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
          <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
          <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
        </div>
    </div>
  )
}

export default Cards