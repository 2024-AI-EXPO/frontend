import React from 'react';
import { Router } from './router/router';
import { GlobalStyle } from './styles/globalStyle';
import { styled } from 'styled-components';
import CombinedAnimationComponent from './pages/ex';

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      {/* <Router /> */}
      <CombinedAnimationComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;
