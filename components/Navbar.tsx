"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {



    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY  > lastScrollY ) { // if scroll down hide the navbar
        setShow(false); 
        } else { // if scroll up show the navbar
        setShow(true);  
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => { 
        window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    const [textColor, setTextColor] = useState("text-white");
    // const [textColor, setTextColor] = useState("text-white");


  return (
    <div 
        className={'bg-[#009fb7] z-50 w-full flex items-center duration-200 fixed ' +(lastScrollY > 30 ? 'shadow-xl h-14 ' : ' h-24 ') +(show?' top-0 ':"  top-[-100px] ")}
    >
        <div className='container mx-auto flex h-full gap-8 items-center'>
            <Link href='/' className='flex gap-2 items-end'>
                <h1 className='text-2xl font-bold text-white'>Korazon</h1>
                {/* <h1 className='text-xs font-bold text-gray-700'>Shop</h1> */}
            </Link>
            <ul className='flex h-full'>
                <LinkElem href={"/store"}>
                    Home
                </LinkElem>
                <LinkElem href={"/store"}>
                    Store
                </LinkElem>
                <LinkElem href={"/store"}>
                    Article
                </LinkElem>
                <LinkElem href={"/store"}>
                    About us
                </LinkElem>
            </ul>

        </div>
    </div>
  )
}



const LinkElem = ({href, children}:{
    href: string,
    children: React.ReactNode
}) => {
    return (
        <li className='h-full'>
            <Link href={"/store"} className='h-full  text-white hover:bg-[#3334] flex items-center justify-center p-3'>
                {children}
            </Link>
        </li>
    )
}

export default Navbar