import React from 'react'
import { useLocation } from 'react-router'

const Breadcrumb = () => {
     let {pathname} = useLocation()
     let Location = pathname.split("/")
  return (
    <div className='flex gap-4 mb-10 font-normal text-[14px] text-gray-500'>
      <h2>Home</h2>
      <h2>/</h2>
      <h2>{Location}</h2>
    </div>
  )
}

export default Breadcrumb
