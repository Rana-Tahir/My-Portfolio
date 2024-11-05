import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div id="About">
        <section className="text-gray-900 dark:text-gray-300  bg-gray-200 dark:bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed">
      Having completed my matriculation in 2006 from The City Grammar School with a focus on science, and progressing to finish my intermediate studies in 2008 from Government National College, I graduated in 2012 from the University of Karachi's physics department. 
      </p>
      <p className="mb-8 leading-relaxed">
      I later pursued and completed my Master’s degree in Petroleum Technology at the same university. My journey took an unexpected turn when I decided to transition into the IT field, enrolling in the Governor's Sindh IT Initiative Program. This change required significant effort, as I came from a science and technology background that was distinct from IT. To excel in this new field, I worked tirelessly day and night, learning essential programming languages such as HTML, CSS, and TypeScript through the guidance of teachers and YouTube mentors, including Apna College, Chai aur Code, and Mehak Alamgir. 
      This rigorous self-study and determination fueled my growth and adaptation in the dynamic world of IT.
      </p>
      <div className="flex justify-center">
        <a href="/assets/cv/myCv.pdf" target="_blank">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View Cv
        </button>
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded w-[300px] h-[500px] mx-auto"
        alt="hero"
        src={require("../../../public/assets/images/profile-pic.jpg")}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default About
