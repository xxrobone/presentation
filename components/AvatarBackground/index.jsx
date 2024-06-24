'use client'
import React, { useEffect, useRef } from 'react';
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Experience2 } from '../Experience2';

const AvatarBackground = ({ selectedScript, setSelectedScript }) => {
  const bubblesContainerRef = useRef(null);

  useEffect(() => {
    const between = (min, max) => Math.random() * (max - min) + min;
    const colors = ['#e4414180', '#4f2af3a9'];

    const interval = setInterval(() => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      bubblesContainerRef.current.appendChild(bubble);

      bubble.style.left = `${between(0, 100)}%`;

      const sizePx = `${between(4, 8)}px`;

      const floatingBubbleKeyFrames = [{ top: '100%' }, { top: `-${sizePx}` }];

      const floatingAnimation = bubble.animate(floatingBubbleKeyFrames, {
        duration: between(10000, 40000),
        fill: 'forwards',
      });

      floatingAnimation.onfinish = () => {
        bubblesContainerRef.current.removeChild(bubble);
      };

      bubble.style.width = sizePx;
      bubble.style.height = sizePx;

      const randomColorIndex = Math.floor(Math.random() * colors.length);
      bubble.style.background = colors[randomColorIndex];

      bubble.style.opacity = `${between(20, 100)}%`;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleTagClick = (script) => {
    setSelectedScript(script);
  };

  return (
    <div className='wrapper-2' id='presentation'>
      <div>
        <div className='glow'></div>
      </div>
      <div ref={bubblesContainerRef} id='bubbles'></div>
      <div className='dashboard-border'>
        <div className='dashboard'>
          <div className='buttons'>
            <button onClick={() => handleTagClick('stop')}>Stop</button>
            <button onClick={() => handleTagClick('welcome')}>Welcome</button>
            <button onClick={() => handleTagClick('degaming')}>Degaming</button>
            <button onClick={() => handleTagClick('mentor')}>Mentoring</button>
            <button onClick={() => handleTagClick('purpose')}>Purpose</button>
            <button onClick={() => handleTagClick('tech')}>Tech</button>
            <button onClick={() => handleTagClick('tools')}>Tools</button>
            <button onClick={() => handleTagClick('features')}>Features</button>
            <button onClick={() => handleTagClick('reflection')}>
              Reflection
            </button>
            <button onClick={() => handleTagClick('conclusion')}>
              Conclusion
            </button>
          </div>

          <section className='robTalk'>
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
              <Experience2 selectedScript={selectedScript} />
            </Canvas>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvatarBackground;
