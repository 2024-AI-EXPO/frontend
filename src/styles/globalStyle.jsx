import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    user-select: none;
    text-decoration-line: none;
    resize: none;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    font-weight:100;
    color:black
  }

  :root {
    --color: pink;
    --blur-1-size: clamp(400px, 60vw, 60vw);
    --blur-2-size: clamp(300px, 40vw, 40vw);
    --blur-3-size: clamp(100px, 10vw, 10vw);
    --blur-amount: clamp(40px, 5vw, 90px);
  }

  body {
    font-family: 'Termina', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
