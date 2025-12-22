'use client';
import React, { useRef, useState, useEffect, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment } from '@react-three/drei';
import * as THREE from 'three';
function MakeModel(){
      const group = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const { scene, animations } = useGLTF('/alejandro2.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationName = animations[0]?.name;
    const action = actions[animationName];
  if (!action) return;
  action.clampWhenFinished = true;

    if (hovered) {
      action.setLoop(THREE.LoopRepeat, Infinity);
    action.paused = false;
    action.fadeIn(0.2).play();
    } else {
      action.setLoop(THREE.LoopOnce, 1);
      action.play();
    }
  }, [hovered, actions, animations]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={3}
      position={[0.001, .25, 1]}
      rotation={[0, -(Math.PI / 2), 0]}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    />
  );
     }
     export default function Character() {
        const [opacity, setOpacity] = useState(0);
        
        useEffect(() => {
          // Trigger fade in once the component is mounted on the client
          setOpacity(1);
        }, []);
  return (
    
    // CRITICAL: We use a wrapper with an explicit min-height and overflow visible
    <div 
      className="w-full relative transition-opacity duration-1500 ease-in-out" 
      style={{ 
        height: '300px', 
        minHeight: '300px', 
        opacity: opacity 
      }}
    >
      <Suspense fallback={<div className="text-white text-center">Loading Alejandro...</div>}>
        <Canvas 
          key="stable-canvas"
          dpr={[1,1.5]} 
          shadows
          // Use gl prop to ensure the alpha channel doesn't cause transparency issues
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 1, 8], fov: 25 }}
          style={{ height: '100%', width: '100%' }}
        >
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} />
          <Environment preset="studio" />
          
          <MakeModel />
        </Canvas>
      </Suspense>
    </div>
  );
}