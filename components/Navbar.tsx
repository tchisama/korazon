import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div 
        className='bg-gray-50 h-14 w-full flex items-center '
    >
        <div className='container mx-auto flex h-full gap-8 items-center'>
            <Link href='/' className='flex gap-2 items-end'>
                <h1 className='text-2xl font-bold text-gray-700'>Korazon</h1>
                {/* <h1 className='text-xs font-bold text-gray-700'>Shop</h1> */}
            </Link>
            <ul className='flex  h-full'>
                <li className=''>
                    <Link href={"/articles"} className='h-full hover:bg-gray-200 flex items-center justify-center p-3'>
                        Articles
                    </Link>
                </li>
                <li className='h-full'>
                    <Link href={"/store"} className='h-full hover:bg-gray-200 flex items-center justify-center p-3'>
                        Store
                    </Link>
                </li>
                <li className='h-full'>
                    <Link href={"/store"} className='h-full hover:bg-gray-200 flex items-center justify-center p-3'>
                        About us
                    </Link>
                </li>
                <li className='h-full'>
                    <Link href={"/store"} className='h-full hover:bg-gray-200 flex items-center justify-center p-3'>
                        Contact
                    </Link>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar