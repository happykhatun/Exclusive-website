import React from 'react'
import SecHead from './SecHead'
import FlashSalesCard from './FlashSalesCard'
import coat from '../assets/coat_1.png';
import bag from '../assets/bag_2.png';
import cpu from '../assets/cpu_3.png';
import bookself from '../assets/bookself_4.png';
import Button from './Button';

const ThisMonth = () => {
    return (
        <>
            <section className='mt-17.5'>
                <div className="container">
                    <div className='flex justify-between items-end'>
                        <SecHead
                            subtitle="This Month"
                            title="Best Selling Products"
                        />
                        <div>
                        <Button className="">View All</Button>
                        </div>
                    </div>
                    <div className='flex justify-between mt-15'>
                        <FlashSalesCard
                            image={coat}
                            title="The north coat"
                            currentPrice="$260"
                            previousPrice="$360"
                            review="(65)"
                        />
                        <FlashSalesCard
                            image={bag}
                            title="Gucci duffle bag"
                            currentPrice="$960"
                            previousPrice="$1160"
                            review="(65)"
                        />
                        <FlashSalesCard
                            image={cpu}
                            title="RGB liquid CPU Cooler"
                            currentPrice="$160"
                            previousPrice="$170"
                            review="(65)"
                        />
                        <FlashSalesCard
                            image={bookself}
                            title="Small BookSelf"
                            currentPrice="$360"
                            review="(65)"
                        />

                    </div>
                </div>
            </section>

        </>
    )
}

export default ThisMonth
