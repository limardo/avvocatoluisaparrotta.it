import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #eaa636;
    --primary-color-rgb: 234, 166, 54;
    --bs-primary: var(--primary-color);
    --bs-font-sans-serif: 'Jost', helvetica, arial, sans-serif;
  }

  html {
    background: #fff;
    overflow-x: hidden;
  }

  body {
    padding: 0;
    color: #606060;
    font-family: var(--bs-font-sans-serif);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.8em;
    overflow-x: hidden;
  }

  a, img {
    outline: 0;
  }

  h1, h2, h4, h3, h5, h6 {
    margin-top: 0;
    color: #111;
    font-weight: 600;
  }

  p {
    margin-bottom: 20px;
  }

  .primary-color {
    color: var(--primary-color) !important;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 48px;
    letter-spacing: -1px;
    line-height: 56px;
  }

  h2 {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 36px;
    letter-spacing: -1px;
    line-height: 42px;
  }

  h3 {
    margin-bottom: 25px;
    font-size: 22px;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }

  p.lead {
    margin-top: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7em;
  }

  .btn-custom{
    background: var(--primary-color);
  }

  .btn-black {
    background: #111;
  }

  a.btn-custom,
  .btn-custom,
  .btn-black {
    min-width: 120px;
    font-size: 12px;
    transition: 0.7s;

    &,
    &:active,
    &:focus,
    &:visited {
      min-width: 120px;
      padding: 11px 30px;
      border-radius: 2px;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 2px;
      outline: 0;
      text-decoration: none;
      text-transform: uppercase;
    }

    &:hover {
      box-shadow: 2px 2px 20px 0 rgb(20 20 20 / 30%);
      color: #fff;
    }
  }

  section {
    position: relative;
    padding: 90px 0 0;
  }

  .p-title {
    display: inline-block;
    margin-bottom: 20px;
    color: var(--primary-color);
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 10px;
    text-transform: uppercase;
  }

  .small-border {
    display: block;
    width: 100px;
    height: 3px;
    border-top: solid 2px #333;
    border-top-color: rgb(51 51 51);
    border-right: none;
    border-right-color: currentcolor;
    border-bottom-color: var(--primary-color);
    border-left: none;
    /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
    border-left-color: currentcolor;
    margin: 0 auto 30px;
  }

  .grecaptcha-badge { visibility: hidden; }
`;
