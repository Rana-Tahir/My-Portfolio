import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id="Projects">
        <section className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-3xl dark:text-white sm:text-white font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>

    </div>
    <div className="flex flex-wrap m-8 -mt-[5rem]">

    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image 
            alt="Logo"
            className="absolute inset-0 w-[200] h-[300] object-cover object-center bg-black"
            src={require("../../../public/assets/images/figma image2.jpeg")}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              FIGMA
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            COMPLETE WEBSITE DESIGN
            </h1>
            <p className="leading-relaxed">
              Designing a complete website using Figma with complete understanding of Color styling, topography and auto-layout properties.
            </p>
            <Link href={"https://www.figma.com/design/TZjKC8TEV8yQXqjEZPWD5k/Complete-Website-Design-for-Assignment?node-id=0-1&t=7bpAVlXXPtoMWN51-1/"} target="_blank">
            <p className="leading-relaxed text-blue-500 hover:underline"> 
              View project..
            </p>
            </Link>
          </div>
        </div>
      </div>

    <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image 
            alt="Logo"
            className="absolute inset-0 w-[200] h-[500] object-cover object-center bg-black"
            src={require("../../../public/assets/images/figma image2.jpeg")}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              FIGMA
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            COMPLETE WEBSITE DESIGN
            </h1>
            <p className="leading-relaxed">
              Designing a complete website using Figma with complete understanding of Color styling, topography and auto-layout properties.
            </p>
            <Link href={"https://www.figma.com/design/w4fWsI5iWF90BnpjMMPB1X/Complete-Design-For-assignment?node-id=0-1&t=Vf7Du206QMB1PRYo-1/"} target="_blank">
            <p className="leading-relaxed text-blue-500 hover:underline"> 
              View project..
            </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image 
            alt="Logo"
            className="absolute inset-0 w-[100] h-[100] object-cover object-center bg-black"
            src={require("../../../public/assets/images/figma image2.jpeg")}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              FIGMA
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            NETFLIX UI CLONE
            </h1>
            <p className="leading-relaxed">
              Enhancing my learning by cloning Netflix Mobile App, Thanks to <b>GD Mentor</b> for making it easy to me.
            </p>
            <Link href={"https://www.figma.com/proto/E5VFvP2HCKW3MiVqJOWhny/Netflix-App-for-Assignment?node-id=101-68&t=928EXWdfhq07a7KH-1"} target="_blank">
            <p className="leading-relaxed text-blue-500 hover:underline"> 
              View project..
            </p>
            </Link>
          </div>
          
        </div>
        </div>

        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image 
            alt="Logo"
            className="absolute inset-0 w-[100] h-[100] object-cover object-center bg-black"
            src={require("../../../public/assets/images/figma image2.jpeg")}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              FIGMA
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            TIKTOK UI CLONE
            </h1>
            <p className="leading-relaxed">
              Enhancing my learning by cloning TikTok Moblie App, Thanks to <b>GD Mentor</b> for making it easy to me.
            </p>
            <Link href={"https://www.figma.com/proto/M5o47QeDE3uXCfOvBOl2vi/Tik-Tok-App-Design-for-Assignment?node-id=2-41&t=VD51UcnsSj4vCMyj-1"} target="_blank">
            <p className="leading-relaxed text-blue-500 hover:underline"> 
              View project..
            </p>
            </Link>
          </div>
          
        </div>
        </div>



      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image 
            alt="Logo"
            className="absolute inset-0 w-50pxs h-50px object-cover h-[20] w-[20] object-center bg-black"
            src={require("../../../public/assets/images/Amazon-Logo3.jpg")}
          />

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Mastering HTML and CSS
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            AMAZON UI CLONE
            </h1>
            <p className="leading-relaxed">
              Enhancing my learning by cloning Amazon Website, Thanks to <b>Apna College</b> for making it easy to me.
            </p>
            <Link href={"https://amazone-ui-clone.vercel.app/"} target="_blank">
            <p className="leading-relaxed text-blue-500 hover:underline"> 
              View project..
            </p>
            </Link>
          </div>
          
        </div>
      </div>




        

            
      
      
    </div>
  
    
  </div>
</section>


</div>
  )
}

export default Projects