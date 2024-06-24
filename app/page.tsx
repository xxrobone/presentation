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
import Presentation3d from '@/components/Presentation3d'
import { SlideInLeft } from '@/components/animations/reveal/SlideInLeft';
import { Reveal } from '@/components/animations/reveal/Reveal';

import styles from './page.module.css';

const phrase = 'E-sportkurser med fokus på teamwork, fair-play och gemenskap';

const data = [
  { image: '/fortnite.jpg', title: 'Fortnite', description: 'Description 1' },
  { image: '/overwatch.jpg', title: 'Overwatch', description: 'Description 2' },
  { image: '/valorant.jpg', title: 'Valorant', description: 'Description 3' },
  {
    image: '/rocket-league.jpg',
    title: 'Rocket League',
    description: 'Description 4',
  },
  {
    image: '/counter-strike-2.jpg',
    title: 'Counter Strike 2',
    description: 'Description 4',
  },
  {
    image: '/cod-warzone.jpg',
    title: 'Call of duty: Warzone',
    description: 'Description 4',
  },
  {
    image: '/league-of-legends.jpg',
    title: 'League of Legends',
    description: 'Description 4',
  },
  {
    image: '/heartstone.jpg',
    title: 'Heartstone',
    description: 'Description 4',
  },
];

export default function Home() {
  const [showMoney, setShowMoney] = useState(false);
  const [showLoadingSection, setShowLoadingSection] = useState(true);
  const { setSize } = useContext(CursorContext);

  const styledPhrase = phrase
    .split('')
    .map((char, index) => (
      <Magnetic key={index}>{char === ' ' ? '\u00A0' : char}</Magnetic>
    ));

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
          <section className={styles.section}>
          <p
              style={{
                color: '#e0e0e0',
                fontSize: '1.5rem',
                textAlign: 'left',
              }}
            >
             I wanna give a huge thanks to{' '}
              <span style={{ color: 'aqua', fontWeight: 700 }}>
                Anik Devaugn{' '}
              </span>{' '}
              - The designer, who connected me with my Mentor{' '}
              <span style={{ color: 'aqua', fontWeight: 700 }}>
                Mikeal Bolmstam
              </span>
              , who is a fullstack developer, Lead developer at DeGaming <br />
              <span style={{ color: 'aqua', fontWeight: 700 }}>
                Richard Larsson
              </span>{' '}
              is the CTO - And Co-founder at the Gaming - Boss man.
              <br />
              And{' '}
              <span style={{ color: 'aqua', fontWeight: 700 }}>
                Emil Ahmad
              </span>{' '}
              is the CEO and Co-Founder BIG BOSS MAN!
              <br />
              <span
                style={{
                  color: '#D548E9',
                  textShadow: '1px 1px 1px aqua',
                  fontSize: '2rem',
                  fontWeight: 700,
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                {styledPhrase}
              </span>
              <br /> <br />
              It&apos;s and awesome team and I&apos;m greatful I had the change
              to work with these people 🙏
            </p>
            <div
              className={styles.center}
              onMouseEnter={() => {
                setSize('xlarge');
                console.log('xlarge');
              }}
              onMouseLeave={() => setSize('small')}
            >
              {/*  <h3 className={styles.phrase}>{styledPhrase}</h3> */}
              <h3 className={styles.phrase}>
                E-sportkurser med fokus på teamwork, fair-play och gemenskap
              </h3>
              <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <SlideInLeft>
                  <p className={styles.p}>
                    Utveckla ditt spelande tillsammans med en erfaren coach och
                    motiverade lagkamrater.
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
                    &nbsp; Tränarledda e-sportkurser för barn och unga i
                    åldrarna 8 - 18 år.
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
                    &nbsp; Träna e-sport med andra likasinnade och upplev
                    lagidrottens gemenskap fast i e-sportens spännande värld.
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
                    &nbsp; Ta ditt spelande till nästa nivå i en trygg miljö där
                    vi fokuserar på laganda och gemenskap.
                  </p>
                </SlideInLeft>
                <br />
                <SlideInLeft>
                  <p className={styles.p}>
                    I vår E-sportskola i Gustavsberg utanför Stockholm får barn
                    och unga i åldrarna 8 - 18 år möjlighet att spela
                    tillsammans med andra barn i samma åldrar med en tränare som
                    coachar, stöttar och motiverar. I vår lokal på Värmdö finns
                    12 spelriggar med allt som behövs för att e-sporta och ha
                    roligt tillsammans.
                  </p>
                </SlideInLeft>
                <SlideInLeft>
                  <p className={styles.p}>
                    Under våra lärarledda träningspass går en av våra coacher
                    igenom grunderna i spelet och förklarar vad var och en bör
                    tänka på för att spela sin roll i laget på bästa sätt.{' '}
                    <br />
                    Under matcherna ger coachen personliga tips på vad spelaren
                    bör tänka på och hur spelaren bör agera i olika situationer.
                    Efter varje match går vi gemensamt igenom vad som gick bra
                    och vad som kan förbättras. <br /> Våra ledord som
                    genomsyrar vår verksamhet är gemenskap, personlig utveckling
                    och fair-play.
                  </p>
                </SlideInLeft>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.grid}>
              <Circle />
              <a
                href='#'
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => {
                  setSize('unity');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  Gemenskap <span>-&gt;</span>
                </h2>
                <p>
                  E-Sport är en lagidrott. <br />
                  Att spela fotboll eller klassik lagidrott är inte
                  nödvändigtvis något för alla. Men hos oss får du uppleva allt
                  det positiva med lagidrotten och gemenskapen av att spela i
                  ett lag. <br />
                  Vi peppar varandra och lägger stort fokus på att det ska vara
                  kul att spela tillsammans. <br />
                  Att e-sporta tillsammans hos oss på E-Sports Academy är ett
                  utmärkt sätt att komma ut och träffa likasinnade och lära
                  känna nya vänner.
                </p>
              </a>

              <a
                href='#'
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => {
                  setSize('evolution');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  Personlig utveckling <span>-&gt;</span>
                </h2>
                <p>
                  Alla våra kurser leds av en erfaren tränare som hjälper dig
                  att utveckla ditt spelande. <br /> Att få personlig
                  handledning kring just ditt spelande är ett effektivt sätt att
                  bli bättre och utvecklas som spelare.
                  <br /> Hos oss får du handledning i såväl ditt eget spelande
                  samt hur du på bästa sätt kan uppfylla din roll i laget och
                  spela tillsammans med dina lagkamrater på bästa sätt. <br />
                  Att känna att man utvecklas som spelare och att man kan bidrar
                  till sitt lag genom att bli en bättre lagspelare är en otrolig
                  känsla som vi vill att alla ska få uppleva.!
                </p>
              </a>

              <a
                href='#'
                className={styles.card}
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={() => {
                  setSize('fairplay');
                }}
                onMouseLeave={() => setSize('small')}
              >
                <h2>
                  Fair-play<span>-&gt;</span>
                </h2>
                <p>
                  E-sportsscenen är en relativt ny arena som fortfarande tampas
                  med en del problem. <br />
                  Vi vill att alla som ägnar sig åt e-sport ska känna sig trygga
                  och bekväma och kunna spela utan att utsättas för hot och
                  trakasserier.
                  <br /> Därför har vi valt att lägga stor vikt vid schyst
                  uppträdande och ett respektfullt språkbruk. <br />
                  Glåpord och trakasserier hör inte hemma i e-sporten! <br />
                  Vi är alla olika, men hos oss kan du räkna med att bli
                  behandlad med hänsyn och respekt oavsett vem du är.
                </p>
              </a>
            </div>
          </section>
          <section className={styles.section} id='presentation'>
            <AnimatedText
              text='Presentation threejs'
              className={styles.title}
              el='h2'
            />
            <Presentation3d />
            </section>
          <section className={styles.section}>
            <AnimatedText
              text='VÅRA AKTIVITETER'
              className={styles.title}
              el='h2'
            />
            <SlideInLeft>
              <p style={{ textAlign: 'left', marginBottom: '2rem' }}>
                E-Sports Academy är en samlingsplats för barn och unga som
                brinner för E-Sport. <br />
                Hos oss kan du gå tränarledda e-sportkurser i en rad olika spel.
                <br /> Kurserna sträcker sig över en termin där höstterminen
                startar i augusti och vårterminen drar igång i januari. Vi
                erbjuder olika kurser för olika nivåer och åldrar.
                <br /> <br />
                För dig som inte har möjlighet att vara med på plats i våra
                lokaler utanför Stockholm erbjuder vi även E-Sport Onlinekurser
                på distans. <br /> <br /> Under skolloven ordnar vi dagläger
                under vardagar mellan klockan 9 och 16. Vi e-sportar tillsammans
                och blandar upp det med andra roliga aktiviteter så som
                Kahoot-quiz och Fall guys turneringar. Man väljer själv vad man
                vill spela och tränare finns på plats under dagen och hjälper
                till med inloggningar och ger tips och tricks och stöttning
                under spelandet.
                <br /> <br /> Med jämna mellanrum arrangerar vi även NattGibb på
                helgkvällar mellan klockan 18 och 22. En coach finns alltid på
                plats under hela passet och ser till så att alla har det bra.
                Det är fritt fram att spela vad man vill under NattGibben.{' '}
                <br /> För skolor som vill erbjuda E-Sport på schemat erbjuder
                vi även helhetslösningar där vi tillhandahåller lokal,
                utrustning och tränare.
                <br />
                <br /> Sedan höstterminen 2023 samarbetar vi med Gustavsbergs
                Gymnasium som erbjuder e-sport i form av kurserna Specialidrott
                1 och 2 som sträcker sig över totalt sex terminer. Läs mer om
                våra aktiviteter här:
              </p>
            </SlideInLeft>
          </section>

        
        </div>

        <section className={styles.center}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <AnimatedText
              text=' VI SPELAR FÖLJANDE SPEL'
              className={styles.title}
              el='h2'
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
        {/*  <section className={styles.section}>
          <PreviewWrapper />
        </section>  */}
        {/*  <SectionCollection /> */}
      </>
    </main>
  );
}
