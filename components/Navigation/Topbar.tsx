'use client';
import React, { useContext } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { CursorContext } from '@/components/Cursor/CursorProvider';

// styles
import styles from './TopMenu.module.scss';

// Define the type for the props, if necessary
interface TopMenuProps {}

const Topbar: React.FC<TopMenuProps> = () => {
  const { setSize } = useContext(CursorContext);
  return (
    <div className={styles.top_menu}>
      <a
        href='/'
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => setSize('small')}
      >
        LIA Presentation
      </a>
      <div
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => setSize('small')}
      >
        <a href='/'>
          <h2 className={styles.sub}>Robert Wägar FEA22STO</h2>
        </a>
      </div>
      <button>
        <a href='/contact'>Contact</a>
      </button>
    </div>
  );
};

export default Topbar;
