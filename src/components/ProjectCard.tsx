import styled from "styled-components";

export const ProjectCard = () => {
    return(
        <Article>
            <h3>Изучение React</h3>
            <p>Первый учебный проект</p>
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