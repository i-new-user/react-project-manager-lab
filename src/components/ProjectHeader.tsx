import styled from 'styled-components';

const Header = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding: 1.25rem ${({ theme }) => theme.layout.gutter};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.2;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
`;

export function ProjectHeader() {
  const title = 'Менеджер проектов';

  return (
    <Header>
      <Content>
        <Title>{title}</Title>
        <Description>Проекты и задачи</Description>
      </Content>
    </Header>
  );
}