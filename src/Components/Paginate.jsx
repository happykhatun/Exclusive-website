
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import FlashSalesCard from './FlashSalesCard';




const Paginate = ({ itemsPerPage, allproduct }) => {

    const items = allproduct;

    function Items({ currentItems }) {

        return (
            <>
                <div className='flex justify-between flex-wrap'>
                    {currentItems &&
                        currentItems.map((item) => (
                            <div>
                                <FlashSalesCard
                                    image={item.thumbnail}
                                    title={item.title}
                                    currentPrice={item.price}
                                    previousPrice={(item.price / (1 - item.price / 100)).toFixed(2)}
                                    review={item.rating.leanth}
                                    discount={item.discountPercentage}
                                />
                            </div>
                        ))}
                </div>

            </>
        );
    }




    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className="flex gap-2 mt-10"
                pageClassName="bg-secondary py-0.5 px-6.25 text-white"
            />

        </>
    )
}

export default Paginate
