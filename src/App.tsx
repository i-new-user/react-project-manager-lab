import styled, { ThemeProvider } from 'styled-components';
import { ProjectHeader } from './components/ProjectHeader';
import { ProjectFooter } from './components/ProjectFooter';
import { ProjectsPage } from './pages/ProjectsPage';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const Page = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding-block: clamp(1.5rem, 5vw, 3rem);
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <ProjectHeader />
        <Main>
          <ProjectsPage />
        </Main>
        <ProjectFooter />
      </Page>
    </ThemeProvider>
  );
}