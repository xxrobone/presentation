'use client'
import { AnimatedText } from '@/components/animations/AnimatedText';
import PreviewWrapper from '@/components/PreviewWrapper';
import SectionCollection from '@/components/SectionCollection';
import React from 'react';

const Presentation = () => {
  return (
    <div>
      <SectionCollection />
      <AnimatedText text='Tech Team' className='text-3xl font-black' />
      <PreviewWrapper />
    </div>
  );
};

export default Presentation;
