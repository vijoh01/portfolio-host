"use client"
import Image from 'next/image'
import elon from '@/imgs/elon.jpg'
import { BiDownArrowAlt } from 'react-icons/bi'
import React, { useEffect } from 'react';
import {scrollToPosition} from '@/hooks/utilities'

export default function Home() {
    useEffect(() => {
        
        function animateOnScroll() {
            const elements = document.querySelectorAll('[data-scroll]');
            elements.forEach((element) => {
              if (isElementInViewport(element)) {
                let val = element.getAttribute("data-scroll") !== "true" ? element.getAttribute("data-scroll") : null;
                if (val !== null) {
                element.classList.add(`opacity-100`);
                element.classList.add(`animate-fadein_${val}`);
                }
              }
            });
          }
        
          function isElementInViewport(element: any) {
            const rect = element.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          }
          window.addEventListener('scroll', animateOnScroll);
      })
    return (
        <div className='flex flex-col min-h-screen '>
    
        <div className='flex mt-auto mb-auto justify-center text-center'>
            <div className='flex  flex-col-reverse flex-wrap lg:flex-row lg:text-start items-center justify-between w-[63rem] lg:w-[53rem] xl:w-[61rem]'>
            <div className=' max-[1023px]:mt-5 motion-safe:animate-fadein_left' data-scroll="left">
                <p className='text-primary-100 dark:text-secondary-100 mt-2 font-bold text-4xl lg:text-5xl'>Viktor Johansson</p>
                <p className='text-primary-200 dark:text-secondary-200 mt-2 font-bold text-3xl lg:text-4xl'>Webbutvecklare</p>
                <button className='text-primary-200 dark:text-secondary-50 pt-1 pb-1 pl-8 pr-8 mt-5 rounded-md bg-primary-300 dark:bg-secondary-300 font-bold text-2xl'>Kontakt</button>
            
            </div>
            <div className='opacity-90 bg-secondary-50 dark:bg-secondary-200 overflow-hidden max-[1023px]:mt-20 motion-safe:animate-fadein_right h-80 w-80 xl:h-[30rem] xl:w-[30rem]  lg:w-[25rem] lg:h-[25rem] rounded-full' data-scroll="right">
                <Image className='backdrop-blur-3xl shadow-primary-100 drop-shadow-[0_10px_10px_rgba(0,0,0,3)]' src={elon} alt=''></Image>
            </div>
            </div>
        </div>
        <button onClick={() => scrollToPosition(500)} className='animate-fadein_bottom rounded-full p-3 mb-5 mt-5 bg-primary-100 dark:bg-secondary-100 text-primary-50 dark:text-primary-100 self-center'>
        <BiDownArrowAlt className='rounded-full'></BiDownArrowAlt>
        </button>
        </div>
    )
}