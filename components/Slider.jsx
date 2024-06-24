'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IMG1 from '@/public/1.jpg';
import IMG2 from '@/public/2.jpg';
import IMG3 from '@/public/3.jpg';
import IMG4 from '@/public/4.jpg';

const artData = [
  {
    image: IMG1,
    title: 'art1',
    subTitle: 'some subtitle',
    label: '01',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia, dolorum aperiam nam saepe commodi odio tempore provident dolor! Aut?',
  },
  {
    image: IMG2,
    title: 'art2',
    subTitle: 'some subtitle',
    label: '02',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia, dolorum aperiam nam saepe commodi odio tempore provident dolor! Aut?',
  },
  {
    image: IMG3,
    title: 'art3',
    subTitle: 'some subtitle',
    label: '03',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia, dolorum aperiam nam saepe commodi odio tempore provident dolor! Aut?',
  },
  {
    image: IMG4,
    title: 'art4',
    subTitle: 'some subtitle',
    label: '04',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia, dolorum aperiam nam saepe commodi odio tempore provident dolor! Aut?',
  },
  {
    image: IMG1,
    title: 'art2',
    subTitle: 'some subtitle',
    label: '05',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia, dolorum aperiam nam saepe commodi odio tempore provident dolor! Aut?',
  },
  {
    image: IMG3,
    title: 'art6',
    subTitle: 'some subtitle',
    label: '06',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia, dolorum aperiam nam saepe commodi odio tempore provident dolor! Aut?',
  },
];

const Card = ({
  image,
  label = '01',
  title = 'art1',
  subTitle = 'moody',
  desc = 'this image was created with heart in mind...',
}) => {
  return (
    <div className='w-[300px] h-full bg-gradient-to-b from-purple-400 to-pink-200 rounded shadow-xl backdrop-filter-blur pointer-events-none'>
      <h5 className='text-black pt-4 px-4'>{label}</h5>
      <header className='w-full px-4 by-2  '>
        <h2 className='text-black'>{title}</h2>
        <h4 className='text-black'>{subTitle}</h4>
      </header>
      <div className='w-full h-[220px] overflow-hidden'>
        <Image src={image} alt={title} className='object-cover object-center' />
      </div>
      <div className='text-black px-4'>{desc}</div>
      <footer>
        <span>icon?</span>
      </footer>
    </div>
  );
};

/* export default Card; */

const Slider = () => {
  const [width, setWidth] = useState(0);
  const slider_ref = useRef();

  useEffect(() => {
    setWidth(slider_ref.current.scrollWidth - slider_ref.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className='w-[60vw] h-[460px] overflow-hidden p-5 xs:w-full flex bg-white shadow-2xl rounded relative'
      ref={slider_ref}
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className='inline-flex gap-8'
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
      >
        {artData.map((props, i) => (
          <Card key={i} {...props} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
