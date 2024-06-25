'use client';
import React, { useState } from 'react';
import { itemVariants, previews } from './data';

import Item from './Item';
import Preview from './Preview';
import './Preview.scss';

const PreviewWrapper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='container'>
      <div className='items'>
        {previews && previews.map((preview, index) => (
          <Item
            key={index}
            index={index + 1}
            preview={preview}
            onClick={() => handleMouseEnter(index)}
          />
        ))}
      </div>
      {previews && previews.map((preview, index) => (
        <Preview
          key={index}
          preview={previews[activeIndex]}
          variant={itemVariants[activeIndex]}
          isActive={activeIndex === index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
};

export default PreviewWrapper;
