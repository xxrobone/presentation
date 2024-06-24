'use client'
import React, { useState, useEffect, useRef } from 'react';
import NavBtn from './NavBtn';

// styles
import styles from './Navbar.module.scss';
import styled from './NavBtn.module.scss';

interface NavProps {
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = (props) => {
  const [click, setClick] = useState<boolean>(false);
  const [navActive, setNavActive] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

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
    <nav className={styles.navbar} ref={navRef}>
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
