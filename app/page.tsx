'use client';
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { CursorContext } from '@/components/Cursor/CursorProvider';
import GridLines from '@/components/Gridlines';
import BgEllipse from '@/components/bgellipse/BgEllipse';
import { AnimatedText } from '@/components/animations/AnimatedText';
import Circle from '@/components/animations/Circle';
import TopSectionsWrapper from '@/components/TopSectionsWrapper';
import Magnetic from '@/components/magnetic/magnetic';
import PreviewWrapper from '@/components/PreviewWrapper';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import SectionCollection from '@/components/SectionCollection';
import Grid from '@/components/Grid/';
import GridItem from '@/components/Grid/GridItem';
import Presentation3d from '@/components/Presentation3d';
import { SlideInLeft } from '@/components/animations/reveal/SlideInLeft';
import { Reveal } from '@/components/animations/reveal/Reveal';
import Button from '@/components/Button';

import styles from './page.module.css';

const data = [
  { image: '/chillroom.jpg', title: 'Title', description: 'Description 1' },
  { image: '/chillroom.jpg', title: 'Title', description: 'Description 2' },
  { image: '/chillroom.jpg', title: 'Title', description: 'Description 3' },
  {
    image: '/chillroom.jpg',
    title: 'Title',
    description: 'Description 4',
  },
  {
    image: '/chillroom.jpg',
    title: 'Title',
    description: 'Description 4',
  },
  {
    image: '/chillroom.jpg',
    title: 'Title',
    description: 'Description 4',
  },
  {
    image: '/chillroom.jpg',
    title: 'Title',
    description: 'Description 4',
  },
  {
    image: '/chillroom.jpg',
    title: 'Title',
    description: 'Description 4',
  },
];

interface MainProps {}

const Home: React.FC<MainProps> = (props) => {
  const [showMoney, setShowMoney] = useState(false);
  const [showLoadingSection, setShowLoadingSection] = useState(true);
  const { setSize } = useContext(CursorContext);

  const handleClick = () => {
    setShowMoney(true);
    setTimeout(() => {
      setShowMoney(false);
    }, 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingSection(false);
    }, 5800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <>
        <div className='bg'></div>
        <BgEllipse />
        <GridLines />
        <TopSectionsWrapper />
        <div className={styles.contentWrapper}>
          <section className={styles.section} id='read'>
            <div className={styles.center}>
              <p>
                I wanna give a huge thanks to{' '}
                <span style={{ color: 'aqua', fontWeight: 700 }}>
                  Anik Devaugn{' '}
                </span>{' '}
                - The designer, who connected me with my Mentor{' '}
                <span style={{ color: 'aqua', fontWeight: 700 }}>
                  Mikeal Bolmstam
                </span>
                , who is a fullstack developer, Lead developer at DeGaming{' '}
                <br />
                <br />
                <span
                  style={{
                    color: '#D548E9',
                    fontWeight: 700,
                    cursor: 'pointer',
                    margin: '2rem 0 1rem',
                    pointerEvents: 'auto',
                  }}
                >
                  What can I say? these people made my time awesome at DeGaming!
                  🙏
                </span>
                <br />
                <br />
                Thank you{' '}
                <span style={{ color: 'aqua', fontWeight: 700 }}>
                  Richard Larsson
                </span>{' '}
                the CTO - And Co-founder at DeGaming - BOSS! &{' '}
                <span style={{ color: 'aqua', fontWeight: 700 }}>
                  Emil Ahmad
                </span>{' '}
                the CEO and Co-Founder of DeGaming - BOSS MAN!
                <br />
              </p>
              <div
                onMouseEnter={() => {
                  setSize('large');
                }}
                onMouseLeave={() => setSize('small')}
                className='pointer-events-auto cursor-pointer'
              >
                <Button theme='outlined'>
                  <a href='/presentation#team'>The team</a>
                </Button>
              </div>
            </div>
            <div
              className={styles.center}
              onMouseEnter={() => {
                setSize('xlarge');
                console.log('xlarge');
              }}
              onMouseLeave={() => setSize('small')}
            >
              <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <SlideInLeft>
                  <p style={{ textAlign: 'left', marginBottom: '2rem' }}>
                    DeGaming is positioned at the vanguard of
                    blockchain-integrated gambling solutions. They provide an
                    interactive, safe, and transparent space for their gaming
                    clients to experience the future of iGaming
                  </p>
                </SlideInLeft>
                <SlideInLeft>
                  <p
                    className={styles.p}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--primary)',
                    }}
                  >
                    <span style={{ color: 'white' }}>
                      <TfiArrowCircleRight />
                    </span>
                    They`re an online platform. Pioneering a new ecnomic model
                    for the industry.
                  </p>
                </SlideInLeft>
                <SlideInLeft>
                  <p
                    className={styles.p}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--primary)',
                    }}
                  >
                    <span style={{ color: 'white' }}>
                      <TfiArrowCircleRight />
                    </span>
                    Creating Web3 Casino Bankroll Liquidity Provider
                    <br />
                    Seizing The Opportunity To Grow Investments In An Exciting,
                    Evolving Market.
                  </p>
                </SlideInLeft>
                <SlideInLeft>
                  <p
                    className={styles.p}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--primary)',
                    }}
                  >
                    <span style={{ color: 'white' }}>
                      <TfiArrowCircleRight />
                    </span>
                    Degaming makes it possible to instantly deploy a Casino and
                    start growing your own market!
                    <br /> with their customizable SDK
                  </p>
                </SlideInLeft>
                <br />
                <AnimatedText text='Welcome!' className={styles.title} />
                <SlideInLeft>
                  <p className={styles.p}>
                    ...to my internship presentation at DeGaming Group. Here,
                    you can explore my work with advanced web technologies like
                    Next.js, Wagmi, Viem, MUI, Recharts, and Typescript.
                    Discover my key tasks, the tools I used, the mentorship I
                    received, and the valuable lessons I learned. Enjoy!
                  </p>
                </SlideInLeft>
                <AnimatedText text='Purpose' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    The purpose of the internship (LIA) is to practically apply
                    theoretical and practical knowledge from the education and
                    gain experience working on real projects. The internship
                    offers a chance to be part of a professional team, work on
                    real assignments, and understand how communication and
                    problem-solving function in the profession and the working
                    life of a developer.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Tech' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    The technologies i used was... Next.js: For client-side
                    rendering and building scalable web applications. Wagmi and
                    Viem: For integrating smart contracts and Web3
                    functionality. Material-UI (MUI): For implementing user
                    interfaces and components. Recharts: For creating graphs.
                    Typescript: For typed JavaScript development. GraphQL: For
                    fetching data.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Tools' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    The tools i used was... Slack: For communication. Email and
                    Teams: Additional communication tools. Notion: For planning
                    and organizing tasks and sprints. Postman: For testing API
                    endpoints. Figma: For design implementation.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Tasks' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    Some of the tasks i did at the Gaming was... Implementing
                    designs from Figma into functional web pages. Developing
                    user interfaces for managing liquidity and withdrawals.
                    Integrating backend services for data exchange. Creating and
                    managing mock data for development purposes.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Work' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    Implementing designs from Figma into functional web pages. -
                    Developing user interfaces for managing liquidity and
                    withdrawals. - Integrating backend services for data
                    exchange. - Creating and managing mock data for development
                    purposes.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Features' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    mplemented Features: Liquidity Selection and Management:
                    Users can choose a liquidity provider and place their
                    liquidity with the selected casino or operator. I
                    implemented the interface and functionality to make this
                    seamless while maintaining security and user-friendliness.
                    Profit and Liquidity Overview: Users can view their current
                    profit and withdraw their profit or liquidity as desired. I
                    designed and integrated this so that users have a clear
                    overview of their investments and current status. Currency
                    Exchange and Network Switching: An essential part of the
                    platform was enabling easy currency exchange between
                    different tokens and networks, such as USDT, USD, and other
                    relevant tokens. I implemented the necessary functionality
                    to ensure smooth transactions and user experience.
                    Statistics and Dynamic Data: To provide users with insights
                    into platform activity and performance, I included features
                    to display statistics such as Total Value Locked (TVL),
                    trading volume, and other relevant data. This helps users
                    make informed decisions about their investments.
                  </p>
                </SlideInLeft>
                <AnimatedText text='My Mentor' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    My mentor was Mikael Bolmstam, an experienced fullstack
                    developer. He assigned me tasks, provided guidance, and gave
                    feedback on my work. During the LIA period, I received
                    support in solving technical challenges and improving my
                    skills in frontend development and project management.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Reflection' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    My goals and hopes of working with frameworks like React,
                    Next.js, and the JavaScript programming language were
                    fulfilled during my LIA, which was fantastic. Despite not
                    having much experience in fullstack development, I got to
                    work with some backend components like MongoDB and Node.js.
                    This was a challenge that helped me grow as a developer and
                    understand the importance of collaborating across technical
                    boundaries. An important insight from my LIA is the need to
                    strengthen my skills in troubleshooting and system design.
                    Despite my knowledge and previous experience, this proved to
                    be a key factor in handling complex projects like Liquidity
                    House effectively. I have learned that by being methodical
                    and following established processes, I can improve my
                    results and the efficiency of my efforts in the future.
                    Working with a dedicated team like DeGaming Group has also
                    taught me the importance of effective communication and
                    problem-solving. Through daily interactions with colleagues
                    and mentors, I have grown as an individual contributor and
                    as part of a larger organization. Being able to communicate
                    effectively and understand others&apos; perspectives has
                    been crucial in achieving our common goals during the LIA
                    period. My time at DeGaming has not only provided me with
                    valuable practical experience in modern web development and
                    integrating blockchain technology within iGaming but has
                    also strengthened my conviction that I have chosen the right
                    career. Having the opportunity to work with exciting
                    technologies and real projects has been an inspiring glimpse
                    into what the future holds in the IT industry. For my
                    continued development as a developer, I am particularly
                    interested in deepening my knowledge in backend and frontend
                    development, exploring new technologies that can improve
                    user experience and functionality of web applications. I
                    also look forward to applying my LIA experiences in future
                    projects and contexts and continuing to learn and grow
                    professionally in my field.
                  </p>
                </SlideInLeft>
                <AnimatedText text='Conclusion' className={styles.title4} />
                <SlideInLeft>
                  <p className={styles.p}>
                    Conclusion and Discussion... <br />
                    Comparing theoretical education with practical experience
                    from the LIA shows that the entire IT industry is constantly
                    evolving. There are many ways to solve problems and work as
                    a developer, both individually and in teams, depending on
                    personal preferences, customer orders, and specific
                    requests. It is essential to be flexible and open to
                    suggestions and changes, as each workplace has its methods,
                    tools, and communication styles. A deeper understanding of
                    how code works behind the scenes and various programming
                    concepts can be valuable to spend more time on in education.
                    Work methods like agile work and delivering a Minimum Viable
                    Product (MVP) are central in many workplaces, even if their
                    application varies.
                  </p>
                </SlideInLeft>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.grid}>
              <Circle />
              <a
                href='https://degaming.io'
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => {
                  setSize('degaming');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  DeGaming <span>-&gt;</span>
                </h2>
                <p>
                  {' '}
                  they`re an online platform. Pioneering a new ecnomic model for
                  the industry.
                </p>
              </a>

              <a
                href='/project'
                className={styles.card}
                onMouseEnter={() => {
                  setSize('mask');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  My main project <span>-&gt;</span>
                </h2>
                <p>
                  The project Liquidity House i worked on during my internships
                  final stage at the gaming
                </p>
              </a>

              <a
                href='https://gls-development.vercel.app/'
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => {
                  setSize('crypto');
                  console.log('mask3');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  GLS<span>-&gt;</span>
                </h2>
                <p>
                  Explore Web3 Casino Bankroll Liquidity Provider And Seize The
                  Opportunity To Grow Your Investments In An Exciting, Evolving
                  Market.{' '}
                </p>
              </a>

              <a
                href='https://play.casin0x.io/'
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => {
                  setSize('casinox');
                  console.log('mask4');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  Deploy a Casino <span>-&gt;</span>
                </h2>
                <p>
                  Instantly deploy your next Casino and start growing your own
                  market! with our customizable SDK
                  <br />
                  <br />
                  Here you can see Casin0x as an live example
                </p>
              </a>
            </div>
          </section>
          <section className={styles.section} id='presentation'>
            <AnimatedText
              text='Presentation threejs'
              className={styles.title4}
            />
            <Presentation3d />
          </section>
          <section className={styles.section}>
            <AnimatedText text='Thank you' className={styles.title} />
            <SlideInLeft>
              <p style={{ textAlign: 'left', marginBottom: '2rem' }}>
                I wanna give a huge thanks to the CME staff and teachers
                <br />
                once again thank you DeGaming Group for the time and giving me
                the change to work with such an awesome team
                <br />
              </p>
            </SlideInLeft>
          </section>
        </div>

        <section className='w-full py-40 px-20'>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <AnimatedText
              text='Maybe adding some extra'
              className={styles.title4}
            />
          </div>

          <Grid>
            {data.map((item, index) => (
              <GridItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </Grid>
        </section>
      </>
    </main>
  );
};

export default Home;
