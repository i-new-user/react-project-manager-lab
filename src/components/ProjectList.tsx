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


export function ProjectList() {
  return (
    <Section aria-labelledby="projects-heading">
      <Title id="projects-heading">Проекты</Title>

      <CardsGrid>
        <ProjectCard title='Изучение React' description='Первый учебный проект' taskCount={5}/>
        <ProjectCard title='Изучение Node js' taskCount={0}/>
        <ProjectCard title='Изучение Typescript' taskCount={0}/>
      </CardsGrid>
    </Section>
  );
}