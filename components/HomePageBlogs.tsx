import React from 'react'



import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

type Props = {}

function HomePageBlogs({}: Props) {
  return (
    <div className='container mx-auto '>
        <Carousel>
        <CarouselContent>
            <CarouselItem className='basis-2/4 border m-1 aspect-[4/3] bg-gray-200'>

            </CarouselItem>
            <CarouselItem className='basis-1/4 border m-1 flex flex-col'>
                <div className='flex-1 border '></div>
            </CarouselItem>
            <CarouselItem className='basis-1/4 border m-1 flex flex-col'>
                <div className='flex-1 border '></div>
            </CarouselItem>
        </CarouselContent>
        </Carousel>
    </div>
  )
}

export default HomePageBlogs