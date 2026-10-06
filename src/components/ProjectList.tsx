import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';

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

const initialProjects: Project[] = [
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

  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleOpenProject = (projectId: string) => {
    alert(`Открываем проект с id: ${projectId}`)
  }

  const handleAddProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: 'Новый проект',
      taskCount: 0,
    }
    setProjects((previous) => [...previous, newProject])
  }

  const handleDeleteProject = (projectId: string) => {
    setProjects((previous) => previous.filter((project) => project.id !== projectId));
  };

  const handleAddTask = (projectId: string) => {
    setProjects((previous) =>
      previous.map((project) =>
        project.id === projectId
          ? { ...project, taskCount: project.taskCount + 1 }
          : project
      )
    );
  };

  return (
    <Section aria-labelledby="projects-heading">

      <Title id="projects-heading">Проекты</Title>

      <button type="button" onClick={handleAddProject}>Добавить проект</button>

      <CardsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            taskCount={project.taskCount}
            onOpen={() => handleOpenProject(project.id)}
            onDelete={() => handleDeleteProject(project.id)}
            onAddTask={() => handleAddTask(project.id)}
          />
        ))}
      </CardsGrid>
    </Section>
  );
}