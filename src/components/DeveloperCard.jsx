import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 400px;
  min-height: 600px;
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Name = styled.h2`
  color: #333;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
`;

const Email = styled.a`
  color: #007bff;
  text-decoration: none;
  margin: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.span`
  background-color: #007bff;
  color: #ffffff;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 200;
`;

const Introduction = styled.p`
  margin: 10px 0 0;
  line-height: 1.4;
  flex-grow: 1;
  font-weight: 200;
`;

const DeveloperCard = ({ name, email, skills, introduction }) => {
  return (
    <Card>
      <Name>{name}</Name>
      <Email href={`mailto:${email}`}>{email}</Email>
      <Skills>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </Skills>
      <Introduction>
        {introduction.split("\n").map((val) => (
          <>
            {val}
            <br />
          </>
        ))}
      </Introduction>
    </Card>
  );
};

export default DeveloperCard;
