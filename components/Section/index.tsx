'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode, useRef } from 'react';

type SectionProps = {
  image?: StaticImageData;
  title: string;
  desc: string;
  tag?: string;
  children?: ReactNode;
};

const Section = ({ image, title, desc, tag, children }: SectionProps) => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section className='relative md:h-screen h-full overflow-hidden' ref={secRef}>
      <motion.div className='absolute h-[120%] w-full -z-10' style={{ top: y }}>
        <div className='absolute inset-0 bg-black/70 z-10'></div>
        {image ? (
          <Image
            alt={title}
            src={image}
            fill
            className='object-cover object-center'
          />
        ) : (
          ''
        )}
      </motion.div>
      <div className='flex flex-col gap-4 p-10 md:p-24 pt-20 md:pt-40 pb-2 md:pb-20'>
        <span className='uppercase text-xs'>{tag}</span>
        <h2 className='font-branding text-4xl drop-shadow-lg md:text-6xl font-extrabold'>{title}</h2>
        <p className='font-primary max-w-[500px] text-xl'>{desc}</p>
      </div>
      <div className='w-full h-full md:pl-80 p-10'>{children}</div>
    </section>
  );
};

export default Section;
