'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import localFont from 'next/font/local'
import { useState } from "react";
import linkedin from '../linkedin.webp';
import github from '../github.png';
import aletks from '../enc/tkale.jpg';
import vrals from '../enc/vr.jpg';
import props from '../enc/prop.jpg';
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
        <span>Professional Materials </span>

        
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
        <span>Assignment</span>
        
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
         
        <div className="w-full md:w-7/12 p-4 md:p-10">
          <p className="text:lg md:text-4xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
           This assignment was about making several types of job application materials. In these, it included resume, cover letter, and a mini interview video. This was a great way to understand where we are standing in our current early professional career as college students.
          </p>
        
        </div>

        
      </div>
     
           
   </main> 
  
                  <div className="flex space-x-20 mt-6 justify-center">
          
          <a href="/resumets" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 hover:scale-110 transition flex items-center justify-center w-40 h-15 bg-gray-600">
           <span className=" text-white text-lg md:text-2xl">Resume</span>  
       </a>
          <a href="/clts" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 hover:scale-110 transition flex items-center justify-center w-40  bg-blue-900">
           <span className=" text-sky-100 text-lg md:text-2xl">Cover Letter</span>  
       </a> <a href="https://youtu.be/0sHBkjZkDmg" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 hover:scale-110  transition flex items-center justify-center w-40  bg-red-900">
           <span className=" text-sky-100 text-lg md:text-2xl">Interview</span> 
       </a> </div>    </div>   ); }