'use client';
import React from 'react';
import Link from 'next/link';
import { AnimatedText } from '@/components/animations/AnimatedText';
import { SlideInLeft } from '@/components/animations/reveal/SlideInLeft';
import styles from '../page.module.css';

const Extra = () => {
  return (
    <>
      <div className='w-full h-16'></div>
      <div className='w-full h-16'></div>
      <section className='w-full text-center'>
        <AnimatedText
          text='What is this?'
          className={styles.title}
        />
      </section>
      <div className={styles.extra}>
        <div className={styles.left}>
          <AnimatedText text='DeGaming Group!' className={styles.title} />
          <SlideInLeft>
            <p className={styles.p}>
              ...to my internship presentation at DeGaming Group. Here, you can
              explore my work with advanced web technologies like: <br />
              <br />
              Next.js,
              <br />
              Wagmi,
              <br />
              Viem,
              <br />
              MUI,
              <br />
              Recharts,
              <br />
              and Typescript. <br />
              <br />
              Discover my key tasks, the tools I used, the mentorship I
              received, and the valuable lessons I learned. Enjoy!
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Purpose' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              The purpose of the internship (LIA) is to practically apply
              theoretical and practical knowledge from the education and gain
              experience working on real projects. <br />
              The internship offers a chance to be part of a professional team,
              work on real assignments, and understand how communication and
              problem-solving function in the profession and the working life of
              a developer.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Tech' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              The technologies I used were... <br />
              <br />
              Next.js: For client-side rendering and building scalable web
              applications.
              <br />
              <br /> Wagmi and Viem: For integrating smart contracts and Web3
              functionality.
              <br />
              <br /> Material-UI (MUI): For implementing user interfaces and
              components.
              <br />
              <br /> Recharts: For creating graphs.
              <br />
              <br />
              Typescript: For typed JavaScript development. GraphQL: For
              fetching data.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Tools' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              The tools I used were... <br />
              <br />
              Slack: For communication. <br />
              <br />
              Email and Teams: Additional communication tools. <br />
              <br />
              Notion: For planning and organizing tasks and sprints. <br />
              <br />
              Postman: For testing API endpoints. <br />
              <br />
              Figma: For design implementation.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Tasks' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Some of the tasks I did at the Gaming were... <br />
              <br />
              Implementing designs from Figma into functional web pages. <br />
              <br />
              Developing user interfaces for managing liquidity and withdrawals.
              <br />
              <br />
              Integrating backend services for data exchange.
              <br />
              <br /> Creating and managing mock data for development purposes.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Work' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Implementing designs from Figma into functional web pages.
              <br />
              <br /> - Developing user interfaces for managing liquidity and
              withdrawals.
              <br />
              <br /> - Integrating backend services for data exchange.
              <br />
              <br /> - Creating and managing mock data for development purposes.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Features' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Implemented Features: Liquidity Selection and Management: Users
              can choose a liquidity provider and place their liquidity with the
              selected casino or operator. <br />I implemented the interface and
              functionality to make this seamless while maintaining security and
              user-friendliness.
              <br />
              <br />
              Profit and Liquidity Overview: Users can view their current profit
              and withdraw their profit or liquidity as desired. <br />I
              designed and integrated this so that users have a clear overview
              of their investments and current status. <br />
              <br />
              Currency Exchange and Network Switching: An essential part of the
              platform was enabling easy currency exchange between different
              tokens and networks, such as USDT, USD, and other relevant tokens.{' '}
              <br />I implemented the necessary functionality to ensure smooth
              transactions and user experience.
              <br />
              <br />
              Statistics and Dynamic Data: To provide users with insights into
              platform activity and performance, I included features to display
              statistics such as Total Value Locked (TVL), trading volume, and
              other relevant data. <br />
              This helps users make informed decisions about their investments.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='My Mentor' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              My mentor was Mikael Bolmstam, an experienced fullstack developer.
              He assigned me tasks, provided guidance, and gave feedback on my
              work.
              <br /> During the LIA period, I received support in solving
              technical challenges and improving my skills in frontend
              development and project management.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Reflection' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              My goals and hopes of working with frameworks like React, Next.js,
              and the JavaScript programming language were fulfilled during my
              LIA, which was fantastic.
              <br /> Despite not having much experience in fullstack
              development, I got to work with some backend components like
              MongoDB and Node.js.
              <br />
              This was a challenge that helped me grow as a developer and
              understand the importance of collaborating across technical
              boundaries.
              <br /> An important insight from my LIA is the need to strengthen
              my skills in troubleshooting and system design. Despite my
              knowledge and previous experience, this proved to be a key factor
              in handling complex projects like Liquidity House effectively.{' '}
              <br />
              <br />I have learned that by being methodical and following
              established processes, I can improve my results and the efficiency
              of my efforts in the future. Working with a dedicated team like
              DeGaming Group has also taught me the importance of effective
              communication and problem-solving. Through daily interactions with
              colleagues and mentors, I have grown as an individual contributor
              and as part of a larger organization.
              <br />
              <br /> Being able to communicate effectively and understand others
              perspectives has been crucial in achieving our common goals during
              the LIA period. <br />
              My time at DeGaming has not only provided me with valuable
              practical experience in modern web development and integrating
              blockchain technology within iGaming but has also strengthened my
              conviction that I have chosen the right career.
              <br /> Having the opportunity to work with exciting technologies
              and real projects has been an inspiring glimpse into what the
              future holds in the IT industry. <br />
              <br />
              For my continued development as a developer, I am particularly
              interested in deepening my knowledge in backend and frontend
              development, exploring new technologies that can improve user
              experience and functionality of web applications.
              <br />
              <br /> I also look forward to applying my LIA experiences in
              future projects and contexts and continuing to learn and grow
              professionally in my field.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Conclusion' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Conclusion and Discussion... <br />
              Comparing theoretical education with practical experience from the
              LIA shows that the entire IT industry is constantly evolving.{' '}
              <br />
              There are many ways to solve problems and work as a developer,
              both individually and in teams, depending on personal preferences,
              customer orders, and specific requests.
              <br /> It is essential to be flexible and open to suggestions and
              changes, as each workplace has its methods, tools, and
              communication styles.
              <br />
              <br />
            </p>
          </SlideInLeft>
          <div className='w-full h-fit mb-8 flex-col justify-start items-center'>
            <h2>
              <Link
                href='https://app-9juqn0gn7-de-gaming.vercel.app/'
                target='_blank'
                rel='noreferrer noopener'
                className='text-blue-500 hover:underline relative'
              >
                GLS
              </Link>
            </h2>
            <h2>
              <Link
                href='https://gls-development.vercel.app/'
                target='_blank'
                rel='noreferrer noopener'
                className='text-blue-500 hover:underline relative'
              >
                Liquidity House
              </Link>
            </h2>
          </div>
        </div>
        {/* ===================================================================================================================================================== */}
        {/* ===================================================================================================================================================== */}
        <div className={styles.right}>
          <AnimatedText text='Cogwork!' className={styles.title} />
          <SlideInLeft>
            <p className={styles.p}>
              ...to my internship presentation at Cogwork! Here, you can explore
              my work with customer frienly web technologies like: <br />
              <br />
              Wordpress,
              <br />
              Css,
              <br />
              Plugins,
              <br />
              Widgets,
              <br />
              A booking system <br />
              Customer support <br />
              <br />
              Discover my key tasks, the tools i used, the daily routines and
              the lessons i learned in this customer friendly company. Lets Go!
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Purpose' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              The aim of the internship (LIA) is to apply theoretical and
              practical knowledge from education and gain experience on actual
              projects. <br />
              The internship provides an opportunity to join a professional
              team, work on real tasks, and understand how communication and
              problem-solving operate in the developer’s profession and working
              life.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Tech' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Technologies used: <br />
              <br />
              WordPress Page Editor and Block Editor: For creating and managing
              content.
              <br />
              <br /> Pure CSS: For styling web pages without frameworks.
              <br />
              <br /> Vanilla JS and jQuery: For interactive web features and DOM
              manipulation.
              <br />
              <br /> Plugins: For additional functionality and customization.
              <br />
              <br />
              MinaAktiviteter: For implementing a booking system.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Tools' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Tools used: <br />
              <br />
              Zoom: Communication tool. <br />
              <br />
              Email & Teams: Additional communication tool. <br />
              <br />
              Trello: Planning and organizing tasks. <br />
              <br />
              Google kalendar: For booking apointments. <br />
              <br />
              Figma: Design implementation tool.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Tasks' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Tasks: <br />
              <br />
              Creating websites for customers. <br />
              <br />
              Implementing new features with shortcodes.
              <br />
              <br />
              Re-designing websites.
              <br />
              <br />
              Customer meetings.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Work' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Recreating customers websites into functional pages.
              <br />
              <br /> - Developing new interfaces and features.
              <br />
              <br /> - Integrating plugins for easier use.
              <br />
              <br /> - Creating new design and functions.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Features' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              Features: CMS for Customers: Implemented a content management
              system allowing customers to manage their content easily. <br />
              I made the interface seamless and secure.
              <br />
              <br />
              Complete Makeover: Conducted a total makeover for two companies,
              enhancing their websites.
              <br />
              <br />
              Booking Service Integration: Enabled Cogwork to deliver their
              booking service using React and vanilla JS. <br />
              <br />
              Search Functionality: Created a search function for users to find
              courses on their upcoming new website. <br />
              This feature ensures users can quickly find relevant courses.
              <br />
              <br />
              Plugins Integration: Used plugins for Google Maps and contact
              pages to enhance functionality and user interaction. <br />
              This made the sites more dynamic and user-friendly.
              <br />
              <br />
              <br />
              <br />
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='My Mentor' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              My mentor was Niclas Evaldsson, an experienced wordpress
              developer. He assigned me daily tasks, provided guidance, and gave
              feedback on my new features and the content I created. During the
              LIA period, I received support in solving new challenges and
              improving my overall developer skills.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <AnimatedText text='Reflection' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              My experience in web development at Cogwork was fulfilling and
              enriching. <br />
              Despite initially lacking WordPress development experience, I
              quickly adapted to working with technologies like MariaDB, CPanel,
              and Orderland for hosting. <br />
              This opportunity allowed me to gain insights into backend
              components and hosting management, contributing to my growth as a
              developer. <br />
              <br />
              Throughout my internship, I realized the importance of
              strengthening my technical skills to tackle complex projects
              effectively. <br />
              By following established processes and collaborating with a
              dedicated team, I improved my results and efficiency in web
              development tasks. <br />
              Effective communication and problem-solving skills were crucial
              during my interactions with colleagues and mentors, enhancing my
              professional growth. <br />
              <br />
              My time at Cogwork provided practical experience in web
              development and reinforced my commitment to pursuing a career in
              the tech industry. <br />
              Working with innovative technologies and real-world projects gave
              me valuable insights into the future of web development. <br />
              <br />
              Moving forward, I aim to deepen my knowledge in web technologies
              and explore new tools that enhance user experience and application
              functionality. <br />I am eager to apply my internship experiences
              to future projects and contexts, continuing my professional
              development and contributing effectively to the field.
            </p>
          </SlideInLeft>
          <div className='w-full h-16'></div>
          <div className='w-full h-16'></div>
          <div className='w-full h-16'></div>
          <div className='w-full h-20'></div>
          <AnimatedText text='...' className={styles.title4} />
          <SlideInLeft>
            <p className={styles.p}>
              A deeper understanding of how code works behind the scenes and
              various programming concepts can be valuable to spend more time on
              in education.
              <br />
              Work methods like agile work and delivering a Minimum Viable
              Product (MVP) are central in many workplaces, even if their
              application varies.
            </p>
          </SlideInLeft>
          <div className='w-full h-fit mb-8 flex-col justify-start items-center'>
            <h2>
              <Link
                href='https://kalmarsu.se/'
                target='_blank'
                rel='noreferrer noopener'
                className='text-blue-500 hover:underline relative'
              >
                KSU
              </Link>
            </h2>
            <h2>
              <Link
                href='https://aktivaseniorer.com/'
                target='_blank'
                rel='noreferrer noopener'
                className='text-blue-500 hover:underline relative'
              >
                FAS Gamla
              </Link>
            </h2>
            <h2>
              <Link
                href='https://demoforbund.aktivaseniorer.com/'
                target='_blank'
                rel='noreferrer noopener'
                className='text-blue-500 hover:underline relative'
              >
                FAS NYA
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
