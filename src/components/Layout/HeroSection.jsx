import React from 'react'
import ShopNowBtn from './ShopNowBtn'
import ShoesImg from '../../assets/shoes.png'
import BagImg from '../../assets/bag.png'
import { FaCreditCard, FaMoneyBill, FaTimeline, FaTruckFast } from "react-icons/fa6";
import { BiTimer } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";

const HeroSection = () => {
    return (
        <div className='bg-slate-50 mt-2 h-[50%]'>
            <div className='max-w-screen-xl mx-auto px-8 flex items-center h-full'>
                {/* TEXT-SECTION */}
                <div className='flex-1 -mt-10'>
                    <h1 className='capitalize text-5xl font-semibold'>
                        Fashionable <br /> collection
                    </h1>

                    <p className='capitalize my-4'>
                        get free shipping on all orders over $88.00.
                    </p>

                    <div>
                        <ShopNowBtn />
                    </div>
                </div>

                {/* IMG-SECTION */}
                <div className='flex-1 flex justify-end'>
                    <img src={BagImg} alt="ShoesImg" className='h-96' />
                </div>
            </div>


            {/* ADVANTAGES */}
            <div className='max-w-screen-xl mx-auto px-8'>
                <div className='cursor-pointer grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 mt-6 py-6 px-14 border border-primary-300 duration-300 hover:shadow-lg hover:shadow-primary-300 bg-slate-50 rounded'>
                    <div className='flex lg:justify-center items-center gap-x-2 w-full '>
                        <FaTruckFast size={30} />
                        <div>
                            <h2 className='capitalize'>fast delivery</h2>
                            <p className='text-xs -mt-1 text-slate-500'>Start from $10</p>
                        </div>
                    </div>

                    <div className='flex lg:justify-center items-center gap-x-2 w-full mt-4 sm:mt-0 lg:mt-0'>
                        <FaMoneyBill size={30} />
                        <div>
                            <h2 className='capitalize'>Money Guarantee</h2>
                            <p className='text-xs -mt-1 text-slate-500'>7 Days Back</p>
                        </div>
                    </div>

                    <div className='flex lg:justify-center items-center gap-x-2 w-full mt-4 lg:mt-0'>
                        <BiTimer size={30} />
                        <div>
                            <h2 className='capitalize'>365 Days</h2>
                            <p className='text-xs -mt-1 text-slate-500'>For free return</p>
                        </div>
                    </div>

                    <div className='flex lg:justify-center items-center gap-x-2 w-full mt-4 lg:mt-0'>
                        <RiSecurePaymentFill size={30} />
                        <div>
                            <h2 className='capitalize'>Payment</h2>
                            <p className='text-xs -mt-1 text-slate-500'>Secure system</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection