'use client'
import React, { useEffect, useRef } from 'react';
import './style.css';
import { Canvas } from '@react-three/fiber';
import { Experience2 } from '../Experience2';

const AvatarBackground = ({ selectedScript, setSelectedScript }) => {

  const handleTagClick = (script) => {
    setSelectedScript(script);
  };

  return (
    <div className='wrapper-2' id='presentation'>
      <div>
        <div className='glow'></div>
      </div>
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
