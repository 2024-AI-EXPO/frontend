import React, { useState } from "react";
import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  padding-top: 150px;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 24px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  &:focus {
    border-color: #a0a0a0;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 24px;
  font-size: 16px;
  height: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  &:focus {
    border-color: #a0a0a0;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 0;
  width: 100%;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

export const Inquiry = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
    alert("건의사항이 제출되었습니다.");
    setTitle("");
    setContent("");
  };

  return (
    <PageLayout>
      <Content>
        <h1 style={{ textAlign: "center", marginBottom: "32px" }}>건의사항</h1>
        <Input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleSubmit}>제출하기</Button>
      </Content>
    </PageLayout>
  );
};
