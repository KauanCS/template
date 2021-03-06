import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  html, body, #root {
  margin: 0;
  height: 100%;
  color: #212121;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  font-weight: 400;
  background-color: #2B3C51;
  }

  a {
    color: ${(props) => props.theme.color.accent} !important;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  &.euiButton--primary {
    background-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.black};
  }

  &.euiButton--primary:hover {
    background-color: ${(props) => props.theme.color.accentHover} !important;
  }
  
  &.euiButton--primary:focus {
    background-color: ${(props) => props.theme.color.accent} !important;
  }
`;

export default GlobalStyles;
