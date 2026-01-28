'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import localFont from 'next/font/local'
import { useState } from "react";
import linkedin from '../linkedin.webp';
import github from '../github.png';
import arrow from '../arrownew.png';
import ale1 from '../IMG_0924.jpg';
import ale2 from '../IMG_0925.jpg';
import ale3 from '../IMG_0926.jpg';
import ale4 from '../IMG_0927.jpg';
import ale5 from '../IMG_0929.jpg';
import ale7 from '../IMG_9927.webp';
import ale10 from '../unnamedale2.jpg';
import rockyAsset from '../rockyAsset-removebg-preview.png'
import bs1 from '../aboutRow21.jpg';
import bs2 from '../aboutRow22.jpg';
import bs4 from '../aboutRow24.jpg';
import bs5 from '../aboutRow25.jpg';
import bs6 from '../aboutRow26.jpg';
import bs7 from '../aboutRow27.jpg';
import bs8 from '../aboutRow28.jpg';
import community1 from '../community1 (1).jpg';
import community2 from '../community1 (2).jpg';
import community3 from '../community1 (3).jpg';
import community4 from '../IMG_1094.jpg';
import community5 from '../IMG_1095.jpg';
import community6 from '../zuliafc.jpg';

export const anotherMarioFont = localFont({
  src:'../mario-party-hudson/dicecondesedlight.ttf',
  variable: '--font-anotherMario'
});
const ale7Im = ale7;
const rockyIm = rockyAsset;
const ale1Im = ale1;
const ale2Im = ale2;
const ale3Im = ale3;  
const ale4Im = ale4;
const ale5Im = ale5;

const ale10Im = ale10;
const bs1Im = bs1;
const bs2Im = bs2;
const bs4Im = bs4;
const bs5Im = bs5;
const bs6Im = bs6;
const bs7Im = bs7;
const bs8Im = bs8;
const community1Im = community1;
const community2Im = community2;
const community3Im = community3;
const community4Im = community4;
const community5Im = community5;
const community6Im = community6;
const arrowIm = arrow;
 const GithubLogo = github;
  const LinkLogo = linkedin;
   const aleImageList = [{src:ale10Im, alt:""},{src:ale7Im, alt:""},{src: ale1Im, alt: "me"}, {src: ale2Im, alt:""}, {src: ale3Im, alt:""}, {src: ale4Im, alt: ""},{src: ale5Im, alt: ""}];
   const aleListSize = aleImageList.length;
   const BSList = [{src: bs5Im, alt: ""},{src: bs2Im, alt: "me"}, {src: bs1Im, alt:""}, {src: bs4Im, alt: ""}, {src: bs6Im, alt: ""}, {src: bs7Im, alt: ""}, {src: bs8Im, alt: ""}];
   const BSSize = BSList.length;
   const communityList = [{src: community3Im, alt: ""},{src: community5Im, alt: ""},{src: community1Im, alt: ""}, {src: community4Im, alt: ""}, {src: community2Im, alt: ""}, {src: community6Im, alt: ""}];
   const communitySize = communityList.length;
   const NavButtons = () => ( 
   <div className= "grid grid-cols-2 md:flex md:justify-center md:items-center gap-15 w-full  md:px-0">
    <Link href="/" passHref>  <button className="bg-red-600 hover:scale-105 text-center hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]">HOME</button></Link>
    <Link href="/projects" passHref><button className={'bg-amber-300 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000]  md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>PROJECTS</button> </Link>
     <Link href="/experience" passHref><button className={'bg-blue-500 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>EXPERIENCE</button>  </Link>
    <Link href="/about" passHref> <button className={' bg-emerald-400 hover:scale-105 text-white hover:bg-purple-700 font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-15 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000] '}>ABOUT</button></Link>
    </div>
    ); 



     export default function AboutPage(){ 
        const [topImageIndex, setTopImageIndex] = useState(0);
        const [bottomImageIndex, setBottomImageIndex] = useState(0);
        const [communityImageIndex, setCommunityImageIndex] = useState(0);
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
        const currentBottomImage = BSList[bottomImageIndex];
        const currentCommunityImage = communityList[communityImageIndex];
      return (
         <div className={`min-h-screen font-sans p-8 ${anotherMarioFont.className} bg-cover bg-gray-900 no-scrollbar`}
                 style={{backgroundImage: 'url(/StarTile_SpaceJam.png)',backgroundAttachment: 'fixed', backgroundSize:'115% 115%', imageRendering: 'pixelated'}} >
         
          <header className="flex justify-between items-center w-full  "> 
          
          <NavButtons />
          </header> 


          <main>
         
         <div className="flex flex-col justify-between md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4 md:p-27">
          <p className="text:lg md:text-3xl bg-gray-900  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
            Hey, I am Alejandro Jaimes, a Venezuelan student at the University of Central Florida pursuing a Bachelor's degree in Computer Science.
            Since I was a kid, I wondered how can I make cool things appear on the screen, now more than ever I can accomplish those things my kid self had in mind.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center p-4">
          <div className=" w-100 h-80 overflow-hidden flex items-center justify-center mb-2">
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
      </div>
      <div className="flex flex-col justify-between md:flex-row items-center">
        
        
        

       
        <div className="w-full md:w-1/2 flex flex-col items-center p-4">
          <div className=" w-100 h-80 overflow-hidden flex items-center justify-center mb-2">
            <Image 
              src={currentBottomImage.src} 
              alt={currentBottomImage.alt} 
             
              className="object-cover loading='lazy'" 
            />
          </div>
          <div className="flex md:space-x-30 space-x-15">
            <button onClick={()=>updateImage(setBottomImageIndex,bottomImageIndex,-1,BSSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
              <Image src={arrowIm} alt="Left Arrow" className="w-15 md:w-10 md:h-10 h-12 transform rotate-180"/>
            </button>
            <Image src={rockyIm} alt="Rocky Icon" className="md:w-15 md:h-10 w-18 h-12 hover:scale-110"/>
            <button onClick={()=>updateImage(setBottomImageIndex,bottomImageIndex,1,BSSize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
                <Image src={arrowIm} alt="Right Arrow" className="w-15 md:w-10 md:h-10 h-12"/>
              
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-27">
          <p className="text:lg md:text-3xl text-center bg-gray-900 text-white [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
            Beyond making software, I am a fan of my national football team and for Real Madrid CF and try to watch every game possible that I can.
            I also enjoy watching speedrunning videos of different games, and watch any anime when I can. Also if you can already tell, Toad is my favorite character ever.
          </p>
        </div>
      </div>
         <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
         
           </div>
           <div className="flex flex-col justify-between md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4 md:p-27">
          <p className="text:lg md:text-3xl bg-gray-900  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
          The biggest reason I love community involvement, is that it is my way to reciprocate all the love and support I have received from
          the people that are inside them whether it be through programming, shared background or common interests. I love giving back whenever I can.



         </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center p-4">
          <div className=" w-100 h-80 overflow-hidden flex items-center justify-center mb-2">
            <Image 
              src={currentCommunityImage.src} 
              alt={currentCommunityImage.alt} 
              
              className="object-cover w-full h-full loading='lazy'" 
            />
          </div>
          <div className="flex space-x-15 md:space-x-30">
            <button onClick={()=>updateImage(setCommunityImageIndex,communityImageIndex,-1,communitySize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
              <Image src={arrowIm} alt="Left Arrow" className="w-15 md:w-10 md:h-10 h-12 transform rotate-180"/>
            </button>
            <Image src={rockyIm} alt="Rocky Icon" className="md:w-15 md:h-10 w-18 h-12 hover:scale-110"/>
            <button onClick={()=>updateImage(setCommunityImageIndex,communityImageIndex,1,communitySize)} className="text-4xl hover:text-red-500 transition hover:scale-125">
                <Image src={arrowIm} alt="Right Arrow" className="w-15 md:w-10 md:h-10 h-12"/>
              
            </button>
          </div>
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