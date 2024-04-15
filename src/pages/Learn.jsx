import { styled } from "styled-components";

const signLanguage = [
  { imgLink: "", description: "" },
  { imgLink: "", description: "" },
  { imgLink: "", description: "" },
  { imgLink: "", description: "" },
];

export const Learn = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input placeholder="검색" />
        <img src="/images/search.svg" />
      </InputWrapper>
      <LearnBoxWrapper>
        {signLanguage.map((element, index) => {
          return <LearnBox key={index}>{element.description}</LearnBox>;
        })}
      </LearnBoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 30px;
`;

const LearnBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  max-width: 1280px;
  flex-wrap: wrap;
`;

const LearnBox = styled.div`
  width: 250px;
  height: 310px;
  border: 1px solid #acacac;
  border-radius: 4px;
`;

const InputWrapper = styled.div`
  width: 640px;
  height: 40px;
  position: relative;
  > img {
    position: absolute;
    right: 14px;
    top: 10px;
  }
`;

const Input = styled.input`
  width: 640px;
  height: 40px;
  border-bottom: 1px solid #acacac;
  font-size: 16px;
  padding: 0 14px;
  &::placeholder {
    color: #acacac;
  }
`;
