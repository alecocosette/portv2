'use client';
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import alejandroMP from '../alemp.png';
import resume from '../resume.png';
import linkedin from '../linkedin.webp';
import github from '../github.png';
import { useState } from "react";
import arrow from '../arrow.webp';
import anotherToad from '../ToadIcon_MarioPartyDS.png'
import rockyAsset from '../rockyAsset-removebg-preview.png'
import proj1 from '../proj1.jpg';
import proj2 from '../proj2.jpg';
import proj3 from '../proj3.jpg';
import proj4 from '../proj4.jpg';
import proj5 from '../proj5.jpg';
import proj6 from '../proj6.jpg';
import noimage from '../noimage.png';
import talktothehand from '../talktothehand.png';
import nextstep from '../nextstep.jpg';
import astrodog from '../astrodog.png';

export const marioFont = localFont({
  src: '../mario-party-hudson/Mario-Party-Hudson-Font.ttf',
  variable: '--font-mario'
})
export const anotherMarioFont = localFont({
  src:'../mario-party-hudson/dicecondesedlight.ttf',
  variable: '--font-anotherMario'
});
const noImage = noimage;
const talkToTheHand = talktothehand;
const nextStep = nextstep;
const astroDog = astrodog;
const project1 = proj1;
const project2 = proj2;
const project3 = proj3;
const project4 = proj4;
const project5 = proj5;
const project6 = proj6;
const rockyIm = rockyAsset;
const arrowIm = arrow;
const anotherToadIm = anotherToad;
const toad = 'https://placehold.co/100x100/000000/FFFFFF?text=Toad';
 const alejandro = alejandroMP;
 const GithubLogo = github;
  const resumeIm = resume 
  const LinkLogo = linkedin;
   const capymonkey = 'https://placehold.co/400x250/000000/FFFFFF?text=Video+Content+Placeholder';
   const aleImageList = [{src: project2, alt: "me"}, {src: project3, alt:""}, {src: project6, alt:""}, {src: project4, alt: ""}, {src: project1, alt: ""}, {src: project5, alt: ""}];
   const aleListSize = aleImageList.length;
    const NavButtons = () => ( 
  // The 'flex' class makes the buttons horizontal. // The 'space-x-4' class handles the padding/spacing between the buttons.
   <div className= "grid grid-cols-2 md:flex md:space-x-13 w-full md:w-auto px-1 md:px-0">
    <Link href="/" passHref>  <button className="bg-red-600 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]">HOME</button></Link>
    <Link href="/about" passHref><button className={'bg-amber-300 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000]  md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>ABOUT</button> </Link>
     <Link href="/experience" passHref><button className={'bg-blue-500 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>EXPERIENCE</button>  </Link>
    <Link href="/projects" passHref> <button className={' bg-emerald-400 hover:scale-105 text-white hover:bg-purple-700 font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000] '}>PROJECTS</button></Link>
    </div> 
    ); 
    
  
    const ProfileSection = () => (
    <div className="flex flex-col items-center space-y-4 text-white text-right"> 
    <h2 className={`
      text-[150px] 
      font-extrabold 
      font-mario 
      leading-none 
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>Alejandro</h2>
        <h2 className={`
      text-[150px] 
      font-extrabold 
      font-mario 
      leading-none 
      -mt-16
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>Jaimes</h2>

    </div> 
     ); 
     export default function Projects(){ 
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
         {
          /* 💥 FIX: Header Bar with Name and Buttons on one line The 'flex justify-between items-center' classes achieve the requested layout. */} 
          <header className="flex justify-between items-center w-full mb-15"> 
          
          {/* Buttons on the right, spaced using NavButtons' space-x-4 */}
          <NavButtons />
          </header> {/* --- Main Content Section --- */} 
          
                    <div className="flex flex-col md:flex-row md:space-x-25 md:mt-6 items-center justify-center">
            
            <a href="" target="_blank" rel="noopener noreferrer" 
            className="opacity-100 hover:opacity-100 transition flex flex-col items-start space-x-4 w-70 h-75 bg-gray-400 md:mb-0 mb-6">
            <Image src={noImage} alt="sFun Logo" className="w-70 h-35 bg-black "  /> <span className=" text-white md:text-xl text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">sFun (Dec 2025-Present)</span>  
        <span className=" text-white md:text-base items-start py-2 px-2">SNES Emulator, more details coming</span> 
            <span className=" text-white md:text-base items-start px-2">Technologies: C++, SDL2</span>
        </a>
        <a href="https://www.github.com/alecocosette" target="_blank" rel="noopener noreferrer" 
            className="md:opacity-85 hover:opacity-100  hover:scale-105 transition flex flex-col items-start space-x-4 w-70 h-75 bg-emerald-400 md:mb-0 mb-6" >
              
            <Image src={talkToTheHand} alt="TTTH Logo" className="w-70 h-35 bg-black"  /> <span className=" text-white md:text-xl text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Talk to the Hand (Oct 2025)</span> 
            <span className=" text-white items-start  py-2 px-2">Computer Vision 3D Shooter game made during Knight Hacks VIII </span> 
            <span className=" text-white items-start  px-2">Technologies: C#, Unity, Python, Mediapipe, OpenCV</span> 
        </a>
        <a href="https://www.github.com/alecocosette" target="_blank" rel="noopener noreferrer" 
            className="md:opacity-85 hover:opacity-100 hover:scale-105 transition flex flex-col items-start space-x-4 w-70 h-75 bg-blue-900 md:mb-0 mb-6">
            <Image src={nextStep} alt="Next Step Logo" className="w-70 h-35 bg-black "  /> <span className=" text-white md:text-xl text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Next Step (Sep 2025)</span>  
            <span className=" text-white items-start  py-1 px-2">AI Chatbot with voice used to test knowledge of insurances</span> 
            <span className=" text-white items-start  px-2">Technologies: Python, TypeScript, VAPI, React, Next.js</span>
            <span className=" text-amber-200 text-xl items-center self-center [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]"> Winner </span>
        </a>

           

           </div>  
       <div className="flex flex-col md:flex-row md:space-x-25 md:mt-6 items-center justify-center">
          
          <a href="https://www.github.com/alecocosette" target="_blank" rel="noopener noreferrer" 
            className="md:opacity-85 hover:opacity-100 hover:scale-105 transition flex flex-col items-start space-x-4 w-70 h-75 bg-blue-600 md:mb-0 mb-6">
              
            <Image src={astroDog} alt="AstroDog Logo" className="w-70 h-35 bg-black "  /> <span className=" text-white md:text-xl text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">AstroDog (Sep 2025)</span> 
            <span className=" text-white items-start  py-2 px-2">2D Platformer game made in Unity inspired on my dog for Game Dev Knights' Space Jam</span> 
            <span className=" text-white items-start  px-2">Technologies: C#, Unity</span> 
        </a>
        <a href="https://www.github.com/alecocosette" target="_blank" rel="noopener noreferrer" 
            className="md:opacity-85 hover:opacity-100  hover:scale-105 transition flex flex-col items-start space-x-4 w-70 h-75 bg-purple-800 md:mb-0 mb-6">
              
            <Image src={GithubLogo} alt="Github Logo" className="w-70 h-35 bg-black "  /> <span className=" text-white md:text-xl text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Tricky Treats (Oct 2024)</span> 
            <span className=" text-white items-start  py-2 px-2">2D Platformer, First game I have ever made by myself for Halloween</span> 
            <span className=" text-white items-start  px-2">Technologies: C#, Unity</span> 
        </a>

          </div>  
       <div className="flex flex-col items-center justify-center">
                               <span className="md:text-6xl text-4xl text-center md:mt-3 md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">Cool pictures during my projects!! </span>
                               
                                           <div className=" w-75 h-65 md:w-130 md:h-90 overflow-hidden flex items-center justify-center md:mb-4 mb-2">
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
                                                  <Image src={rockyIm} alt="Rocky Icon" className="w-15 h-10 md:w-20 md:h-15 hover:rotate-x-180"/>
                                                  <button onClick={()=>updateImage(setTopImageIndex,topImageIndex,1,aleListSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
                                                      <Image src={arrowIm} alt="Right Arrow" className="w-10 h-10 md:w-15 md:h-15"/>
                                                    
                                                  </button>
                                                </div>
        </div> </div> 
         ); 
       }