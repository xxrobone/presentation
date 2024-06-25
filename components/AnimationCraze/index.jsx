'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LogoDesktop from './Logo-desktop';
import styles from './AnimationCraze.module.scss';

const AnimatedCraze = () => {
  return (
    <>
      <div className={styles.lh}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 2.5,
            ease: 'easeInOut',
            type: 'spring',
            damping: 10,
            stiffness: 50,
            restDelta: 0.005,
          }}
        >
          My
        </motion.h2>{' '}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 3.6,
            ease: 'easeInOut',
            type: 'spring',
            damping: 8,
            stiffness: 50,
            restDelta: 0.005,
            bounce: 0.25,
          }}
        >
          skills
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 3.6,
            ease: 'easeInOut',
            type: 'spring',
            damping: 8,
            stiffness: 50,
            restDelta: 0.005,
            bounce: 0.25,
          }}
        >
          was
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 3.8,
            ease: 'easeInOut',
            type: 'spring',
            damping: 7,
            stiffness: 50,
            restDelta: 0.01,
            bounce: 0.25,
          }}
        >
          being
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 4,
            ease: 'easeInOut',
            type: 'spring',
            damping: 8,
            stiffness: 40,
            restDelta: 0.01,
            bounce: 0.3,
          }}
        >
          built.
        </motion.h2>
      </div>
    </>
  );
};

export default AnimatedCraze;
