"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";



const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur border-b bg-background/50">
      <nav className="container mx-auto p-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo and brand */}
          <a className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-black dark:text-white">My Portfolio</span>
          </a>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-blue-600 hover:scale-105 transition-transform duration-300">
              Home
            </Link>
            <Link href="#About" className="text-white hover:text-blue-600 hover:scale-105 transition-transform duration-300">
              About
            </Link>
            <Link href="#Skill" className="text-white hover:text-blue-600 hover:scale-105 transition-transform duration-300">
              Skills
            </Link>
            <Link href="#Projects" className="text-white hover:text-blue-600 hover:scale-105 transition-transform duration-300">
              Projects
            </Link>
            <Link href="#Contact" className="text-white hover:text-blue-600 hover:scale-105 transition-transform duration-300">
              Contact
            </Link>
            
            <div>
              <a
                href="/assets/cv/myCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center ml-2 text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
                  Download CV
                  <AiOutlineCloudDownload className="text-xl ml-3" />
                </button>
               </a>
  
            </div>
        </div>


          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <svg
                  className="w-6 h-6 text-white md:text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16m-76h7"
                  ></path>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold">Portfolio</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-8">
                      <Link href="/" className="mr-5 hover:text-blue-600">
                        Home
                      </Link>
                      <Link href="#About" className="mr-5 hover:text-blue-600">
                        About
                      </Link>
                      <Link href="#Skill" className="mr-5 hover:text-blue-600">
                        Skills
                      </Link>
                      <Link
                        href="#Projects"
                        className="mr-5 hover:text-blue-600"
                      >
                        Projects
                      </Link>
                      <Link
                        href="#Contact"
                        className="mr-5 hover:text-blue-600"
                      >
                        Contact
                      </Link>
                      <div>
                        <a
                          href="/assets/cv/myCv.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="inline-flex items-center ml-2 text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
                            Download CV
                            <AiOutlineCloudDownload className="text-xl ml-3" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
