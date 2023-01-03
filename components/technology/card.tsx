import * as React from 'react';

interface TechCardProps {
  title: string;
  contents: string[];
  shadowColor: string;
}

const TechCard = ({ title, contents, shadowColor }: TechCardProps) => {
  return (
    <div className={`border-2 rounded border-black w-4/12 p-4 ${shadowColor}`}>
      <div className='text-2xl font-semibold'>{title}</div>
      <div>Experience with</div>
      {contents.map((content, index) => {
        return <div key={index}>{content}</div>;
      })}
    </div>
  );
};

export default TechCard;
