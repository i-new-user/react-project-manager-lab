import styled from "styled-components";
import type { MouseEvent } from "react";
import { useState } from "react";

type ProjectCardProps = {
    title: string
    description?: string
    taskCount: number
    hidden?: boolean
    onOpen: () => void
    onDelete: () => void
    onAddTask: () => void;
}

export const ProjectCard = ({title, description='Описание пока не добавлено', taskCount, hidden=false, onOpen, onDelete, onAddTask}: ProjectCardProps) => {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
    const [clickCount, setClickCount] = useState(0);


    if(hidden){
        return null
    }

    const handleDetailsClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        onOpen()
    }
    
    return(
        <Article>
            <h3>{title}</h3>

            <p>{taskCount > 0 ? `Задач: ${taskCount}` : `Задач пока нет`}</p>
            {isDescriptionVisible && <p>{description}</p>}

            <Button type="button" onClick={() => { setIsDescriptionVisible((previous) => !previous)}}>
                {isDescriptionVisible ? 'Скрыть описание' : 'Показать описание'}
            </Button>

            <a href="/projects" onClick={handleDetailsClick}>Подробнее</a>

            <p>{clickCount}</p>
            <Button type="button" onClick={() => { setClickCount((clickCount) => clickCount + 1)}}>
                plus
            </Button>

            <Button type="button" onClick={onDelete}>Удалить проект</Button>

            <Button type="button" onClick={onAddTask}>Добавить задачу</Button>

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