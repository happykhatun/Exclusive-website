import React from 'react'

const SecHead = ({ title, subtitle }) => {
  return (
    <>
      <div>
        <div className='flex items-center gap-4'>
          <div className='w-5 h-10 bg-primary rounded-sm'></div>
          <h3 className='text-primary font-semibold '>{subtitle}</h3>
        </div>
        <h1 className='text-[36px] font-semibold mt-5'>{title}</h1>
      </div>

    </>
  )
}

export default SecHead
