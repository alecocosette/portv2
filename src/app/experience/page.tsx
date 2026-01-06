'use client';
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import gpk from '../gpknow.png';
import kh from '../KH2025Small.svg';
import hhsf from '../hhsf.png';
import arrow from '../arrownew.png';
import rockyAsset from '../rockyAsset-removebg-preview.png'
import exp1 from '../experience1.jpg';
import exp2 from '../experience2.png';
import exp3 from '../experience3.jpg';
import exp4 from '../experience4.jpg';
import exp5 from '../experience5.jpg';
import { useState } from "react";
import gpkexp from '../gpkexp.jpg';

export const anotherMarioFont = localFont({
  src:'../mario-party-hudson/dicecondesedlight.ttf',
  variable: '--font-anotherMario'
});
const expImage = gpkexp;
const rockyIm = rockyAsset;
const arrowIm = arrow;
const gpkLogo = gpk;
  const khLogo = kh;
  const hhsfLogo = hhsf;
  const ex1 = exp1;
  const ex2 = exp2;
  const ex3 = exp3;
  const ex4 = exp4;
  const ex5 = exp5;
   const aleImageList = [{src: ex1, alt: "me"}, {src: ex2, alt:""}, {src: ex3, alt:""}, {src: ex4, alt: ""}, {src: ex5, alt: ""}, {src: expImage, alt: "GPK Event"}];
   const aleListSize = aleImageList.length;
    const NavButtons = () => ( 
  // The 'flex' class makes the buttons horizontal. // The 'space-x-4' class handles the padding/spacing between the buttons.
   <div className= "grid grid-cols-2 md:flex md:space-x-13 w-full md:w-auto px-1 md:px-0">
    <Link href="/" passHref>  <button className="bg-red-600 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]">HOME</button></Link>
    <Link href="/projects" passHref><button className={'bg-amber-300 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000]  md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>PROJECTS</button> </Link>
     <Link href="/experience" passHref><button className={'bg-blue-500 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>EXPERIENCE</button>  </Link>
    <Link href="/about" passHref> <button className={' bg-emerald-400 hover:scale-105 text-white hover:bg-purple-700 font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000] '}>ABOUT</button></Link>
    </div> 
    ); 
    
  
    
    
     export default function ExperiencePage(){ 
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
                  <div className={`min-h-screen font-sans p-8 ${anotherMarioFont.className} bg-cover bg-gray-900 no-scrollbar`}
                          style={{backgroundImage: 'url(/StarTile_SpaceJam.png)',backgroundAttachment: 'fixed', backgroundSize:'115% 115%', imageRendering: 'pixelated'}} >
         
          <header className="flex justify-between items-center w-full mb-15"> 
          <NavButtons />
          </header>
         
         <div className="flex flex-col space-y-20 mt-6 items-center justify-center">
          
          <a href="https://linktr.ee/GPKnights" target="_blank" rel="noopener noreferrer" 
   className="
    
     flex flex-col-reverse md:flex-row items-center md:items-start 
     w-[95vw] md:w-full md:max-w-6xl h-auto md:h-80 md:opacity-75 hover:opacity-100
     bg-purple-500 
     transition hover:scale-105 p-4 md:px-4 md:py-6
   "
>
  <div className="flex flex-col flex-1 mt-4 md:mt-0">
    <span className="
      text-white text-3xl md:text-7xl 
      leading-tight md:leading-none mb-2
      [text-shadow:3px_3px_#000] md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
    ">
      Vice President
    </span>

    <span className="text-white text-xl md:text-3xl mb-4 [text-shadow:2px_2px_#000] md:[text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_3px_-3px_#000000,_-3px_3px_#000000]">
      Graphics Programming Knights
    </span>

    <div className="text-white text-sm md:text-lg space-y-2 leading-relaxed">
      <p>I help create collaborations with other clubs on campus for different events.</p>
      <p>During this time, I aided in setup for a Render Jam in October 2025.</p>
      <p>I also work on workshops relating to mathematics necessary or on different game engines such as Unity.</p>
      <p>As one of the founders, it is my duty to ensure a growing and safe community.</p>
    </div>
  </div>

  <Image 
    src={gpkLogo} 
    alt="GPK Logo" 
    className="w-32 h-32 md:w-70 md:h-70 bg-purple-500 self-center md:justify-right items-right" 
  /> 
</a>
<a href="https://blade.knighthacks.org/" target="_blank" rel="noopener noreferrer" 
   className="
    
     flex flex-col-reverse md:flex-row items-center md:items-start 
     w-[95vw] md:w-full md:max-w-6xl h-auto md:h-80 md:opacity-75 hover:opacity-100
     bg-red-600 
     transition hover:scale-105 p-4 md:px-4 md:py-6
   "
>
  <div className="flex flex-col flex-1 mt-4 md:mt-0">
    <span className="
      text-white text-3xl md:text-7xl 
      leading-tight md:leading-none mb-2
      [text-shadow:3px_3px_#000] md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
    ">
      Software Engineer Mentee
    </span>

    <span className="text-white text-xl md:text-3xl mb-4 [text-shadow:2px_2px_#000] md:[text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_3px_-3px_#000000,_-3px_3px_#000000]">
      Knight Hacks
    </span>

    {/* DESCRIPTION: REMOVE whitespace-nowrap so text wraps on phones */}
    <div className="text-white text-sm md:text-lg space-y-4 leading-relaxed">
      <p>Currently developing skills in low level systems for my emulator project.</p>
      <p>I attend multiple workshops improving my coding abilities and learning about how the world moves.</p>
      <p>I improve my soft skills through leadership and collaboration and mentorship.</p>

      
    </div>
  </div>

  <Image 
    src={khLogo} 
    alt="kh Logo" 
    className="w-32 h-32 md:w-70 md:h-70 bg-black self-center md:justify-right items-right" 
  /> 
</a>


       
<a href="https://hhsf.us/meet-our-students/" target="_blank" rel="noopener noreferrer" 
   className="
    
     flex flex-col-reverse md:flex-row items-center md:items-start 
     w-[95vw] md:w-full md:max-w-6xl h-auto md:h-80 md:opacity-75 hover:opacity-100
     bg-blue-700
     transition hover:scale-105 p-4 md:px-4 md:py-6
   "
>
  <div className="flex flex-col flex-1 mt-4 md:mt-0">
    <span className="
      text-white text-3xl md:text-7xl 
      leading-tight md:leading-none mb-2
      [text-shadow:3px_3px_#000] md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
    ">
      Scholarship Recipient
    </span>

    <span className="text-white text-xl md:text-3xl mb-4 [text-shadow:2px_2px_#000] md:[text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_3px_-3px_#000000,_-3px_3px_#000000]">
      Hispanic Heritage Scholarship Fund
    </span>

    <div className="text-white text-sm md:text-lg space-y-5 leading-relaxed">
      <p>I am one of the 50 selected to represent this non-profit representing Hispanic students in Central Florida.</p>
      <p>Attend workshops and events learning leadership skills and improve the community.</p>

      
    </div>
  </div>

  <Image 
    src={hhsfLogo} 
    alt="hhsf Logo" 
    className="w-32 h-32 md:w-70 md:h-70 bg-white self-center md:justify-right items-right" 
  /> 
</a>
        <span className="md:text-6xl text-4xl text-center md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">Awesome pictures of my experiences!! </span>
            <div className=" w-75 h-65 md:w-130 md:h-90 overflow-hidden flex items-center justify-center md:mb-4 md:-mt-7">
                   <Image 
                     src={currentTopImage.src} 
                     alt={currentTopImage.alt} 
                     
                     className="object-cover loading='lazy' w-75 h-65 md:w-130 md:h-90" 
                   />
                 </div>
                 <div className="flex md:space-x-45 space-x-10 items-center justify-center">
                   <button onClick={()=>updateImage(setTopImageIndex,topImageIndex,-1,aleListSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
                     <Image src={arrowIm} alt="Left Arrow" className="w-10 h-10 md:w-15 md:h-15 transform rotate-180"/>
                   </button>
                   <Image src={rockyIm} alt="Rocky Icon" className="w-15 h-10 md:w-20 md:h-15 hover:scale-110" />
                   <button onClick={()=>updateImage(setTopImageIndex,topImageIndex,1,aleListSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
                       <Image src={arrowIm} alt="Right Arrow" className="w-10 h-10 md:w-15 md:h-15"/>
                     
                   </button>
                 </div>

               
            
        </div>    </div>   ); }