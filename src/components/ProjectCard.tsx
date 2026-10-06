import styled from "styled-components";
import type { MouseEvent } from "react";

type ProjectCardProps = {
    title: string
    description?: string
    taskCount: number
    hidden?: boolean
    onOpen: () => void
}

export const ProjectCard = ({title, description='Описание пока не добавлено', taskCount, hidden=false, onOpen}: ProjectCardProps) => {

    if(hidden){
        return null
    }

    const handleOpen = () => {
        alert(`Открываем проект: ${title}`);
    }

    const handleDetailsClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        onOpen()
    }
    
    return(
        <Article>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{taskCount > 0 ? `Задач: ${taskCount}` : `Задач пока нет`}</p>
            {taskCount > 0 && <p>Есть активные задачи</p>}

            <Button type='button' onClick={handleOpen}>Открыть проект</Button>

            <a href="/projects" onClick={handleDetailsClick}>Подробнее</a>

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

const Button = styled.button`
  min-width: 0;
  padding: clamp(1rem, 3vw, 1.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;

  gap: 0.75rem;
`;