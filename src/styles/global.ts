import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const customReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    background-color: transparent;
    border: 0;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  textarea,
  input {
    border: none;
    resize: none;
    outline: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const global = css`
  ${emotionReset};
  ${customReset};

  body {
    font-family: 'Apple SD Gothic Neo';
  }
`;
