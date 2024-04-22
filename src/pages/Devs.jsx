import React from "react";
import styled from "styled-components";
import DeveloperCard from "../components/DeveloperCard";

const Container = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Devs = () => {
  const developers = [
    {
      name: "김개발",
      email: "devkim@example.com",
      skills: ["React", "Node.js", "MongoDB"],
      introduction: "풀스택 개발자 김개발입니다.",
    },
    {
      name: "이코더",
      email: "coderlee@example.com",
      skills: ["Vue.js", "Firebase", "CSS"],
      introduction: "프론트엔드에 관심이 많은 이코더입니다.",
    },
    {
      name: "박프로그램",
      email: "progpark@example.com",
      skills: ["Python", "Flask", "SQLAlchemy"],
      introduction: "데이터를 다루는 것을 좋아하는 박프로그램입니다.",
    },
  ];

  return (
    <Container>
      {developers.map((developer, index) => (
        <DeveloperCard key={index} {...developer} />
      ))}
    </Container>
  );
};
