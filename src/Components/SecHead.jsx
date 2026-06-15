import React from 'react'

const SecHead = ({title, Subtitle}) => {
  return (
    <>
    <section>
        <div className="container">
            <div className='flex items-center'>
                <div className='w-5 h-10 bg-primary rounded-sm'></div>
                <h3>{Subtitle}</h3>
            </div>
            <h1>{title}</h1>
        </div>
    </section>
      
    </>
  )
}

export default SecHead
