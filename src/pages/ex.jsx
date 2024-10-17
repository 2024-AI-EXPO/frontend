import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

const fadeIn = keyframes`
  100% {
    transform: scale(1.03);
    opacity: 0;
  }
`;

const morph = keyframes`
  0%, 100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    opacity: .89;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 500ms reverse;
`;

const Blur = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 900px;
  filter: blur(var(--blur-amount));
  background: var(--color);

  &:nth-child(1) {
    height: var(--blur-1-size);
    width: calc(var(--blur-1-size) * 1.1);
  }

  &:nth-child(2) {
    filter: blur(var(--blur-amount)) hue-rotate(135deg) brightness(1.3);
    height: var(--blur-2-size);
    width: calc(var(--blur-2-size) * 0.75);
    top: 20vh;
    right: 20vh;
  }

  &:nth-child(3) {
    filter: blur(var(--blur-amount)) hue-rotate(-135deg);
    height: var(--blur-3-size);
    width: calc(var(--blur-3-size) * 2);
    bottom: 20vh;
    left: 20vw;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  margin: 2rem 0;
  font-size: clamp(2rem, 4vw, 3rem);
  max-width: 800px;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const Gooey = styled.div`
  background-image: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  width: 300px;
  height: 288px;
  animation: ${morph} 3s linear infinite;
  position: relative;
  outline: 1px solid transparent;
  will-change: border-radius;
  z-index: 2;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    box-shadow: 5px 5px 89px rgba(0, 102, 255, 0.21);
    animation-delay: 200ms;
    background-image: linear-gradient(
      120deg,
      rgba(0, 67, 255, 0.55) 0%,
      rgba(0, 103, 255, 0.89) 100%
    );
  }

  &:before {
    animation: ${morph} 1.5s linear infinite;
    opacity: 0.21;
  }

  &:after {
    cursor: pointer;
    animation: ${morph} 3s linear infinite;
    animation-delay: 400ms;
    opacity: 0.89;
    content: 'connect';
    line-height: 288px;
    text-align: center;
    color: white;
    font-size: 24px;
  }
`;

const CombinedAnimationComponent = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Blur />
        <Blur />
        <Blur />
        <Title>SYMBOLS</Title>
        <Gooey
          onClick={() => {
            alert(123);
          }}
        />
      </AppContainer>
    </>
  );
};

export default CombinedAnimationComponent;
