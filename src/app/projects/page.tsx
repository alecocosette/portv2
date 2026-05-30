'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import alejandroMP from '../alemp.png';
import resume from '../resume.png';
import linkedin from '../linkedin.webp';
import github from '../github.png';
import { useState } from "react";
import arrow from '../arrownew.png';
import rockyAsset from '../rockyAsset-removebg-preview.png'
import proj1 from '../proj3.jpg';
import proj2 from './shellhacks1.webp';
import proj3 from './WINPROJL.jpg';
import proj4 from '../proj4.jpg';
import proj5 from '../proj1.jpg';
import proj6 from './workshopImage.jpg';
import noimage from '../snes.png';
import math from './mathworkshop.png';
import tks from './tkrevLogo.jpg';
import sfun from './sfunlogo.png';
import talktothehand from '../talktothehand.png';
import nextstep from '../nextstep.jpg';
import astrodog from '../astrodog.png';
import trickytreats from '../Screenshot 2025-12-22 010921.png';
import StarBackground from "../components/StarBackground";
import dylanVid from './dylanHigh.jpg';
import mathHigh from './mathWorkHigh.png';
export const anotherMarioFont = localFont({
  src:'../mario-party-hudson/dicecondesedlight.ttf',
  variable: '--font-anotherMario'
});
const mathHighLogo = mathHigh;
const mathLogo = math;
const tkrevLogo = tks;
const Trickytreats = trickytreats;
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
const dylanVidIm = dylanVid;
   const aleImageList = [{src: project3, alt: "2nd Place Win at Project Launch 2026"}, {src: project2, alt:"3rd Place Statefarm Challenge Shell Hacks 2025"}, {src: project6, alt:"Alejandro explaining in Math Workshop"}, {src: project4, alt: "Debugging in Shell Hacks"}, {src: project1, alt: "Hand Testing Talk to the Hand"}, {src: project5, alt: "Aftermath of Talk to the Hand"}];
   const aleListSize = aleImageList.length;
   const NavButtons = () => ( 
   <div className= "grid grid-cols-2 md:flex md:justify-center md:items-center gap-15 w-full  md:px-0">
    <Link href="/" passHref>  <button className="bg-red-600 hover:scale-105 text-center hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]">HOME</button></Link>
    <Link href="/projects" passHref><button className={'bg-amber-300 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000]  md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>PROJECTS</button> </Link>
     <Link href="/experience" passHref><button className={'bg-blue-500 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>EXPERIENCE</button>  </Link>
    <Link href="/about" passHref> <button className={' bg-emerald-400 hover:scale-105 text-white hover:bg-purple-700 font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000] '}>ABOUT</button></Link>
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
        
         <div className={`relative min-h-screen font-sans p-8 ${anotherMarioFont.className} w-full flex flex-col items-center`}>
                   <StarBackground/>
          <header className="flex justify-between items-center w-full mb-15"> 
          
          <NavButtons />
          </header> 
          
                   <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ type: "spring", stiffness: 100, damping: 15 }}
  className="flex flex-col md:flex-row md:space-x-25 md:mt-6 items-center justify-center"
>
    <motion.a 
        href="https://github.com/alecocosette/sFun" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 opacity-100 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-gray-400 md:mb-0 mb-6"
    >
        <Image src={sfun} alt="sFun Logo" className="w-70 h-40 bg-black "  /> 
        <span className=" text-white md:text-xl mt-3 text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">sFun (SNES Emulator)</span>  
        <span className=" text-white md:text-base items-start py-2 px-2">SNES Emulator based on the 65c816 CPU architecture, currently in development phase.</span> 
        <span className=" text-white md:text-base items-start px-2">Technologies: C++, C, CMake, SDL2, Assembly</span>
    </motion.a>

    <motion.a 
        href="https://www.roblox.com/games/104666495411460/TKs-Revenge" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-orange-700 md:mb-0 mb-6"
    >
        <Image src={tkrevLogo} alt="TK's Revenge Logo" className="w-70 h-40 bg-black "  /> 
        <span className=" text-white md:text-xl text-lg items-start px-2 mt-3 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">TK's Revenge </span>  
        <span className=" text-white items-start  py-2 px-2">Roblox dungeon game based on Knight Hacks, meant for getting children into software development.</span> 
        <span className=" text-white items-start  px-2">Technologies: Roblox Engine, LuaU</span>
        <span className=" text-amber-200 text-xl items-center self-center [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]"> Winner </span>
    </motion.a>

    <motion.a 
        href="https://devpost.com/software/next-step-cme06a" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-blue-900 md:mb-0 mb-6"
    >
        <Image src={nextStep} alt="Next Step Logo" className="w-70 h-40 bg-black "  /> 
        <span className=" text-white mt-3 md:text-xl text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Next Step </span>  
        <span className=" text-white items-start  py-2 px-2">AI integrated voice agent used to test knowledge of insurances.</span> 
        <span className=" text-white items-start  px-2">Technologies: Python, TypeScript, Vapi, React, Next.js, Tailwind </span>
        <span className=" text-amber-200 text-xl items-center self-center [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]"> Winner </span>
    </motion.a>
</motion.div>  

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
  className="flex flex-col md:flex-row md:space-x-25 md:mt-8 items-center justify-center"
>
    <motion.a 
        href="https://devpost.com/software/talk-to-the-hand-lqouas" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-emerald-500 md:mb-0 mb-6" 
    >
        <Image src={talkToTheHand} alt="TTTH Logo" className="w-70 h-40 bg-black"  /> 
        <span className=" text-white md:text-xl mt-3 text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Talk to the Hand</span> 
        <span className=" text-white items-start  py-2 px-2">Computer Vision 3D Shooter game made during Knight Hacks VIII </span> 
        <span className=" text-white items-start  px-2">Technologies: C#, Unity, Python, Mediapipe, OpenCV</span> 
    </motion.a>

    <motion.a 
        href="https://alecoco.itch.io/astrodog" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-blue-600 md:mb-0 mb-6"
    >
        <Image src={astroDog} alt="AstroDog Logo" className="w-70 h-40 bg-black "  /> 
        <span className=" text-white md:text-xl text-lg px-2 mt-3 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">AstroDog </span> 
        <span className=" text-white items-start  py-2 px-2">2D Platformer game made in Unity inspired on my dog for Game Dev Knights' Space Jam</span> 
        <span className=" text-white items-start  px-2">Technologies: C#, Unity</span> 
    </motion.a>

    <motion.a 
        href="https://alecoco.itch.io/tricky-treats" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-purple-800 md:mb-0 mb-6"
    >
        <Image src={Trickytreats} alt="Github Logo" className="w-70 h-40 bg-black "  /> 
        <span className=" text-white md:text-xl text-lg items-start px-2 mt-3 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Tricky Treats</span> 
        <span className=" text-white items-start  py-2 px-2">2D Platformer, First game I have ever made by myself for Halloween</span> 
        <span className=" text-white items-start  px-2">Technologies: C#, Unity</span> 
    </motion.a>
</motion.div>  

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
  className="flex flex-col md:flex-row md:space-x-25 md:mt-8 items-center justify-center"
>
    <motion.a 
        href="https://github.com/GraphicsProgrammingKnights/Workshops/blob/main/Spring%2026/Math%20for%20Making%20Cool%20Things%20Appear%20on%20the%20Screen%20Workshop/MATH%20WORKSHOP.pdf" target="_blank" rel="noopener noreferrer" 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="md:opacity-85 hover:opacity-100 rounded-3xl overflow-hidden flex flex-col items-start space-x-4 w-70 h-85 bg-pink-800 md:mb-0 mb-6" 
    >
        <Image src={mathLogo} alt="Math Workshop Logo" className="w-70 h-40 bg-black"  /> 
        <span className=" text-white md:text-xl mt-3 text-lg items-start px-2 [text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_2px_-2px_#000000,_-2px_2px_#000000]">Math for Making Cool Things Appear on the Screen Workshop</span> 
        <span className=" text-white items-start  py-2 px-2">Workshop diving into how ML, Video Games and Computer Graphics apply Mathematics with examples. </span> 
        <span className=" text-white items-start  px-2"></span> 
    </motion.a>
</motion.div>  

<div className="flex flex-col items-center justify-center">
    <motion.span 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="md:text-6xl text-4xl text-center md:mt-10 md:mb-6 md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"
    >
      Project Highlights 
    </motion.span>

    <div className="flex flex-col space-y-20 mt-6 items-center justify-center">
        <motion.a 
            href="https://www.instagram.com/reel/DXcXfJBhnuy/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col-reverse md:flex-row items-center md:items-start w-[95vw] md:w-full md:max-w-6xl h-auto md:h-80 md:opacity-75 hover:opacity-100 bg-purple-800 rounded-2xl p-4 md:px-4 md:py-6"
        >
            <div className="flex flex-col flex-1 mt-4 md:mt-0">
                <span className="text-white text-3xl md:text-7xl leading-tight md:leading-none mb-2 [text-shadow:3px_3px_#000] md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
                    TK's Revenge interview on dvidal.dev's Instagram
                </span>
                <span className="text-white text-xl md:text-3xl mb-4 [text-shadow:2px_2px_#000] md:[text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_3px_-3px_#000000,_-3px_3px_#000000]">
                    Platform: Instagram
                </span>
                <div className="text-white text-sm md:text-lg space-y-2 leading-relaxed">
                    <p>Team interview regarding the inspiration and technical challenges behind TK's Revenge.</p>
                    <p>Introduction for children interested in Game Development and how to get started.</p>
                </div>
            </div>
            <Image src={dylanVidIm} alt="Project Instagram Dylan Vidal" className="w-32 h-32 md:w-70 md:h-70 rounded-xl bg-purple-500 self-center md:justify-right items-right" /> 
        </motion.a>

        <motion.a 
            href="https://youtu.be/TCcqIZyO6hg?si=CAmvbK0iJw3_EefT" target="_blank" rel="noopener noreferrer" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="flex flex-col-reverse md:flex-row  md:items-start w-[95vw] md:w-full md:max-w-6xl h-auto md:h-80 md:opacity-75 hover:opacity-100 bg-red-900 rounded-2xl p-4 md:px-4 md:py-6"
        >
            <div className="flex flex-col flex-1 mt-4 md:mt-0">
                <span className="text-white text-3xl md:text-7xl leading-tight md:leading-none mb-2 [text-shadow:3px_3px_#000] md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
                    Graphics Programming Knights' Math Workshop
                </span>
                <span className="text-white text-xl md:text-3xl mb-4 [text-shadow:2px_2px_#000] md:[text-shadow:2px_2px_#000000,_-2px_-2px_#000000,_3px_-3px_#000000,_-3px_3px_#000000]">
                    Platform: YouTube
                </span>
                <div className="text-white text-sm md:text-lg space-y-4 leading-relaxed">
                    <p>Exploring how ML, Video Games and Computer Graphics utilize Math in their different use cases.</p>
                    <p>Full workshop presentation available on YouTube.</p>
                </div>
            </div>
            <Image src={mathHighLogo} alt="Math Workshop GPK Logo" className="w-32 h-32 md:w-80 md:h-70 rounded-xl bg-black self-center md:justify-right items-right" /> 
        </motion.a>
    </div>

    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="md:text-6xl text-4xl text-center md:mt-10 md:mb-6 md:[text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"
    >
      Cool pictures during my projects!! 
    </motion.span>
                                
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="w-75 h-65 md:w-130 md:h-90 overflow-hidden flex items-center justify-center md:mb-4 mb-2"
    >
        <Image 
        src={currentTopImage.src} 
        alt={currentTopImage.alt}
        priority={topImageIndex === 0}
        placeholder="blur"
        quality={85}
         className="object-cover rounded-4xl w-75 h-65 md:w-130 md:h-90" />
    </motion.div>

    <div className="flex md:space-x-45 space-x-10 items-center justify-center mb-10">
        <motion.button 
          onClick={()=>updateImage(setTopImageIndex,topImageIndex,-1,aleListSize)} 
          whileHover={{ scale: 1.1, color: "#ef4444" }} 
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl"
        >
            <Image src={arrowIm} alt="Left Arrow" className="w-10 h-10 md:w-15 md:h-15 transform rotate-180"/>
        </motion.button>
        
        <motion.div 
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image src={rockyIm} alt="Rocky Icon" className="w-15 h-10 md:w-20 md:h-15"/>
        </motion.div>
        
        <motion.button 
          onClick={()=>updateImage(setTopImageIndex,topImageIndex,1,aleListSize)} 
          whileHover={{ scale: 1.1, color: "#ef4444" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl"
        >
            <Image src={arrowIm} alt="Right Arrow" className="w-10 h-10 md:w-15 md:h-15"/>                                   
        </motion.button>
    </div>
</div> </div> 
         ); 
       }