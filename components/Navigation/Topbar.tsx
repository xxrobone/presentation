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
      <p
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => setSize('small')}
      >
        LIA Presentation
      </p>
      <div
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => setSize('small')}
      >
        <a href='/' target='_blank' rel='noopener noreferrer'>
          By <h2 className={styles.sub}>Robert Wägar FEA20ST</h2>
        </a>
      </div>
      <button>
        <a href='/kontakt'>Kontakt</a>
      </button>
    </div>
  );
};

export default Topbar;
