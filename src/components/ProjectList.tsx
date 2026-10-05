import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';

const Section = styled.section`
  min-width: 0;
  display: grid;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 2rem);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 250px), 1fr)
  );
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
`;


type Project = {
  id: string;
  title: string;
  description?: string;
  taskCount: number;
};

const projects: Project[] = [
  {
    id: 'react',
    title: 'Изучение React',
    description: 'Первый учебный проект',
    taskCount: 5,
  },
  {
    id: 'node',
    title: 'Изучение Node.js',
    taskCount: 0,
  },
  {
    id: 'typescript',
    title: 'Изучение TypeScript',
    taskCount: 3,
  },
  {
    id: 'mongodb',
    title: 'Изучение Mongodb',
    description: 'Первый учебный проект',
    taskCount: 5,
  },
];


export function ProjectList() {
  return (
    <Section aria-labelledby="projects-heading">
      <Title id="projects-heading">Проекты</Title>

      <CardsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            taskCount={project.taskCount}
          />
        ))}
      </CardsGrid>
    </Section>
  );
}