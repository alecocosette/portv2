'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import localFont from 'next/font/local'
import { useState } from "react";
import linkedin from '../linkedin.webp';
import github from '../github.png';
import aletks from './tkale.jpg';
import vrals from './vr.jpg';
import props from './prop.jpg';
import arrow from '../arrownew.png';
import rockyIm from '../rockyAsset-removebg-preview.png';
import ale10 from '../unnamedale2.jpg';

import StarBackground from "../components/StarBackground";

export const anotherMarioFont = localFont({
  src:'../mario-party-hudson/dicecondesedlight.ttf',
  variable: '--font-anotherMario'
});

const ale3Im = props;  
const ale4Im = vrals;
const ale5Im = ale10;

const ale10Im = aletks;

const arrowIm = arrow;
 const GithubLogo = github;
  const LinkLogo = linkedin;
   const aleImageList = [{src:ale10Im, alt:""}, {src: ale3Im, alt:""}, {src: ale4Im, alt: ""},{src: ale5Im, alt: ""}];
   const aleListSize = aleImageList.length;

   const NavButtons = () => ( 
   <div className= "grid grid-cols-2 md:flex md:justify-center md:items-center gap-15 w-full  md:px-0">
    <Link href="/enc" passHref>  <button className="bg-red-600 hover:scale-105 text-center hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-4xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]">ABOUT ME</button></Link>
    <Link href="/materials" passHref><button className={'bg-amber-300 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-4xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000]  md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>MATERIALS</button> </Link>
     <Link href="/instructions" passHref><button className={'bg-blue-500 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-4xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>INSTRUCTIONS</button>  </Link>
    <Link href="/proposal" passHref> <button className={' bg-emerald-400 hover:scale-105 text-white hover:bg-purple-700 font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-4xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000] '}>PROPOSAL</button></Link>
    </div>
    ); 

const ProfileSection = () => (
    <div className="flex flex-col items-center space-y-6 space-x-1 text-white text-right"> 
    <div className={`
    text-[15vw] 
      md:text-[4vw]
      font-extrabold 
      font-mario 
      leading-none 
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>
        <span>Alejandro's </span>
        <span>  ENC 3241</span>

        
        </div>
        
        
          <div className={`
        text-[15vw] 
      md:text-[4vw]
      font-extrabold 
      font-mario 
      leading-none 
      md:-mt-6
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>
        <span>Portfolio</span>
        
        </div>
    </div> 
     ); 

     export default function AboutPage(){ 
        const [topImageIndex, setTopImageIndex] = useState(0);
     
        const updateImage = (setter: React.Dispatch<React.SetStateAction<number>>, currentIndex: number, direction: number, listSize: number) => {
            setter((prevIndex) => {
                let newIndex = prevIndex + direction;
                if (newIndex<0){
                    newIndex = listSize - 1;
                }
                if (newIndex >= listSize) {
                    newIndex = 0;
                }
                return newIndex;
            });    
        };
        const currentTopImage = aleImageList[topImageIndex];
        
      return (
        <div className={`relative min-h-screen font-sans p-8 ${anotherMarioFont.className} w-full flex flex-col items-center`}>
                  <StarBackground/>
          <header className="flex justify-between items-center w-full  "> 
          
          <NavButtons />
          </header> <div className="mt-10">
          <ProfileSection />
          </div>

          <main>
         
         <div className="flex flex-col justify-between items-center">
          <div className="w-full md:w-1/2 flex flex-col items-center p-4">
          <div className=" w-100 h-80 overflow-hidden flex items-center justify-center mb-4">
            <Image 
              src={currentTopImage.src} 
              alt={currentTopImage.alt} 
              
              className="object-cover w-full h-full loading='lazy'" 
            />
          </div>
          <div className="flex space-x-15 md:space-x-30">
            <button onClick={()=>updateImage(setTopImageIndex,topImageIndex,-1,aleListSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
              <Image src={arrowIm} alt="Left Arrow" className="w-15 md:w-10 md:h-10 h-12 transform rotate-180"/>
            </button>
            <Image src={rockyIm} alt="Rocky Icon" className="md:w-15 md:h-10 w-18 h-12 hover:scale-110"/>
            <button onClick={()=>updateImage(setTopImageIndex,topImageIndex,1,aleListSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
                <Image src={arrowIm} alt="Right Arrow" className="w-15 md:w-10 md:h-10 h-12"/>
              
            </button>
          </div>
        </div>
        <div className="w-full md:w-10/12 p-4 md:p-10">
          <p className="text:lg md:text-4xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
            Hey, I am Alejandro Jaimes, a student at the University of Central Florida pursuing a Bachelor's degree in Computer Science.
             I am current President of Graphics Programming Knights, covering various topics in computer graphics such as the math used and introduction to GPU programming in workshops.
             I also oversee a team of 5 people in the club to cover different parts of the club to increase its reach. 
             Alongside that I am part of the Knight Hacks' Outreach team where my main role is to create content for our social media and help with the organization of our events.
             I am two-time hackathon winner and I am skilled in C++, Python, C# and more where I am interested in using them in machine learning, operating systems and game development.
             I am fluent in Spanish and English and have a passion to just go and learn anything that I can at any time.
          </p>
        </div>

        
      </div>
     
           
   </main> 
   <div className="flex flex-col items-center space-y-0 text-white text-right"> 
    <h2 className={`
      text-[6vw] 
      md:text-[3vw] 
      font-extrabold 
      font-mario 
      leading-none 
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>Thank you for reading :D
      
      
     </h2>
     <h2 className={`
      text-[4vw] 
      md:text-[2vw]
      font-extrabold 
      font-mario 
      leading-none 
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>
      Always down to connect!
     </h2>
    </div> 
                  <div className="flex space-x-20 mt-6 justify-center">
          
          <a href="https://www.github.com/alecocosette" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 transition flex items-center space-x-3  px-4 w-40 h-15 bg-black">
           <span className=" text-white text-lg md:text-2xl">GitHub</span> <Image src={GithubLogo} alt="Github Logo" className="w-35 h-15 bg-black  p-1"  /> 
       </a>
          <a href="https://www.linkedin.com/in/alejandro-jaimes-coco/" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 transition flex items-center space-x-3  px-4 w-40 h-15 bg-blue-500">
           <span className=" text-sky-100 text-lg md:text-2xl">LinkedIn</span> <Image src={LinkLogo} alt="LinkedIn Logo" className="w-35 h-15 scale-100 bg-blue-500"  /> 
       </a> </div>    </div>   ); }