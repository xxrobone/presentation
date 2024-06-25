'use client'
import { AnimatedText } from '@/components/animations/AnimatedText';
import PreviewWrapper from '@/components/PreviewWrapper';
import SectionCollection from '@/components/SectionCollection';
import React from 'react';

const Presentation = () => {
  return (
    <div>
      <SectionCollection />
      <section className='center'>
      <AnimatedText text='Tech Team + Boss' className='md:text-7xl text-4xl font-black md:pl-40 pt-20' />
      </section>
      <div id='team' className='relative h-full'>
      <PreviewWrapper />
      </div>
    </div>
  );
};

export default Presentation;
