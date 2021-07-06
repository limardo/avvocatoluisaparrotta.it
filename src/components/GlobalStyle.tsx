import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #eaa636;
    --primary-color-rgb: 234, 166, 54;
    --bs-primary: var(--primary-color);
    --bs-font-sans-serif: 'Jost', Helvetica, Arial, sans-serif;
  }

  html {
    overflow-x: hidden;
    background: #fff;
  }

  body {
    font-family: var(--bs-font-sans-serif);
    font-size: 15px;
    font-weight: 400;
    color: #606060;
    line-height: 1.8em;
    padding: 0;
  }

  a, img {
    outline: 0;
  }

  h1, h2, h4, h3, h5, h6 {
    color: #111111;
    margin-top: 0;
    font-weight: 600;
  }

  p {
    margin-bottom: 20px;
  }

  .primary-color {
    color: var(--primary-color) !important;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    line-height: 56px;
    letter-spacing: -1px;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -1px;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 25px;
  }

  h4 {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 18px;
  }

  p.lead {
    font-size: 16px;
    line-height: 1.7em;
    margin-top: 0;
    font-weight: 400;
  }

  a.btn-custom,
  .btn-custom,
  .btn-black {
    font-size: 12px;
    min-width: 120px;
    background: var(--primary-color);
    transition: 0.7s;

    &,
    &:active,
    &:focus,
    &:visited {
      color: #fff;
      border-radius: 2px;
      outline: 0;
      font-weight: bold;
      text-decoration: none;
      padding: 11px 30px;
      min-width: 120px;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 2px;
    }

    &:hover {
      color: #fff;
      box-shadow: 2px 2px 20px 0 rgba(20, 20, 20, 0.3);
    }
  }

  .btn-black {
    background: #111;
  }

  section {
    padding: 90px 0 0;
    position: relative;
  }

  .p-title {
    display: inline-block;
    color: var(--primary-color);
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 10px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .small-border {
    width: 100px;
    height: 3px;
    border-top: solid 2px #333333;
    border-top-color: rgb(51, 51, 51);
    border-left: none;
    border-left-color: currentcolor;
    border-right: none;
    border-right-color: currentcolor;
    display: block;
    margin: 0 auto 30px;
    border-color: var(--primary-color);
  }
`;
