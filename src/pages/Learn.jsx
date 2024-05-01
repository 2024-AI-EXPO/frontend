import React, { useState, useEffect } from "react";
import styled from "styled-components";

const signLanguage = [
  { imgLink: "/Users/yabbi/Desktop/GitHub/frontend/수어 이미지/안녕하세요.png", description: "안녕하세요" },
  { imgLink: "/images/sign2.jpg", description: "감사합니다" },
  { imgLink: "/images/sign3.jpg", description: "미안합니다" },
  { imgLink: "/images/sign4.jpg", description: "사랑합니다" },
];

export const Learn = () => {
  const [filter, setFilter] = useState("");
  const [filteredSignLanguage, setFilteredSignLanguage] =
    useState(signLanguage);

  useEffect(() => {
    const result = signLanguage.filter((element) =>
      element.description.includes(filter)
    );
    setFilteredSignLanguage(result);
  }, [filter]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="검색"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <img src="/images/search.svg" alt="검색 아이콘" />
      </InputWrapper>
      <LearnBoxWrapper>
        {filteredSignLanguage.map((element, index) => {
          return (
            <LearnBox key={index}>
              <ImageWrapper>
                <Image src={element.imgLink} alt={`수화 이미지 ${index + 1}`} />
              </ImageWrapper>
              <Description>{element.description}</Description>
            </LearnBox>
          );
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 0 20px;
  max-width: 1280px;
`;

const LearnBox = styled.div`
  width: 250px;
  height: 360px;
  border: 1px solid #acacac;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  width: 640px;
  height: 40px;
  position: relative;
  > img {
    position: absolute;
    right: 14px;
    top: 10px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #acacac;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 14px;
  &::placeholder {
    color: #acacac;
  }
`;
