import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: Verdana, Geneva, Tahoma, sans-serif;
    --color-black: #2e2e2e;
    --color-white: #ffffff;
    --color-purple: #9522f1;
    --color-green: #65d520;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;

    body {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-color: var(--color-white);
      color: var(--color-black);

      ul,
      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    }
  }
`
