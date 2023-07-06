import React from 'react';

const Cart = () => {
    return (
        <>
            <section id='cart'>
                <div className='container max-w-6xl h-screen m-20 bg-red-600 rounded-2xl'>
                    <div className='container flex items-center justify-between mt-6 max-w-6xl h-24 bg-green-400'>
                        <div className='flex'>
                            <div className=' flex items-center justify-center bg-white w-10 h-8 border-2 border-black ml-5 mb-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-shopee" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z" />
                                    <path d="M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4" />
                                    <path d="M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1" />
                                </svg>
                            </div>
                            <h2 className='text-xl font-semi font-semibold ml-2 '>Products</h2>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between container max-w-6xl h-16 bg-gray-200'>
                        <div className='flex items-center justify-center w-28 h-14 ml-2 border-4 border-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                            <h2>Select All</h2>
                        </div>
                        <div className='grid grid-cols-4 gap-0.5 container max-w-xl bg-white h-14 border-2 border-black'>
                            <div className='flex items-center justify-around container w-28 h-13 border-2 border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M4 6l8 0" />
                                    <path d="M16 6l4 0" />
                                    <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M4 12l2 0" />
                                    <path d="M10 12l10 0" />
                                    <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M4 18l11 0" />
                                    <path d="M19 18l1 0" />
                                </svg>
                                <h2>Filters</h2>
                            </div>
                            <div className=' flex items-center justify-around container w-28 h-13 border-2 border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                                <h2>Search</h2>
                            </div>
                            <div className=' flex items-center justify-around container w-20 h-13 border-2 border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                    <path d="M13.5 6.5l4 4" />
                                </svg>
                                <h2>Edit</h2>
                            </div>
                            <div className=' flex items-center justify-around container w-28 h-13 border-2 border-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                                <h2>Delete</h2>
                            </div>
                        </div>
                        <div className='container w-28 h-14 border-2 border-black'></div>
                    </div>
                    <div className='container max-w-6xl h-full bg-orange-300'></div>
                </div>
            </section>
        </>
    )
}

export default Cart;