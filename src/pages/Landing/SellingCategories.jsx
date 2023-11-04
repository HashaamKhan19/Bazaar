import React from 'react'
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { mensFashion, womensFashion, gadjets, cosmetics } from '../../assets/imgsData.js'

const BestSellingCategories = () => {
    return (
        <div className='pb-10'>
            <h2 className='text-3xl capitalize text-center font-semibold mb-4'>best selling categories</h2>
            <div className='px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-6 sm:gap-x-6 max-w-screen-xl mx-auto'>
                <Card isFooterBlurred className="xl:h-[400px] h-[350px] lg:max-w-sm max-w-lg ">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white/90 font-medium text-xl">Men Fashion</h4>
                        <p className="text-tiny text-white/60 capitalize font-bold">Always dress well, keep it simple but significant</p>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover cursor-pointer"
                        src={mensFashion}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-base text-white/60 capitalize">starting at $29</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" className='hover:bg-primary-600'>Shop Now</Button>
                    </CardFooter>
                </Card>

                <Card isFooterBlurred className="xl:h-[400px] h-[350px] lg:max-w-sm max-w-lg ">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white/90 font-medium text-xl">Women Fashion</h4>
                        <p className="text-tiny text-white/60 capitalize font-bold">If shopping doesn't make you happy, then you're in the wrong shop</p>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover cursor-pointer"
                        src={womensFashion}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-base text-white/60 capitalize">25% off on first two products</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" className='hover:bg-primary-600'>Shop Now</Button>
                    </CardFooter>

                </Card>

                <Card isFooterBlurred className="xl:h-[400px] h-[350px] lg:max-w-sm max-w-lg ">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white/90 font-medium text-xl">Gadjets</h4>
                        <p className="text-tiny text-white/60 capitalize font-bold">dreams about the future are always filled with the gadjets</p>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover cursor-pointer"
                        src={gadjets}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-base text-white/60 capitalize">warrenty confirmed</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" className='hover:bg-primary-600'>Shop Now</Button>
                    </CardFooter>

                </Card>

                <Card isFooterBlurred className="xl:h-[400px] h-[350px] lg:max-w-sm max-w-lg ">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h4 className="text-white/90 font-medium text-xl">Cosmetics</h4>
                        <p className="text-tiny text-white/60 capitalize font-bold">Women!, Escape the reality</p>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover cursor-pointer"
                        src={cosmetics}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">

                            <div className="flex flex-col">
                                <p className="text-base text-white/60 capitalize">buy one get one free</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm" className='hover:bg-primary-600'>Shop Now</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default BestSellingCategories