import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};
`;

export const Header = styled.header`
  padding-block: clamp(1rem, 3vw, 1.5rem);
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.2;
`;

export const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding-block: clamp(1.5rem, 5vw, 3rem);
`;

export const Panel = styled.section`
  min-width: 0;
  display: grid;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 2rem);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
`;

export const Footer = styled.footer`
  padding-block: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;