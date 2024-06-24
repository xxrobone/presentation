import SectionWrapper from '@/components/Section/SectionWrapper';
import React from 'react';
import SKOLAN from '@/public/skolan.jpg';
import Fritids from '@/public/fritids.jpg';
import Collection from '@/components/SectionCollection/Collection';

const Skolan = () => {
  return (
    <div className='w-full min-h-full flex flex-col relative'>
      <Collection>
        <SectionWrapper
          title='E-Sport i grundskola och gymnasium'
          desc='För skolor'
          image={SKOLAN}
        >
          <p>
            Att som skola erbjuda e-sport på schemat blir allt vanligare.
            E-Sport är sedan 2023 invalt i Riksidrottsförbundet och börjar sakta
            men säkert uppnå samma status som den traditionella idrotten. Allt
            fler elever söker sig till skolor där de får chansen att fördjupa
            sig i sitt intresse för e-sporten. Vi på E-Sports Academy erbjuder
            helhetslösningar för skolor som vill erbjuda sina elever e-sport på
            schemat.
          </p>
          <p>
            Sedan höstterminen 2023 samarbetar vi med Gustavsbergs Gymnasium som
            erbjuder e-sport i form av Specialidrott 1 och 2. Två gånger i
            veckan kommer upp till 14 elever till vår lokal i Gustavsberg för
            att träna e-sport tillsammans med en av våra tränare. E-Sports
            Academy tillhandahåller utrustning, lokal, en kvalificerad tränare
            och allt annat som behövs för att bedriva en kvalitativ
            undervisning.
          </p>
          <p>
            Kontakta gärna oss om du vill se e-sport på schemat i just din
            skola.
          </p>
        </SectionWrapper>
        <SectionWrapper
          title='E-sport i fritidsverksamhet'
          desc='För fritids'
          image={Fritids}
        >
          <p>
            Att barnens intresse för fritidsverksamheten börjar att avta när
            barnen kommer upp i åldrarna 10 – 11 år är något som många
            fritidsverksamheter kämpar med. Att erbjuda barnen att e-sporta
            tillsammans är en utmärkt aktivitet som tränar barnens
            samarbetsförmåga och kognitiva egenskaper samtidigt som det är
            roligt och uppskattat bland barnen.
          </p>
          <p>
            Vi på E-Sports Academy kan ta emot upp till 12 barn åt gången som
            vill komma och e-sporta hos oss. Vi erbjuder både engångstillfällen
            och regelbundna speltillfällen. Kontakta oss så ska vi försöka ta
            fram ett upplägg som passar just er verksamhet.
          </p>
        </SectionWrapper>
      </Collection>
    </div>
  );
};

export default Skolan;
