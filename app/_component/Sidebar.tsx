'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import MenuItem from './MenuItem';
import { capitalizeFirstLetter } from '@/utils/CapitalizeFirstLetter';
import { SIDENAV_ITEMS } from '../../assets/constants/navData';
import Socials from '@/components/socials'

const Sidebar = () => {
  // if combined later with pages from lets say wordpress or any other cms we could combine them here
  const combinedLinks = [...SIDENAV_ITEMS];

  return (
    <div className='md:w-72 bg-[#080808] h-screen flex-1 fixed hidden md:flex z-50'>
      <div className='flex flex-col space-y-6 w-full'>
        <Link
          href='/'
          className='flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 h-16 w-full'
        >
          <h2>logo</h2>
          <span className='font-bold text-xl hidden md:flex'>
            E-sports academy
          </span>
        </Link>

        <div className='flex flex-col space-y-2  md:px-6 '>
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Sidebar;
