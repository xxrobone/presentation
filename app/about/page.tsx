'use client';
import { useState } from 'react';
import PageTransition from '@/components/animations/PageTransition';
import BgEllipse from '@/components/bgellipse/BgEllipse';
import Headline from '@/components/headline/Headline';
import { Silhuette } from './_components/silhuette/Silhuette';
import AboutMe from './_components/aboutme/AboutMe';
import Capabilities from './_components/capabilities/Capabilities';
import MeButtons from './_components/mebuttons/MeButtons';
import styles from './about.module.scss';

const About = () => {
  const [category, setCategory] = useState('me');

  const ShowCategory = (category: string) => {
    switch (category) {
      case 'me':
        return <AboutMe />;
      case 'capabilities':
        return <Capabilities />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.about}>
      <PageTransition />
      <div className={styles.top_section}>
        <Headline title='About' />
        <MeButtons setCategory={setCategory} />
      </div>
      <Silhuette />
      <BgEllipse />
      <section className={styles.section}>{ShowCategory(category)}</section>
    </div>
  );
};

export default About;
