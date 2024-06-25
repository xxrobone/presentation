import SectionWrapper from '@/components/Section/SectionWrapper';
import React from 'react';
import SKOLAN from '@/public/skolan.jpg';
import Collection from '@/components/SectionCollection/Collection';

const About = () => {
  return (
    <div className='w-full h-full p-80'>
          <Collection>
              some collection
     <p className='text-white'>some text</p>
      </Collection>
    </div>
  );
};

export default About;
