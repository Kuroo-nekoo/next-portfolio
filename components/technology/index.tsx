import * as React from 'react';
import TechCard from './card';

const Technologies = () => {
  const cardShadowColor = ['box-shadow-card-emerald', 'box-shadow-card-rose'];
  return (
    <div className='px-56 h-screen pt-36'>
      <div className='text-6xl font-semibold'>Technologies</div>
      I've worked with a range technologies in the web development world. From
      Front-end to Back-end and UI/UX
      <div className='flex space-x-6 px-16'>
        <TechCard
          title='Front-end'
          contents={['Reactjs', 'Nextjs']}
          shadowColor={cardShadowColor[0]}
        ></TechCard>
        <TechCard
          title='Back-end'
          contents={['Nodejs', 'Expressjs', 'Nestjs']}
          shadowColor={cardShadowColor[1]}
        ></TechCard>
        <TechCard
          title='UI/UX'
          contents={['React.js', 'Next.js']}
          shadowColor={cardShadowColor[0]}
        ></TechCard>
      </div>
    </div>
  );
};

export default Technologies;
