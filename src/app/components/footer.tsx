import Link from 'next/link';
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-gray-400">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl dark:text-black">My Portfolio</span>
    </a>
    <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Portfolio 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://web.facebook.com/rana.tahir.75"} target= "_blank" className="text-2xl text-gray-500 hover:text-[#316ff6]">
        <BsFacebook />
      </Link>
      <Link href= {"https://www.linkedin.com/in/rana-tahir-08a73611a"} target="_blank" className="ml-3 text-2xl text-gray-500 hover:text-[#0077b5]">
        <BsLinkedin />
      </Link>
      <Link href= {"https://github.com/Rana-Tahir"} target="_blank" className="ml-3 text-2xl text-gray-500 hover:text-[#0077b5]">
        <FaGithub />
      </Link>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer

