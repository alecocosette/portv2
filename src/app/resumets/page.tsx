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
        <span>Resume </span>

        
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
         
        <div className="w-full md:w-8/12 p-4 md:p-10">
          <p className="text:lg md:text-7xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
        Alejandro Jaimes 
        </p>
        <p className="text:lg md:text-2xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
            alejaimes.dev | linkedin.com/in/alejandro-jaimes-coco | github.com/alecocosette
            </p>
                        <p className="text:lg md:text-5xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Education
         </p>
            <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

University of Central Florida Orlando, FL
Bachelor of Science in Computer Science May 2028            </p>
<p className="text:lg md:text-5xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Experience            </p>

<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
President Apr 2026 - Present
Graphics Programming Knights Orlando, FL          </p>

<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Established Graphics Programming Knights, a non-profit student organization, growing membership to 165+
students through programming workshops, learning activities and community socials.        </p>
<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Organized the first community-wide Render Jam competition resulting in 40+ participants and 5 projects.       </p>
<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Deliver two workshops per semester on pathways into graphics programming, covering topics such as essential
mathematics, game development engines, and GPU programming with attendance of 20+ students.    </p>





<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Expanded club reach by 40%, establishing partnerships to have workshops and hackathons with 3 organizations.   </p>
<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

Outreach Board Jan 2026 - Present
Knight Hacks Orlando, FL   </p>
<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Boosted online community engagement online by 57% with strategic content creation and event awareness.   </p>
<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Increased Knight Hacks’ activity averaging 5k+ views on Instagram Reels by editing and participating in videos.   </p>
<p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Expanded event attendance by 15% compared to previous semesters through targeted outreach campaigns on
social media and speaking to the public, increasing participation with an average of 40+ people per meeting.   </p>

<p className="text:lg md:text-5xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Projects  
 </p>

 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
sFun (SNES emulator) | C++, C, CMake, Assembly, SDL2  
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Designed and implemented a 65c816 CPU emulator supporting, dynamic register width handling using C++.
  
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Built an extensible opcode dispatch system using function pointer tables and implemented core CPU instructions (LDA, REP/SEP, branching, stack operations, JSR/RTS) with correct flag behavior.

  
 </p>

 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Developed a memory subsystem for SNES RAM/ROM access, enabling instruction fetch, decoding, and execution.
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Engineered robust control flow correctness for relative branching, subroutine calls, and stack-based return handling
ensuring 100% correctness on test cases. 
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
TK’s Revenge | LuaU, Roblox Engine
 
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• 2nd Place winner at Knight Hacks’ Project Launch competition out of 35 projects and 150+ participants.
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Winner of Public Vote with over 90+ votes, averaging a playthrough of 11 minutes and reached 130+ visits.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Developed AI Pathfinding scripts in LuaU for enemies to attack players, making constant interaction possible.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Created different movement techniques for 2 different classes to use, ensuring diversified range of options.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Next Step | React, Tailwind, Next.js, TypeScript, Python, Flask, Vapi
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• 3rd place winner of State Farm’s Sponsor Challenge at Shell Hacks 2025 out of 50 projects submitted.
 
 </p>
 <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Created an AI voice agent that delivers interactive insurance quizzes with real-time scoring (0-100) and
personalized feedback across 3 insurance categories.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Implemented backend services to process and structure conversational data generating dynamic agent responses,
reducing response time by 66% using Python, integrated with the Vapi API.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Talk to the Hand | C#, Python, Unity, OpenCV, Mediapipe
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Developed in Knight Hacks VIII a 3D shooter game with integrated computer vision hand-tracking system using
OpenCV and Mediapipe, enabling gesture-based gameplay controls.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 

• Optimized hand gesture recognition improving directional accuracy by 20% using mathematical equations.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Programmed a shield mechanic that reduced Game Overs by 30%, increasing player engagement by 10%.
 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
• Implemented 4 enemy behaviors and target interactions using Unity’s physics and scripting APIs.<br/>
 
 </p>
  <p className="text:lg md:text-5xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Technical Skills 
 </p>
  <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]"> 
Languages: C, C++, C#, Python, HTML, CSS, JavaScript, TypeScript, Assembly, Java
 
 </p>
        <p className="text:lg md:text-xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">

Frameworks/Libraries: Unity, Next.js, Node.js, Tailwind CSS, React, Flask, Unreal Engine, Three.js, OpenCV,
Mediapipe, Vapi, SLD2, OpenGL, CUDA, CMake

          </p>
        
        </div>

        
      </div>
     
           
   </main> 
  
                     </div>   ); }