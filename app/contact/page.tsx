'use client';
import React from 'react';
import PageTransition from '@/components/animations/PageTransition';

const Contact = () => {
  return (
    <div className='w-full h-screen grid place-content-center'>
      <PageTransition />
      Email: robertwagar@gmail.com or <br />
      robert@cogwork.se
    </div>
  );
};

export default Contact;
