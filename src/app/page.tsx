'use client';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import alejandroMP from './alemp.png';
import resume from './resume.png';
import linkedin from './linkedin.webp';
import github from './github.png';
//test
export const marioFont = localFont({
  src: './mario-party-hudson/Mario-Party-Hudson-Font.ttf',
  variable: '--font-mario'
})
export const anotherMarioFont = localFont({
  src:'./mario-party-hudson/dicecondesedlight.ttf',
  variable: '--font-anotherMario'
});
const Character = dynamic(() => import('./components/Alejandro'), { 
  ssr: false, 
  loading: () => <div className="w-full h-[300px]" />
});
 const alejandro = alejandroMP;
 const GithubLogo = github;
  const resumeIm = resume 
  const LinkLogo = linkedin;
    const NavButtons = () => ( 
   <div className= "grid grid-cols-2 md:flex md:space-x-13 w-full md:w-auto px-1 md:px-0">
    <Link href="/" passHref>  <button className="bg-red-600 hover:scale-105 text-center hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]">HOME</button></Link>
    <Link href="/projects" passHref><button className={'bg-amber-300 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000]  md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>PROJECTS</button> </Link>
     <Link href="/experience" passHref><button className={'bg-blue-500 hover:scale-105 hover:bg-purple-700 text-white font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000]'}>EXPERIENCE</button>  </Link>
    <Link href="/about" passHref> <button className={' bg-emerald-400 hover:scale-105 text-white hover:bg-purple-700 font-semibold rounded-2xl md:rounded-4xl shadow-md transition text-xl md:text-5xl py-2 md:py-4 w-full md:w-82 h-12 md:h-20 tracking-widest [text-shadow:-2px_3px_#000] md:[text-shadow:-3px_6px_#000] md:[text-shadow:-3px_6px_#000000,_-5px_-2px_#000000,_3px_3px_#000000,_-3px_3px_#000000] '}>ABOUT</button></Link>
    </div> 
    ); 
    
  
    const ProfileSection = () => (
    <div className="flex flex-col items-center space-y-2 text-white text-right"> 
    <div className={`
    text-7xl
      md:text-[150px] 
      font-extrabold 
      font-mario 
      leading-none 
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>
        <span>A</span>
        <span>l</span>
        <span>e</span>
        <span>j</span>
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>r</span>
        <span>o</span>
        </div>
        
        <div className={`
        text-7xl
      md:text-[150px] 
      font-extrabold 
      font-mario 
      leading-none 
      md:-mt-6
    text-white 
      [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]
      
      `}>
        <span>J</span>
        <span>a</span>
        <span>i</span>
        <span>m</span>
        <span>e</span>
        <span>s</span>
        
        
        </div>

    </div> 
     ); 
     

     export default function App(){ 
      
      return (
        
         <div className={`min-h-screen font-sans p-8 ${anotherMarioFont.className} bg-cover bg-gray-900 no-scrollbar`}
                          style={{backgroundImage: 'url(/StarTile_SpaceJam.png)',backgroundAttachment: 'fixed', backgroundSize:'115% 115%', imageRendering: 'pixelated'}} >
          <header className="flex justify-between items-center w-full mb-15"> 
          <NavButtons />
          </header> 
          <main className="flex flex-col md:flex-row items-center md:items-start md:space-x-0">
           <div className="w-full md:w-2/3"> 
         <ProfileSection /> 
            </div> 
         <div className="w-full md:w-1/3 flex justify-center md:justify-start mt-8 md:mt-0">
         <div className="w-52 h-53 md:w-62 md:h-63 rounded-full shadow-lg border-0.01 overflow-hidden flex justify-center items-center float hover:scale-110">
          <Image src={alejandroMP} alt="Profile Placeholder" 
          className="w-70 h-55 loading='eager' md:w-85 md:h-70 object-cover overflow-hidden hover:scale-100" />
         </div>
           </div>
   </main> 
         <div className="flex space-x-10 md:space-x-20 mt-6 md:items-right justify-center">  
          <a href="https://www.github.com/alecocosette" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 transition flex items-center md:space-x-4 px-2 md:px-4 md:w-40 md:h-15 w-20 h-10 bg-black">
           <span className=" text-white md:text-2xl text-xs">GitHub</span> <Image src={GithubLogo} alt="Github Logo" className="md:w-35 md:h-15 w-10 h-10 bg-black  p-1"  /> 
       </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 transition flex items-center md:space-x-4  px-2 md:px-4 md:w-40 md:h-15 w-20 h-10 bg-gray-400">
           <span className=" text-white md:text-2xl text-xs ">Resume</span> <Image src={resumeIm} alt="Reumse Logo" className="md:w-35 md:h-15 w-10 h-8  md:px-1 bg-gray-400 p-1"  /> 
       </a>
       /
          <a href="https://www.linkedin.com/in/alejandro-jaimes-coco/" target="_blank" rel="noopener noreferrer" 
          className="md:opacity-75 hover:opacity-100 transition flex items-center md:space-x-3  px-2 md:px-4 md:w-40 md:h-15 w-20 h-10 bg-blue-500">
           <span className=" text-sky-100 md:text-2xl text-xs">LinkedIn</span> <Image src={LinkLogo} alt="LinkedIn Logo" className="md:w-35 md:h-15 w-10 h-10 scale-100 bg-blue-500"  /> 
       </a> </div>
      <div className='loading="eager" items-center'>
      <Character /></div>
        </div>      ); }