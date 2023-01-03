import * as React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  githubLink,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default ProjectCard;
