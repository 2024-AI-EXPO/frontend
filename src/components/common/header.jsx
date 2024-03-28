import { styled } from "styled-components";
import { Link } from "react-router-dom";

const menuList = [
  { name: "수화 배우기", link: "learn" },
  { name: "설명서", link: "docs" },
  { name: "건의함", link: "inquiry" },
  { name: "개발자", link: "devs" },
];

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LeftBox to={"/"}>Symbol</LeftBox>
        <RightBox>
          {menuList.map((menu) => {
            return <Link to={`/${menu.link}`}>{menu.name}</Link>;
          })}
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
  border-bottom: 1px solid #acacac;
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
`;
