'use client';
import React, { useState, useRef, useEffect } from 'react';
import AvatarBackground from '@/components/AvatarBackground';
import { FcSettings } from 'react-icons/fc';
import './style.css';

function Presentation3d() {
  const [selectedScript, setSelectedScript] = useState('');
  const [playMusic, setPlayMusic] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const audioRef = useRef(null);
  const typingRef = useRef(null);
  const buttonsRef = useRef(null);
  const canvasRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/assets/audio/music.mp3'); // Create a new Audio instance
      typingRef.current = new Audio('/assets/audio/typingSound.mp3'); // Create a new Audio instance
    }
  }, []);

  const handleTagClick = (script) => {
    setSelectedScript(script);
    console.log('script:', selectedScript);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setPlayMusic((prev) => !prev);

    if (!playMusic && audioRef.current) {
      audioRef.current.play();
      if (typingRef.current) typingRef.current.pause();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
    };

    const canvas = canvasRef.current;

    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    if (buttonsRef.current) {
      buttonsRef.current.style.visibility = isVisible ? 'visible' : 'hidden';
    }
  }, [isVisible]);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <AvatarBackground selectedScript={selectedScript} className='pres' />
      {/* Section for the tag buttons */}

      <p className='text'>Avatar Voice</p>
      <FcSettings className='settings' onClick={toggleVisibility} />

      <div className={isVisible ? 'buttons show' : 'buttons'}>
        <button onClick={() => handleTagClick('stop')}>Stop</button>
        <button onClick={() => handleTagClick('welcome')}>Welcome</button>
        <button onClick={() => handleTagClick('degaming')}>Degaming</button>
        <button onClick={() => handleTagClick('mentor')}>Mentoring</button>
        <button onClick={() => handleTagClick('purpose')}>Purpose</button>
        <button onClick={() => handleTagClick('tech')}>Tech</button>
        <button onClick={() => handleTagClick('tools')}>Tools</button>
        <button onClick={() => handleTagClick('features')}>Features</button>
        <button onClick={() => handleTagClick('sample_tasks')}>Tasks</button>
        <button onClick={() => handleTagClick('reflection')}>Reflection</button>
        <button onClick={() => handleTagClick('conclusion')}>Conclusion</button>
      </div>

      {/* <section className='robTalk'>
          <Canvas
            shadows
            camera={{ position: [0, 0, 8], fov: 45 }}
            ref={canvasRef}
          >
            <Experience2 selectedScript={selectedScript} />
          </Canvas>
        </section> */}
    </>
  );
}

export default Presentation3d;
