'use client'
import { AnimatedText } from '@/components/animations/AnimatedText';
import PreviewWrapper from '@/components/PreviewWrapper';
import SectionCollection from '@/components/SectionCollection';
import React from 'react';

const Presentation = () => {
  return (
    <div>
      <SectionCollection />
      <section className='section'>
      <AnimatedText text='Tech Team' className='text-3xl font-black' />
      </section>
      <div id='team'>
      <PreviewWrapper />
      </div>
    </div>
  );
};

export default Presentation;
