import { Outlet } from "react-router-dom";
import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer";
import { styled } from "styled-components";

export const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 60px;
`;
