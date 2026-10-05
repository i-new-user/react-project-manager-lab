import styled from 'styled-components';

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding: 1rem ${({ theme }) => theme.layout.gutter};
  font-size: 0.875rem;
`;

export function ProjectFooter() {
  return (
    <Footer>
      <Content>
        <p>React Project Manager Lab</p>
      </Content>
    </Footer>
  );
}