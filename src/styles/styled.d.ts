import 'styled-components';
import type { AppTheme } from './theme';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: AppTheme['colors'];
    layout: AppTheme['layout'];
    breakpoints: AppTheme['breakpoints'];
  }
}