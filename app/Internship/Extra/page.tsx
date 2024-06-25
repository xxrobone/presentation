import SectionWrapper from '@/components/Section/SectionWrapper';
import React from 'react';
import SKOLAN from '@/public/skolan.jpg';
import Collection from '@/components/SectionCollection/Collection';

const Extra = () => {
  return (
    <div className='w-full'>
      <Collection>
        <SectionWrapper title='The Team' desc='@DeGaming' image={SKOLAN}>
          <p>
            NattGibb är ett uttryck bland spelare där man sitter uppe hela
            natten och spelar tillsammans. Vi kör inte riktigt så länge men
            bjuder in spelare att komma och Gibba tillsammans mellan klockan 18
            och 22. NattGibben har varit väldigt uppskattade och är utmärkta
            tillfällen att lära känna likasinnade gamers i en härlig miljö.
          </p>
          <p>
            Tränare finns på plats under tiden och hjälper till. I övrigt är det
            fritt fram att spela vad man vill tillsammans med andra eller själv
            om man vill det.
          </p>
          <p>
            Kontakta gärna oss om du vill se e-sport på schemat i just din
            skola.
          </p>
          <p>
            När det är dags igen för nästa NattGibb kommer vi att annonsera ut
            det här på hemsidan, via vårt nyhetsbrev och via sociala medier.
          </p>
          <p>
            Viktigt att man inte får äta och dricka vid datorerna och att man
            håller utrustning fräsch, så dricka får enbart tas med i
            återförslutningsbar flaska och eventuellt snacks / mellis ska vara
            kladd och smulfritt (ostbågar är exempel på något som inte funkar).
          </p>
          <p>
            Priset för NattGibb är 300 kr och betalas via swish när du fått en
            bekräftelse på din anmälan. OBS! Går du just nu en av våra
            terminskurser får du rabatt och betalar endast 200 kr för NattGibb.
          </p>
        </SectionWrapper>
     
      </Collection>
    </div>
  );
};

export default Extra;
