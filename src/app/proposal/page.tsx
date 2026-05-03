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
        <span>Research Proposal </span>

        
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
            This assignment was about writing a research proposal like the UCF Office of Undergraduate Research' "Student Research Grant" proposal.
            It is an assignment that demands understanding of the topic you want to do and be able to understand what others in the field are saying.
            I proposed a research how GPU and CPU parallerism compare to each other when it comes to machine learning workloads, and at what point do the bottlenecks of GPU make the CPU the better choice.
          </p>
          
        </div>
        <div className="w-full md:w-7/12 mt-5 p-4 md:p-10">
          <p className="text:lg md:text-2xl bg-[#0d0d26]  text-white text-center [text-shadow:5px_5px_#000000,_-4px_-4px_#000000,_5px_-5px_#000000,_-5px_5px_#000000]">
Silicon Scalability: Evaluating GPU Parallelism and CPU
Cooperation for Machine Learning Workloads<br/>
Project Objective or Aim<br/>
The main goal of this research is to break down how GPU parallelism actually compares to
CPU execution when handling heavy machine learning tasks. Specifically, I want to answer
two things: how does execution time scale between CPU multi-threading and GPU parallel
processing using CUDA for neural network training? And, at what point do memory or
architectural bottlenecks actually make the CPU the faster choice? By writing low-level
C++ benchmarking scripts, I’m going to quantify these eƯiciency gains and look into
cooperative CPU-GPU techniques. The end goal is to figure out how to best balance these
units to squeeze the most performance out of a system.<br/>
Project Background and Significance<br/>
The massive growth of deep learning and graphics rendering has created a huge need for
parallel computing power. As datasets get bigger and neural networks get more complex,
standard CPUs usually end up being the bottleneck in the pipeline. To fix this, researchers
and the semiconductor industry have shifted toward parallel computing, specifically using
the architecture of GPUs. While a CPU is built for sequential tasks with a few powerful
cores, a GPU uses thousands of smaller cores to handle many operations at once.
This research matters because knowing exactly where the hardware performance
thresholds are allows developers to stop wasting resources and speed up computing
times. This is a big deal for companies like AMD or NVIDIA when they design next-gen
hardware. Even though GPUs usually beat CPUs in deep learning (Buber & Banu, 2018),
there are specific cases, like when you hit a memory ceiling or have tasks with a lot of
complex branching logic, where the CPU is still the better tool for the job or other tasks
where another tool may come into play (Wang et al., 2019).<br/>
My project is based on the idea of heterogeneous computing. This basically argues that the
best systems don't just rely on one processor, but instead use a cooperative setup where
tasks are delegated between the CPU and GPU, which allow for a better performance in
parallelism (Raju & Chiplunkar, 2018). By using the CUDA platform to build these
benchmarks (Soyata, 2018), I’m bridging the gap between hardware theory and actual lowlevel software implementation.
The results of this study will be useful for both hardware engineering and applied computer
science and modern GPU strategy for the market. Finding the best ways to run things like
parallelized K-means (Baydoun et al., 2018) or model parallelism (Chen et al., 2018) is key
to making systems more eƯicient. By benchmarking these at the instruction and memory
level, I’ll be able to provide clear data on where hardware acceleration hits its limit. This
gives engineers the info they need to build more scalable systems that actually maximize
what the silicon is capable of.<br/>
Research Methods<br/>
To get a real look at the performance gaps between GPU and CPU architectures, I’m using a
quantitative benchmarking approach. This is split into three phases: setting up the
environment, running low-level benchmarks, and analyzing the data.
First, I’ll standardize the testing environment on a workstation with a multi-core CPU and a
modern GPU. I’ll be using C++, Python, and the CUDA Toolkit. I’m choosing to program
directly in C++ and CUDA to cut out the overhead you get with high-level abstractions. This
way, the benchmarks actually show what the "bare-metal" hardware can do without a
bunch of software bloat getting in the way.
Next, I’m building custom benchmarking scripts for three specific workloads: a matrix
multiplication algorithm, a parallelized kernel K-means algorithm, and a dense neural
network training loop. I’ll run each of these in three ways: single-threaded CPU, multithreaded CPU, and fully parallelized GPU via CUDA. This is the best way to see how
performance shifts across diƯerent types of math and memory patterns. I’ll be logging
execution time, VRAM saturation, memory bandwidth, and thermals.
Finally, I’ll dive into the data to find the speedup ratios and crossover points. I want to
isolate exactly where things like PCIe bus latency or VRAM limits cause the GPU to lose its
lead. This is the "why" of the project, figuring out how these two units can actually work
together instead of just picking one.<br/>
Summer C Timeline (May - August):<br/>
 May: Finish the environment setup and start writing the foundational C++ and CUDA
scripts for matrix multiplication.<br/>
 June: Build out the K-means and neural network algorithms. I’ll focus on getting the
memory allocation and thread sync right here.<br/>
 July: Run the benchmarks across all hardware configurations. I’ll be busy logging the
speeds, heat, and memory usage data.<br/>
 August: Break down the data, finish the final research paper, and put together the
project poster for the showcase.<br/>
Expected Outcome<br/>
When I finish this project, I’ll have two main deliverables. First, I’m writing a research paper
that goes into the low-level methodology and the data I found regarding the CPU vs. GPU
benchmarks. I’m planning to submit this to an undergraduate research journal focused on
systems or architecture. Second, I’m designing a poster to show oƯ the results at UCF’s
Showcase of Undergraduate Research Excellence (SURE).<br/>
I also want this to be useful for others, so I’m going to put the C++ and CUDA scripts and
the raw data in an open-source GitHub repo. That way, anyone interested in hardware can
replicate the tests or tweak the code for diƯerent GPU architectures.<br/>
This project is going to provide some solid data for both the engineering field and the UCF
community. For industry, it gives empirical data on how to balance tasks between
processors. As hardware keeps changing, we need current benchmarks to understand
where the limits are. This is a huge skill for anyone looking into hardware design.<br/>
For UCF, specifically in the CS and Engineering departments, I want this to be a resource
for other students. I’m active in student clubs, so I plan to take what I learn here and turn it
into technical workshops. Sharing these low-level implementations will help demystify how
parallel hardware actually works, helping my peers make better architectural choices for
their own heavy-duty projects.<br/>
Beyond these academic outcomes, this project will establish a rigorous performance
baseline that can be used to evaluate future semiconductor releases. By documenting how
specific C++ memory management techniques aƯect kernel execution, I’m creating a
roadmap for better software-hardware integration. I expect these findings to spark deeper
discussions within our campus labs about the trade-oƯs of heterogeneous computing,
ultimately pushing our student-led engineering projects toward more eƯicient, bare-metal
optimization standards.<br/>
Literature Review<br/>
1.Buber, E., & Banu, D. (2018). Performance analysis and CPU vs GPU comparison for deep
learning. 2018 6th International Conference on Control Engineering & Information
Technology. https://ieeexplore.ieee.org/
This study compares the performances of a GPU and a CPU when developing a machine
learning model and tasks on both architectures. They show that GPU consistently outclass
CPUs in terms of performance and parallel processing capabilities. I will use this in order to
support the claim to use GPU parallelism and its eƯiciency over CPUs
<br/>
2. Wang, Y. E., Wei, G. Y., & Brooks, D. (2019). Benchmarking TPU, GPU, and CPU platforms
for deep learning. arXiv preprint arXiv:1907.10701. https://arxiv.org/abs/1907.10701
This paper relates each benchmark diƯerent architectures marked down across deep
learning models. CPU can be useful when memory is at its limit but GPUs constantly show
the exceeding expectations of eƯiciency. I will use this in order have a balanced opinion on
the matter.
<br/>
3. Baydoun, M., Ghaziri, H., & Al-Husseini, M. (2018). CPU and GPU parallelized kernel Kmeans. The Journal of Supercomputing. https://link.springer.com/
This explores other algorithms in the kernel to optimize beyond just one singular use of
CPU and GPU. They show significantly faster parallelization versions for GPU versions
rather than their CPU counterparts. This is important to note as how GPU performance is
aƯected when adapted to its architecture. I will use this to demonstrate the potential gains
these optimizations have.
<br/>
4. Chen, C. C., Yang, C. L., & Cheng, H. Y. (2018). EƯicient and robust parallel DNN training
through model parallelism on multi-GPU platform. arXiv preprint
arXiv:1809.02839. https://arxiv.org/abs/1809.02839
This paper is about how diƯerent model techniques and learning capacities are aƯected in
the GPU through machine learning. This also ensure diƯerent reductions in ineƯicacy by
comparing it to other parallel systems. This also goes to using a scalable system and I will
use it to continue the frame of use GPUs have and how parallelism can always be improved
upon.
<br/>
5. Raju, K., & Chiplunkar, N. N. (2018). A survey on techniques for cooperative CPU-GPU
computing. Sustainable Computing: Informatics and
Systems. https://www.sciencedirect.com/
This is a survey relating how to make the CPU and GPU work together using diƯerent
techniques to improve system performance. This is vital to ensure both are capable to used
on the same page while not relying on only one. This is huge in order to say cooperation is
great when talking about both units.
<br/>
6. Soyata, T. (2018). GPU parallel program development using CUDA. CRC
Press. https://books.google.com/
This is a book based on learning how to utilize CUDA and how parallel programs are
structured in the GPU. It explains diƯerences between the CPU and the GPU architectures
and each needs. This is extremely useful for my proposal and will be a key part of it.<br/>
Preliminary Work and Experience<br/>
My background in systems programming and my own personal projects have set me up
well for this research. I’m a Computer Science major at UCF with a heavy focus on lowlevel languages like C and C++. I’ve already done deep dives into hardware architecture, for
example, I built a custom SNES emulator in C++ from scratch. For that, I had to engineer a
65c816 CPU emulator, build an opcode dispatch system, and handle memory subsystems
for RAM/ROM access. It required a solid grasp of CPU control flow, registers, and memory
states. On top of that, as Vice President of the Graphics Programming Knights in UCF, I lead
workshops on math and game engines, which keeps me right at the intersection of
hardware and software. All that experience with emulation and graphics is what’s giving me
the foundation I need to benchmark GPU parallelism and acceleration and encourage the
need to understand these systems.<br/>
IRB/IACUC statement<br/>
This project is strictly about hardware benchmarking, software development, and
performance analysis. It does not involve any human subjects or animal testing. Because
of that, this proposal does not require IRB or IACUC approval.<br/>
Budget<br/>
Total Requested: $1,450.00         </p>
          
        </div>
        
      </div>
     
           
   </main> 
       </div>   ); }