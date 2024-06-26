'use client';
import Section from '@/components/Section';
import Evo from '@/public/laptop.jpg';
import Unity from '@/public/codealong.jpg';
import Tasks from '@/public/tasks.jpg';
import Mentor from '@/public/mentor.jpg';
import Standup from '@/public/standup.jpg';
import Reflection from '@/public/reflection.jpg';
import Fairplay from '@/public/degaming4.jpg';
import DegamingI from '@/public/degaming3.jpg';
import Degaming from '@/public/degaming2.jpg';
import Lenis from '@studio-freight/lenis';

import { useEffect, useState } from 'react';

export default function SectionCollection() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='w-full h-full relative z-20'>
      <Section image={Evo} title='Summary' desc='' tag=''>
        <p className='text-2xl drop-shadow-md'>
          During my internship as a frontend developer at DeGaming Group, I
          immersed myself in advanced web development technologies and explored
          the integration of Web-2 and introduction to Web-3 within the iGaming
          industry. My main project involved using Next.js, Wagmi, Viem, MUI,
          Recharts, and TypeScript to build the client-side of Liquidity House
          (LH). This report outlines my tasks, the tools and technologies I
          utilized, the guidance I received, and reflections on my learning
          experience during this period.
        </p>
      </Section>
      <Section image={Unity} title='Purpose' desc='Makes it easier' tag=''>
        <p className='text-2xl drop-shadow-md'>
          The purpose of my internship was to apply theoretical and practical
          knowledge gained from my education in a real-world setting at a
          company. It provided an opportunity to work in a professional team
          environment, tackle real projects, and understand communication and
          problem-solving dynamics as a developer in the workforce.
        </p>
      </Section>
      <Section
        image={Fairplay}
        title='Company Description'
        desc='DeGaming Group'
        tag=''
      >
        <p className='text-2xl drop-shadow-md'>
          DeGaming is a pioneering on-chain gaming platform revolutionizing the
          iGaming industry with advanced Web3 technology. The company offers a
          wide range of games including casino, sports betting, poker, and
          lottery, emphasizing security and user-friendliness through
          integration of digital wallets and support for all blockchains.
        </p>
      </Section>
      <Section
        image={Tasks}
        title='Responsibilities'
        desc='DeGaming Group'
        tag=''
      >
        <p className='text-2xl drop-shadow-md pb-8'>
          During my internship, I worked with the following technologies and
          tools:
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-2/3'>
          <div>
            <h3 className='font-bold text-lg mb-2'>Technologies Used</h3>
            <ul>
              <li>Next.js</li>
              <li>Wagmi</li>
              <li>Viem</li>
              <li>MUI (Material-UI)</li>
              <li>Recharts</li>
              <li>TypeScript</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-2'>Tools Used</h3>
            <ul>
              <li>Slack</li>
              <li>Github</li>
              <li>VS Code</li>
              <li>Vercel</li>
              <li>Email</li>
              <li>Teams</li>
              <li>Notion</li>
              <li>Postman</li>
              <li>Figma</li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-2'>Examples of Tasks</h3>
            <ul>
              <li>
                Implemented designs from Figma into functional web pages
                (frontend).
              </li>
              <li>Debugged and troubleshot projects.</li>
              <li>
                Developed user interfaces for liquidity management and profit
                withdrawal.
              </li>
              <li>Integrated backend services for data exchange.</li>
              <li>Created and managed mock data for development purposes.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section
        image={Mentor}
        title='Mentorship'
        desc='Mikael Bolmstam'
        tag=''
      >
        <p className='text-2xl drop-shadow-md'>
          I was fortunate to be mentored by Mikael Bolmstam, an experienced
          full-stack developer, who provided continuous guidance and
          constructive feedback throughout my internship. His mentorship was
          invaluable in refining my focus and approach to tasks.
        </p>
      </Section>
      <Section
        image={Standup}
        title='Execution and Results'
        desc='How is your progress?'
        tag=''
      >
        <p className='text-2xl drop-shadow-md'>
          Agile principles were applied in managing and delivering the Liquidity
          House project at DeGaming. Scrum methodology with regular sprints
          ensured continuous delivery and feedback loops. As a frontend
          developer, I integrated Web3 technologies like Wagmi and Viem for
          smart contracts and blockchain interactions, supporting DeGaming&apos;s
          strategy in pioneering iGaming through innovative technological
          solutions.
        </p>
      </Section>
      <Section image={Reflection} title='Reflection' desc='Did i like it?' tag=''>
        <p className='text-2xl drop-shadow-md'>
          My internship at DeGaming deepened my understanding of web development
          and the integration of blockchain technology in iGaming. It
          underscored the importance of collaboration, effective communication,
          and systematic problem-solving in a professional setting.
        </p>
      </Section>
      <Section
        image={DegamingI}
        title='Conclusion and Discussion'
        desc='The end?!'
        tag=''
      >
        <p className='text-2xl drop-shadow-md'>
          Reflecting on my experience, I identified areas where process
          improvements could enhance efficiency and workflow within the team.
          Recommendations included implementing test automation, increasing code
          review frequency, improving debugging methods, and furthering backend
          development skills.
        </p>
      </Section>
      <Section image={Degaming} title='Recommendation' desc='YES 100%' tag=''>
        <p className='text-2xl drop-shadow-md'>
          I highly recommend DeGaming Group for anyone considering an internship
          placement. It provided a challenging yet supportive environment to
          work with cutting-edge technologies and gain practical experience that
          significantly enhanced my technical skills and professional growth.
        </p>
      </Section>
    </div>
  );
}
