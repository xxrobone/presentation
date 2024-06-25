'use client';
import React, { useRef } from 'react';
import { Image as DI } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

function DreiImage(props) {
  const ref = useRef(null);
  const group = useRef(null);

  return (
    <group ref={group}>
      <DI ref={ref} {...props} />
    </group>
  );
}

function Slide({ urls = [''], ...props }) {
  const ref = useRef(null);
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;

  return (
    <group ref={ref} {...props}>
      <DreiImage position={[-width * w, 0, 0]} scale={[5, 10]} url={urls[0]} />
      <DreiImage position={[0, 0, 0]} scale={[4, 8]} url={urls[1]} />
      <DreiImage position={[width * w, 0, 1]} scale={[6, 4]} url={urls[2]} />
    </group>
  );
}

const Slides = () => {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Slide
        position={[0, 0, 0]}
        urls={[
          '/images/glsdesign.png',
          '/images/gls4.png',
          '/images/glsv1operators.png',
        ]}
      />
      <Slide
        position={[width * 1, 0, 0]}
        urls={[
          '/images/glsdetailsabout.png',
          '/images/glsv1livebets.png',
          '/images/lhtasks.png',
        ]}
      />
      <Slide
        position={[width * 2, 0, 0]}
        urls={['/images/lhdesign.png', '/images/lh.png', '/images/lh2.png']}
      />
      <Slide
        position={[width * 3, 0, 0]}
        urls={[
          '/images/lhfullpage.png',
          '/images/lhmobilebrdetails.png',
          '/images/lhmetamask.png',
        ]}
      />
      <Slide
        position={[width * 4, 0, 0]}
        urls={[
          '/images/lhoverview.png',
          '/images/lhmobilehero.png',
          '/images/lhliquidityflow.png',
        ]}
      />
    </>
  );
};

export default Slides;
