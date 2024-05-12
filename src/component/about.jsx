import React from 'react'

function About() {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='
                text-4xl font-bold inline border-b-4 border-gray-500
                '>About</p>
            </div>

            <p className='text-xl mt-20'>
            Hello there! I'm thrilled to introduce myself as a budding Full Stack MERN developer, eager to make waves in the vast ocean of technology. With a passion for crafting intuitive digital experiences, I've embarked on an exciting journey to harness the power of MERN (MongoDB, Express.js, React.js, Node.js) stack to bring ideas to life.

Though relatively new to the tech world, my enthusiasm knows no bounds. I've dived headfirst into projects like building a dynamic weather app that not only delivers forecasts but also sparks user engagement with its sleek design and seamless functionality. Additionally, I've meticulously crafted my own personalized portfolio, showcasing not just my skills but also my commitment to excellence in every line of code.

Driven by a thirst for knowledge and a relentless pursuit of innovation, I'm ready to tackle new challenges and explore the endless possibilities that lie ahead in the realm of full stack development. With a blend of creativity, tenacity, and a hunger to learn, I'm poised to make a meaningful impact and carve out my place in the tech landscape. Let's build something extraordinary together!
            </p>

            <br />

            <p className='text-xl'>Driven by a thirst for knowledge and a relentless pursuit of innovation, I'm ready to tackle new challenges and explore the endless possibilities that lie ahead in the realm of full stack development. With a blend of creativity, tenacity, and a hunger to learn, I'm poised to make a meaningful impact and carve out my place in the tech landscape. Let's build something extraordinary together!</p>
        </div>
    </div>
  )
}

export default About