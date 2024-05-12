import React from 'react'
import myImage2 from '../assets/myImage2.jpg'
import { HiArrowNarrowRight } from "react-icons/hi";


function Home() {
  return (
    <>
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white
                '>Hi my name is Vansh </h2>
                <p className='py-4 text-gray-500 text-xl'>
                    i'm a Front-End Developer,
                    i'm pursuing my career as
                    Web Developer 
                    currently i'm doing btech in computer science
                    and learning new technologies 
                    currently, I love to work on my web application using
                    React and Tailwind 
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
                    cursor-pointer '>
                        Portfolio
                        <span className='px-1 group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={23}/>
                        </span>
                    </button>
                </div>
            </div>

            <div className='w-96 h-0.5/3 pl-1'>
                <img src={myImage2} alt="My profile" 
                className='rounded-2xl mx-auto w-1/3 md:w-full'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home