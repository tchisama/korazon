import React from 'react'
import { Button } from './ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
type Props = {}

function Hero({}: Props) {
  return (
    <div className='min-h-[60vh] bg-gray-100 pt-24 items-center flex'>
        <div className='py-8 container mx-auto h-full flex items-start justify-center flex-col' >
        <Carousel className='w-full'>
        <CarouselContent>
            <CarouselItem className=''>
                    <h1 className='text-6xl text-[#272727] font-bold'>
                        FIND THE <br/>
                        BEST PRODUCT <br/>
                        FOR YOUR NEEDS
                    </h1>
                    <Button className='mt-8' size={"lg"}>Explore Products</Button>
            </CarouselItem>
            <CarouselItem>
                    <h1 className='text-6xl text-[#272727] font-bold'>
                        FIND THE <br/>
                        BEST PRODUCT <br/>
                        FOR YOUR NEEDS
                    </h1>
                    <Button className='mt-8' size={"lg"}>Explore Products</Button>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>

    </div>
  )
}

export default Hero