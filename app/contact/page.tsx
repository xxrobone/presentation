import React from 'react';
import Link from 'next/link'
import { socials } from '@/public/assets/pageData';
import LinkCard from './_components/linkcard/LinkCard';

import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <main className={styles.main}>
        <h2>Contact</h2>

        <h4>Connect with me thru my socials</h4>
        <div className={styles.links}>
          {socials.map(({ title, href }: { title: string; href: string }) => (
            <LinkCard key={href} title={title} href={href} />
          ))}
        </div>

        <h4>Or send and email to:</h4>
        <Link
            data-icon='email'
            href='mailto:robertwagar@gmail.com'
            target='_blank'
            rel='noreferrer noopener'
          >
          <h2>robertwagar@gmail.com</h2>
          </Link>
        <h4>or</h4>
        <Link
            data-icon='email'
            href='mailto:robert@cogwork.se'
            target='_blank'
            rel='noreferrer noopener'
          >
          <h2>robert@cogwork.se</h2>
          </Link>
       
      </main>
    </div>
  );
};

export default Contact;
