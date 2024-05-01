import React from "react";
import styled from "styled-components";

// Footer 스타일을 정의합니다.
const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;
`;

// Footer 컴포넌트를 정의합니다.
export const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} 대덕소프트웨어 마이스터고
    </FooterContainer>
  );
};
