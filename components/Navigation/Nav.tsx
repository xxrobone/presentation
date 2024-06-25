'use client'
import React, { useState, useEffect, useRef, useContext } from 'react';
import NavBtn from './NavBtn';

// styles
import styles from './Navbar.module.scss';
import { CursorContext } from '@/components/Cursor/CursorProvider';

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = (props) => {
  const [click, setClick] = useState<boolean>(false);
  const [navActive, setNavActive] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const { setSize } = useContext(CursorContext);

  const handleClick = () => {
    setClick(!click);
    setNavActive(!click);
  };

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current?.classList.add(styles.bgorange);
          navRef.current?.classList.remove(styles.hide);
        } else {
          navRef.current?.classList.add(styles.hide);
          navRef.current?.classList.remove(styles.bgorange);
        }
        prevScrollpos = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}
    onMouseEnter={() => {
      setSize('large');
    }}
    onMouseLeave={() => setSize('small')}
    >
      <button className={styles.menu_icon} onClick={handleClick}>
        <NavBtn navActive={navActive} handleClick={handleClick} />
      </button>
      <ul
        className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}
      >
        {props.children}
      </ul>
    </nav>
  );
};

export default Nav;
