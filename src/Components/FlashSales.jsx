import React from 'react'
import SecHead from './SecHead'
import CountDown from './CountDown'

const FlashSales = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className='flex items-end gap-22'>
               <SecHead
               subtitle="Today’s"
               title="Flash Sales"
               /> 
               <CountDown/>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default FlashSales
