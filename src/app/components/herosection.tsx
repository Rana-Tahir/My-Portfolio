'use client';

import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';

const Herosection = () => {
  return (
    
        <section className="text-gray-600 body-font bg-gray-100 dark:bg-gradient-to-br from-gray-900 to-gray-800">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image 
      width={500}
      height={500}
      src={require("../../../public/assets/images/profile-pic.jpg")}
       alt="Profilepic" 
       className="object-cover object-center rounded mx-auto w-[20rem]"
      />
  </div>
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
        I am
        <br className="hidden lg:inline-block dark:text-white" />
          <Typewriter
          options={{
          strings: ['Web Developer', 'UI/UX Designer', 'Mathematician'],
          autoStart: true,
          loop: true,
      }}
    />
      </h1>
      <div className="w-[180px] h-[2px] bg-blue-700 dark:bg-white"></div>
      <p className="mb-8 leading-relaxed dark:text-white text-gray-900">
        <br />
        I am a proactive and dedicated UI/UX designer and web developer with a strong background in science and technology. With a Master's in Petroleum Technology, I have successfully transitioned into IT through the Governor's Sindh IT Initiative Program. My expertise includes creating responsive, user-focused digital experiences using modern frameworks such as React.js and Next.js, and I have designed high-fidelity prototypes in Figma. I have a proven track record of hands-on project development, including clones of popular platforms like Amazon and Netflix, showcasing my skills in design aesthetics, coding, and user-centric solutions. Driven by a passion for innovation, I am eager to contribute to impactful projects and collaborate with dynamic teams.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white dark:bg-blue-700 dark:hover:bg-blue-900 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    
  )
}

export default Herosection