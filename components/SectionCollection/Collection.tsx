'use client';
import Section from '@/components/Section';
import Evo from '@/public/evolution.jpg';
import Unity from '@/public/unity.jpg';
import Fairplay from '@/public/fairplay.jpg';
import Lenis from '@studio-freight/lenis';

import { ReactNode, useEffect, useState } from 'react';

export default function Collection({children}: {children: ReactNode}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='w-full h-full flex flex-col relative z-20'>  
    {children}  
    </div>
  );
}
