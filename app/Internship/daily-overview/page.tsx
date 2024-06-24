'use client';
import React from 'react';

import styles from '../../page.module.css';
import { AnimatedText } from '@/components/animations/AnimatedText';

const DailyOverview = () => {
  return (
    <div className='w-2/3 min-h-full flex flex-col relative md:ml-40 md:mr-40 text-left'>
      <AnimatedText text='Daily Overview' className={styles.title} el='h2' />
      <section className='flex flex-col gap-8 text-base md:text-lg'>
        <h4 className='text-left'>
          I sommar kommer vi att ha två stycken Sommarlovs-LAN. Det första är
          17:e - 20:e juni och det andra är 12:e - 16:e augusti.
        </h4>
        <p>
          Att e-sporta med hos på E-Sports Academy är en rolig aktivitet för
          barn och ungdomar på Värmdö, Gustavsberg och Nacka. Om du letar efter
          något att göra för barnen så kan vår e-sportskola vara en perfekt
          aktivitet för ditt barn. Hos oss står inte bara spelglädjen i fokus
          utan även personlig och social utveckling. Barnen får lära sig vikten
          av teamwork, strategiskt tänkande och kommunikation, vilka är
          värdefulla färdigheter i både spel och verklighet. Genom våra
          e-sportkurser, som leds av passionerade och erfarna tränare, skapar vi
          en miljö där barnen kan växa och utvecklas i sitt spelande.
        </p>
        <p>
          Många föräldrar upplever det som svårt att hitta roliga och
          meningsfulla aktiviteter under skolloven som deras barn faktiskt
          tycker är roliga. En del barn är tveksamma till att ge sig ut på
          aktiviteter tillsammans med andra barn och föredrar att sitta hemma
          framför datorn. Under våra skollovs-LAN får barn och unga chans att
          träffa andra likasinnade och hitta ett sammanhang kring det gemensamma
          intresset för spel.
        </p>
        <p>
          Under skolloven erbjuder E-Sports Academy roliga lovaktiviteter i vår
          lokal i Gustavsberg. Våra aktiviteter under sportlov, påsklov,
          sommarlov, höstlov och jullov erbjuder en mängd spännande upplevelser.
          Aktiviteterna under loven är utformade för att ge barnen en djupare
          inblick i e-sportens värld, samtidigt som de har roligt tillsammans
          och lär känna nya kompisar.
        </p>
        <p>
          Våra aktiviteter under loven är en utmärkt plats för barnen att träffa
          nya vänner med liknande intressen. I en vänlig och stöttande atmosfär
          uppmuntrar vi barnen att dela sina erfarenheter, strategier och
          framgångar, vilket bidrar till en känsla av gemenskap och
          tillhörighet. Det spelar ingen roll om ditt barn är en nybörjare eller
          en erfaren spelare, hos oss finns något för alla.
        </p>
        <p>
          Kom till oss för en rolig aktivitet för barn och unga att göra på
          Värmdö där vi kombinerar nöje, lärande och personlig utveckling. Vi är
          mer än bara ett ställe att spela spel - vi är en community där barnen
          kan växa, utvecklas och ha roligt tillsammans. Ge ditt barn en rolig
          och berikande upplevelse under skolloven hos oss!
        </p>
        <p>
          Man kan vara med halvdag, heldag eller flera dagar. Vi spelar olika
          spel tillsammans och blandar upp det med andra aktiviteter. På
          förmiddagarna och eftermiddagarna e-sportar vi med en paus för
          fruktmellis och någon brytande aktivitet (som Kahoot-quiz, Fall guys
          turnering eller annat). Man väljer själv vad man vill spela och vi
          matchar ihop de deltagare som vill spela samma spel att spela
          tillsammans om de vill. Tränare finns på plats under dagen och hjälper
          till med inloggningar och kan ge lite tips och tricks.
        </p>
        <p>
          Vi bjuder på frukt både förmiddag och eftermiddag. Vill man gå heldag
          finns det flera ställen i närheten som deltagarna kan gå och äta lunch
          på. Man kan även följa med tränarna och äta lunch på restaurang Tyra
          för erbjuder alla deltagare lunch för 110 kr. Vi har tyvärr ingen
          möjlighet att äta lunch i lokalen.
        </p>
        <p>Du väljer själv vilken eller vilka dagar du vill gå på.</p>
        <p>
          Pris för en halvdag: 300 kr Pris för en heldag: 500 kr Pris för hela
          veckan: 2000 kr Anmälan till våra Sommarlovs-LAN sker genom detta
          formulär.
        </p>
      </section>
     
    </div>
  );
};

export default DailyOverview;
