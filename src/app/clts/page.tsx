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
        <span>Cover Letter </span>

        
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
          
<div className="text-lg md:text-2xl bg-[#0d0d26] text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000] p-10 leading-relaxed whitespace-pre-line">
2/27/26<br/>
To whom it may concern,<br/>
I am excited to apply for the Assistant Scholar position at Limbitless Solutions for the the Game
Development or Computer Science teams. I am currently a sophomore in UCF and passionate
about game development and systems, I am eager for the opportunity to contribute to a company
that continues to improve the lives of children across the country with the uniqueness and creativity
that arms convey while continuing to grow as a developer and a person in my career. I believe I
would be a strong fit for this role due to my extensive experience with Unity and C#, extending
through a variety of games, alongside other languages such as C++ as well as leadership positions
that reflect my initiative to learn and collaborate with diverse teams. <br/>
When I first got to know more about the company, the impact these arms have had interested me
due to its emphasis on building a thoughtful experience using games as a tool for learning how to
correctly assess the usage of the arm. This is something I want to implement my knowledge and
what I would learn when being on the team. I want to mix experience such as me developing a
Computer Vision model in Unity in order to shoot from the hand in my game Talk to the Hand, or
implementing new features in my adventure of studying how Unreal Engine works, a skill that I see
Limbitless implementing each day. I am able to break down these complex systems into manageable
components by understanding where something can be improved off by trying it repeatedly and
with purpose. Additionally, my work developing an emulator in C++ has strengthened my
understanding of object-oriented programming and writing maintainable, well-structured code. <br/>
As I mentioned, I am developing an SNES emulator in C++ and SDL2 to strengthen my systems
thinking and my ability to pay attention to detail. Modeling CPU behavior, addressing modes, and
low-level memory mapping has sharpened my ability to reason about performance, correctness, and
edge cases. Alongside that, I am currently learning Computer Graphics API’s that deepen my love
for creating more visual elements to the interaction, such as OpenGL. I am comfortable using
modern development tools, and I enjoy collaborating with others during hackathons while also
taking full ownership of individual technical tasks in order to create something meaningful to the
world. Alongside that, my skills go beyond projects, as my desire to keep helping communities such
as Graphics Programming Knights and Knight Hacks in soft skills reflects my commitment to
improve above else. <br/>
I love to take initiative, and I believe that this makes a significant difference in an environment such
as Limbitless, where it is important to learn and do as you go. I can quickly adapt to a variety of
situations while also being responsible for myself and my team. I would be more than happy to
bring these qualities to Limbitless Solutions as a Assistant Scholar and continue to give back.
Thank you for your time and consideration, and I look forward to the opportunity to discuss my
application further. <br/>
Best regards,<br/>
Alejandro Jaimes
</div>


          
        
        </div>

        
      </div>
     
           
   </main> 
  
                     </div>   ); }