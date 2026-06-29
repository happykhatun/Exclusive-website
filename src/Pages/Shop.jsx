import React, { useEffect } from 'react'
import monitor from '../assets/monitor.png';
import FlashSalesCard from '../Components/FlashSalesCard';
import Breadcrumb from '../Components/Breadcrumb';
import { useState } from 'react';



const Shop = () => {

  const [allproduct, setAllProduct] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setAllProduct(data.products));

  }, [])

  return (
    <>
      <section className='py-20'>
        <div className="container">
          <Breadcrumb />
          <div className='flex justify-between mb-5'>
            <h3 className='font-bold text-[20px]'>Shop by Category</h3>
            <div className='space-x-3' >
              <span>Shop :</span>
              <select name="" id="" className='border border-[#D9D9D9] px-10 py-1 rounded-sm '>
                <option value="">6</option>
                <option value="">9</option>
                <option value="">12</option>
              </select>
            </div>
          </div>
          <div className='flex justify-between '>
            <div className='w-[20%]'>
              <ul className='text-secondary font-normal space-y-4 mr-4'>
                <li>Woman’s Fashion</li>
                <li>Men’s Fashion </li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            </div>
            <div className='w-[80%] flex justify-between flex-wrap'>
              {
                allproduct.map((item) =>{
                  return(
                    
                    <FlashSalesCard
                    image={item.thumbnail}
                    title={item.title}
                    currentPrice={item.price}
                    previousPrice={(item.price / (1 - item.price / 100)).toFixed(2)}
                    review={item.rating.leanth}
                    discount={item.discountPercentage}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Shop
