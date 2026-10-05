export const theme = {
  colors: {
    background: '#f4f6fa',
    surface: '#ffffff',
    text: '#182230',
    muted: '#526174',
    border: '#dce3ec',
    primary: '#2563eb',
  },
  layout: {
    maxWidth: '1200px',
    gutter: 'clamp(1rem, 4vw, 2rem)',
  },
  breakpoints: {
    mobile: '640px',
  },
};

export type AppTheme = typeof theme;