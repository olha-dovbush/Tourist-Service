import '@fontsource/poppins/latin.css';

import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHT } from './common/constants/style.constants';

export const GlobalStyle = createGlobalStyle`

  html {
    --12px: 0.75rem;
    --13px: 0.8125rem;
    --14px: 0.875rem;
    --15px: 0.9375rem;
    --16px: 1rem;
    --17px: 1.0625rem;
    --18px: 1.125rem;
    --19px: 1.1875rem;
    --20px: 1.25rem;
    --21px: 1.3125rem;
  }
  
  html, body {
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  * {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img, picture, video, canvas, svg  {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${COLORS.GRAY.SlateGray};
    background-color: ${COLORS.White};
    font-weight: ${WEIGHT.normal};
    line-height: 1.4;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    isolation: isolate;
  }
`;
