import styled from 'styled-components';
import { ProjectList } from '../components/ProjectList';

const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};
`;

export function ProjectsPage() {
  return (
    <Content>
      <ProjectList />
    </Content>
  );
}