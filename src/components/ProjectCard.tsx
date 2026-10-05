import styled from "styled-components";

type ProjectCardProps = {
    title: string
    description?: string
    taskCount: number
}

export const ProjectCard = ({title, description='Описание пока не добавлено', taskCount}: ProjectCardProps) => {
    return(
        <Article>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Задач: {taskCount}</p>
        </Article>
    )
}

const Article = styled.article`
  min-width: 0;
  padding: clamp(1rem, 3vw, 1.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;