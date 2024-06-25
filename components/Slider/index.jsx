'use client';
import React, { Suspense, useRef } from 'react';
import {
  perspectiveCamera,
  Preload,
  Scroll,
  ScrollControls,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

import Slides from './Slides';

const Slider = () => {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal pages={5} distance={1}>
          <Scroll>
            <Slides />
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
};

export default Slider;
