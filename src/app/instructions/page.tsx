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
        <span>Instructions </span>

        
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
            This assignment was meant to be able to teach something to someone who has no-experience in the topic. It is designed to encourage people to follow instructions and see what they can to do so. I made mine about how to create a background in webgl and place it in your website.
          </p>
          
        </div>
        <div className="w-full md:w-7/12 mt-5 p-4 md:p-10">
          <p className="text:lg md:text-2xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
Making a Cool High-Performance Background from the
GPU to a Website using Nextjs and WebGL<br/>
Why the GPU instead of a static image or video?
<br/>
Depending on the type of background, using one that is programmed using the GPU
components can allow for the performance be placed on it instead of solely relying on the
CPU and some images or videos are not well supported when being placed on the website.
Other than performance related issues, this is a great way to begin understanding
computer graphics and low-level programming while still being a web developer at heart. <br/>
Pre-Requisites<br/>
1. Have an IDE installed (recommended for this should be VSCode
https://code.visualstudio.com/download)<br/>
2. Installed Node.js (Use this https://nodejs.org/en/download)<br/>
3. Installed Next.js (App router)<br/>
4. Some knowledge of shaders/graphics
programming(https://youtu.be/KNyAF26TrLA?si=9c6VNvM1vLf2Hd2R and
https://learnopengl.com/Getting-started/Shaders )<br/>
Cautions<br/>
1. While it is high performing to use this, constant flickering to the stars can cause
drainage to the battery.<br/>
2. Remain accessible to everyone seeing your site, accounting for mobile or lower end
computers.<br/>
3. Use fallback images for the background if the caution above is met.<br/>
4. Continue learning some computer graphics to see the logic in the code.<br/>
Quick Start<br/>
1. Use this command (npx create-next-app@latest) in the terminal in order to get the
Next.js framework in order to get React features from Node.js and begin working on
the instructions given here to begin developing website. <br/>
2. In the component folders create a file to anything you like, for the purpose of this, it
is being named as Background.tsx and remember to put the “use client”. <br/>
Steps for Constructing Background<br/>
1. Begin modifying the background component in here with similar to OpenGL
functions, or shader code.<br/>
2. Start by importing the useEƯect and useRef hook from React that will allow us to
create cool things using the canvas.<br/>
3. Check if webgl can be used as a context in the browser in the useEƯect hook as this
will allow the communication between the browser and the user’s GPU.<br/>
4. Define the Geometry of the screen using a Quad (two traingles places together) and
an array that consists of the space going from -1 to 1, then creating a buƯer.<br/>
5. Then attribute each position to where the shader lives in the browser and what exact
data types must be placed.<br/>
6. Begin creating the rendering portion and use the device pixel ratio to ensure that it is
displayed equally on every screen and make sure the viewport is the canvas desired
width and height.<br/>
7. You can now place a color in the shader. I am choosing this blue below. You can use
a black color or any other color you know<br/>
a. Reminder of the RGB wheel of colors, by having it set for example to only
blue, the values would be (0, 0, 1). Some of the code:
RGB value (0.05, 0.05, 0.15)<br/>
8. Return the component, deleting any buƯer and any events.<br/>
9. Apply any CSS formatting that may be needed.<br/>
10. Apply the component to right below the first div returning the website<br/>
11. Run npm run dev in order to get access to localhost<br/>
12. You have a background on the website!<br/>
Results (Part One)<br/>
After running the run dev command for my terminal, this is how it would look like:
*Other items other than the background are part of my own website and are not part of the final product*<br/>
Adding Stars (Fun Part!)<br/>
Now that we have the color background, this should not be the only thing that the shader
should do as this can just be using a picture of a blue background. We are implementing
stars so that they move at certain times, so they feel random. I do want to emphasize why
we are doing this program though.<br/>
How software works it is that it is using the CPU’s resources unless you explicitly tell the
machine to not do that, this is because using the GPU (the piece of hardware that the
shader runs on) uses better resources in order to render things like that and permits an
oƯload for the CPU to focus on the inputs or outputs and overall what is happening to the
system.<br/>
Steps for Flickering Stars<br/>
1. Begin by creating the Vertex Shader to have every pixel set<br/>
2. Create the fragment shader<br/>
a. Use the time and resolution of the screen at your disposition<br/>
b. Create a hash function where it allows you to place every dot as a pixel star in <br/>
a pseudo random place to appear as so.<br/>
c. In the main function of this, create some variables and the seed for that
specific possibility.<br/>
d. Use the time with each star in order to make sure each star appears
diƯerently.<br/>
e. Create the stars by having the same color as the background, so that
whenever they flick oƯ, it is a seamless transition.<br/>
f. Use a cosine function to make the illusion of moving at the specified time the
machine is one.<br/>
g. Add the vector as white to the current color if the pixel is marked as pixel
when the time is correct.<br/>
Here is the code for both<br/>
3. Add these shaders to the original part of the code<br/>
Results (Part Two)<br/>
*Other items other than the background are part of my own website and are not part of the final product*<br/>
Youtube link for video: https://youtu.be/DHVeVN2CksQ<br/>
This is how the final product would look like when putting the flickering eƯect of the stars<br/>
Glossary:<br/>
GPU: Graphics Processing Unit<br/>
GLSL: C-like language used to create shaders<br/>
RGB: Red, Green and Blue.<br/>
Shader: Program that allows for the visualization of models and pixels in real time.<br/>
Vertex Shader: Where the objects are at.<br/>
Fragment Shader: How the objects are visualized.<br/>          </p>
          
        </div>
        
      </div>
     
           
   </main> 
       </div>   ); }