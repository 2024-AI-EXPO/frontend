import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const menuList = [
  { name: "수화 배우기", link: "learn" },
  { name: "설명서", link: "docs" },
  { name: "건의함", link: "inquiry" },
  { name: "개발자", link: "devs" },
];

export const Header = () => {
  const { pathname } = useLocation();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrapper scroll={scroll} path={pathname}>
      <Container>
        <LeftBox to={"/"}>Symbol</LeftBox>
        <RightBox scroll={scroll} path={pathname}>
          {menuList.map((menu, index) => (
            <Link to={`/${menu.link}`} key={index}>
              {menu.name}
            </Link>
          ))}
        </RightBox>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ scroll, path }) =>
    scroll < 20 && path === "/" ? css`0` : css`1px solid #acacac`};
  transition: 0.4s linear;
  background-color: ${({ scroll, path }) =>
    scroll < 20 && path === "/" ? "rgba(0,0,0,0)" : "white"};
  position: fixed;
  top: 0;
  z-index: 999;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBox = styled(Link)``;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
  transition: 0.4s linear;
  > a {
    transition: 0.1s linear;
    &:hover {
      opacity: 0.7;
    }
    color: ${({ scroll, path }) =>
      scroll < 20 && path === "/" ? "white" : "black"};
  }
`;
