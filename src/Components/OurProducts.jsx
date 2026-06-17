import React from 'react'
import SecHead from './SecHead'
import FlashSalesCard from './FlashSalesCard'
import dog_food_1 from '../assets/dog_food_1.png';
import Button from './Button';

const OurProducts = () => {
    return (
        <>
            <section className='mt-15'>
                <div className="container">
                    <div>
                        <SecHead
                            subtitle="Our Products"
                            title="Explore Our Products"
                        />
                    </div>
                    <div className='flex flex-wrap gap-x-7 gap-y-15'>
                        <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        />
                         <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        />
                         <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        /> <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        /> <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        />
                         <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        />
                         <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        />
                         <FlashSalesCard
                            image={dog_food_1}
                            title="Breed Dry Dog Food"
                            currentPrice="$100"
                            review="(35)"
                        />
                        
                    </div>
                    <Button className="mx-auto block mt-15">View All Products</Button>
                </div>
            </section>

        </>
    )
}

export default OurProducts
