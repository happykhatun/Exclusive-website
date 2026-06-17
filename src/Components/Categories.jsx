import React from 'react'
import SecHead from './SecHead'
import CategoriesCard from './CategoriesCard'
import { CiMobile4 } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";

import { IoWatchOutline } from "react-icons/io5";

import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";







const Categories = () => {
    return (
        <>
            <section className='mt-20'>
                <div className="container">
                    <div>
                        <SecHead
                            subtitle="Categories"
                            title="Browse By Category"
                        />
                    </div>
                    <div className='flex justify-between my-16'>
                        <CategoriesCard
                            title="Phones"
                            icon={<CiMobile4 />}
                        />
                        <CategoriesCard
                            title="Computers"
                            icon={<CiMonitor />

                            }
                        />
                        <CategoriesCard
                            title="SmartWatch"
                            icon={<IoWatchOutline />

                            }
                        />
                        <CategoriesCard
                            title="Camera"
                            icon={<CiCamera />
                            }
                        />
                        <CategoriesCard
                            title="HeadPhones"
                            icon={<PiHeadphonesLight />
                            }
                        />
                        <CategoriesCard
                            title="Gaming"
                            icon={<SiYoutubegaming />
                            }
                        />
                    </div>
                    <hr className='border border-secondary/20' />
                </div>
            </section>

        </>
    )
}

export default Categories
