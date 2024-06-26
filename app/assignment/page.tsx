'use client';
import React from 'react';
import Slider from '@/components/Slider';
import styles from '@/app/page.module.css';
import { SlideInLeft } from '@/components/animations/reveal/SlideInLeft';
import { AnimatedText } from '@/components/animations/AnimatedText';

const Assignment = () => {
  return (
      <div className='w-screen h-full pt-24 md:pt-40 pointer-events-auto'>
      <section className={styles.section} id='read'>
        <AnimatedText
          text='First Assignment: The Portal'
          className={styles.title4}
        />
        <SlideInLeft>
          <p className={styles.p}>
            During my LIA at DeGaming, my initial assignment was working on The
            Portal, an existing platform requiring extensive debugging and
            connectivity solutions with MongoDB. This phase was critical for
            getting introduced to DeGaming&apos;s projects, version control with
            GitHub, and their overall development process. <br />
            <br />
            Daily Meetings: Each day started with a team meeting on Slack at
            9:00 AM, where we discussed daily goals, progress, and any blockers
            we encountered. <br />
            <br />
            Weekly Demos: On Fridays, we held demo sessions to showcase the
            week&apos;s progress. These demos were essential for receiving
            feedback and making necessary adjustments.
          </p>
        </SlideInLeft>
        <div className='w-full h-16'></div>
        <AnimatedText
          text='Introduction and Learning Phase'
          className={styles.title4}
        />
        <SlideInLeft>
          <p className={styles.p}>
            This initial period was not only about resolving bugs but also about
            getting familiar with the company&apos;s tech stack and workflows.
            Here are some key aspects:
            <br />
            <br />
            Introduction to Tools and Tech: I got hands-on experience all tools
            for development, Notion for task management, and Postman for API
            testing. Also a short introduction to Wagmi, Viem, Smart Contract
            etc. <br />
            <br />
            Mentorship: Mikael, my mentor, was always available to help,
            providing guidance and support, which was invaluable during this
            learning phase. <br />
            <br />
            Remote Work: We worked remotely, maintaining regular communication
            through Slack and video calls via Teams.
          </p>
        </SlideInLeft>
        <div className='w-full h-16'></div>
        <AnimatedText text='Liquidity House' className={styles.title4} />
        <SlideInLeft>
          <p className={styles.p}>
            As I progressed during my LIA at DeGaming, I was assigned to a more
            significant project initially named GLS, which was later rebranded
            to Liquidity House. This platform was designed to provide advanced
            liquidity services, and the shift in project name also came with
            changes in design and functionality. Increased Responsibility
            Working on Liquidity House was a pivotal part of my internship, as
            it came with increased responsibility and the chance to influence
            technical decisions within the established frameworks of the
            company.
            <br />
            <br />
            Additional Meetings
            <br />
            To support the development of Liquidity House, we held dedicated
            meetings every Thursday in addition to our daily stand-ups. Magnus
            was the product owner and Anik designer. These meetings were crucial
            for coordinating efforts, addressing challenges, and ensuring that
            everyone was aligned with the project&apos;s goals and timelines.
            <br />
            <br />
            Technical Decisions
            <br />
            I had the opportunity to take charge of several technical aspects of
            the project but choose most of what already was used:
            <br />
            <br />
            Technology Selection: I selected and implemented key technologies
            such as MUI for the UI components, Next.js for the application
            framework, Wagmi for interacting with blockchain, and Mikael added
            ImageKit for optimized image management.
            <br />
            <br />
            Design Changes: The rebranding from GLS to Liquidity House included
            not just a name change but also significant updates to the
            platform&apos;s design and some changes in functionality, which I
            was actively involved in implementing, design was done by Anik.
            <br />
            <br />
            Backend Integration
            <br />
            The backend integration was another critical area of focus:
            <br />
            <br />
            Initial Setup on Heroku: Initially, degamings backend services were
            hosted on Heroku. This setup provided a convenient starting point
            for development and testing. I had to add a bit of mockdata while
            working with funcationality
            <br />
            <br />
            Transition to AWS: As the company and projects progressed and grow
            in size, Degaming transitioned the backend to AWS to enhance
            scalability and performance. This shift required careful planning
            and execution to ensure a smooth migration without disrupting the
            development process. I dident implement any backend but got to
            observe two masters at work, Mikeal and Lowe.
          </p>
        </SlideInLeft>
        <div className='w-full h-16'></div>
        <AnimatedText
          text='Workflow and Technologies'
          className={styles.title4}
        />
        <SlideInLeft>
          <p className={styles.p}>
            During my LIA, we used several tools and technologies that were
            crucial for our workflow and project management:
            <br />
            <br />
            Git and GitHub: For version control and collaborative development.
            <br />
            <br />
            Vercel: For deploying our projects, ensuring smooth and continuous
            integration.
            <br />
            <br />
            MongoDB: Worked extensively with MongoDB for database management,
            especially during the initial project phase, Portal.
            <br />
            <br />
            GraphQL: Used for interacting with the APIs, enabling efficient data
            fetching and manipulation.
            <br />
            <br />
            Web3 Technologies: Gained exposure to Web3, smart contracts, and
            blockchain technologies, though it was challenging to grasp
            entirely.
          </p>
        </SlideInLeft>
        <div className='w-full h-16'></div>
        <AnimatedText text='Challenges and Growth' className={styles.title4} />
        <SlideInLeft>
          <p className={styles.p}>
            The transition to working on Liquidity House was challenging yet
            rewarding:
            <br />
            <br />
            Complex Technologies: Understanding Web3 and smart contracts was
            initially confusing, but with time, I started to grasp the concepts
            better.
            <br />
            <br />
            Increased Responsibility: I had more autonomy in making technical
            decisions, which helped me grow as a developer and understand the
            broader implications of my work.
          </p>
        </SlideInLeft>
        <div className='w-full h-16'></div>
        <AnimatedText text='Mentorship ' className={styles.title4} />
        <SlideInLeft>
          <p className={styles.p}>
            Throughout my LIA, Mikael and Anik were instrumental in my
            development. They provided regular feedback and guidance, ensuring
            that I stayed on track and learned effectively.
            <br />
            <br />
            Team Support: Although I worked mostly with Mikael and Anik, I also
            gained insights and knowledge from other team members, which
            enriched my learning experience. <br />
            <br />
            Continuous Learning: Regular code reviews and collaborative
            problem-solving sessions were integral to my growth.
          </p>
        </SlideInLeft>
        <div className='w-full h-16'></div>
        <AnimatedText text='Conclusion' className={styles.title4} />
        <SlideInLeft>
          <p className={styles.p}>
            This LIA has been one of the most enjoyable and educational
            experiences of my life. Working at DeGaming has not only
            strengthened my technical skills but also reinforced my passion for
            development.
            <br />
            <br />I want to express my heartfelt gratitude to Anik, Mikael, and
            the entire team for their support and guidance. This experience has
            been invaluable, and I am excited to apply what I have learned to
            future projects.
          </p>
        </SlideInLeft>
      </section>
      <AnimatedText
        text='Below you can see some of the work'
        className={styles.title4}
      />
      <div className='w-full h-10'></div>
      <div className='w-screen h-screen relative'>
        <Slider />
      </div>
    </div>
  );
};

export default Assignment;
