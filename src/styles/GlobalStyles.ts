import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: system-ui, sans-serif;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  button, input, textarea, select {
    font: inherit;
  }

  img, video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }
`;