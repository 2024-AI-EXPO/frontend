import { styled } from "styled-components";

const signLanguage = [
  { imgLink: "", description: "" },
  { imgLink: "", description: "" },
];

export const Learn = () => {
  return (
    <div>
      {signLanguage.map((element, index) => {
        return <LearnBox key={index}>{element.description}</LearnBox>;
      })}
    </div>
  );
};

const LearnBox = styled.div`
  width: 250px;
  height: 310px;
  border: 1px solid #acacac;
  border-radius: 4px;
`;
