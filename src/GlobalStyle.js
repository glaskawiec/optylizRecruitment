import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-family: Arial,serif;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}
`;

export default GlobalStyle;
