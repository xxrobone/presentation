'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
import { AnimatedText } from '../animations/AnimatedText';
import Button from '../Button';

type SectionProps = {
  image?: StaticImageData;
  title: string;
  desc: string;
  tag: string;
};

const Hero = ({ image, title, desc, tag }: SectionProps) => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section
      className='w-full relative h-[600px] md:h-screen overflow-hidden'
      ref={secRef}
    >
      <motion.div className='absolute h-[120%] w-full -z-10' style={{ top: y }}>
        <div className='absolute inset-0 bg-black/70 z-10'></div>
        {image ? (
          <Image
            alt={title}
            src={image}
            fill
            className='object-cover object-bottom'
          />
        ) : (
          ''
        )}
      </motion.div>
      <div className='grid place-content-center gap-4 md:p-40 px-8 py-80'>
        <span className='uppercase text-xs'>{tag}</span>
        <AnimatedText text={title.toUpperCase()} className='title2' />
        <p className='font-primary max-w-[700px] text-xl md:text-2xl'>{desc}</p>
        <div className='flex row gap-10'>
          <Button theme='outlined'>
            <a href='#read'>Read More</a>
          </Button>
          <Button theme='outlined'>
            <a href='#presentation'>3d Presentation</a>
          </Button>
        </div>
        <p className='py-10 w-3/5 text-2xl'>
          This is my internship presentation about the company{' '}
          <span style={{ color: 'aqua', fontWeight: 700 }}>DeGaming</span> where
          I&apos;ve been working at as a frontend developer during spring of
          2024. <br /> You will see some parts of the projects I worked on, be
          able to read about the co-workers, the teach stack and about the
          company.
        </p>
      </div>
    </section>
  );
};

export default Hero;
