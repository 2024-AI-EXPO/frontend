import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
`;

const Section = styled.section`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 16px;
  font-weight: 300;
  word-break: keep-all;
`;

export const Docs = () => {
  return (
    <PageContainer>
      <Section>
        <Heading>수화 번역기 서비스란?</Heading>
        <Paragraph>
          수화 번역기 서비스는 청각 장애인과 청각이 정상인 사람들 사이의 소통을
          돕기 위해 개발된 웹 기반 서비스입니다. 이 서비스를 통해 사용자는
          수화를 텍스트로, 혹은 텍스트를 수화로 실시간 변환할 수 있습니다.
        </Paragraph>
      </Section>
      <Section>
        <Heading>주요 기능</Heading>
        <Paragraph>
          - 실시간 수화 번역: 사용자의 수화를 인식하여 텍스트로 변환합니다.
          <br />
          - 텍스트를 수화로 변환: 입력된 텍스트를 수화 동작으로 보여줍니다.
          <br />- 다양한 수화 언어 지원: 여러 나라의 수화 언어를 지원하여 글로벌
          사용이 가능합니다.
        </Paragraph>
      </Section>
      <Section>
        <Heading>사용 방법</Heading>
        <Paragraph>
          1. 웹사이트에 접속합니다.
          <br />
          2. 수화 번역을 원하는 옵션을 선택합니다 (수화 -{">"} 텍스트 혹은
          텍스트 -{">"}
          수화).
          <br />
          3. 카메라 혹은 키보드를 사용하여 입력을 시작합니다.
          <br />
          4. 화면에 결과가 실시간으로 표시됩니다.
        </Paragraph>
      </Section>
      <Section>
        <Heading>FAQ</Heading>
        <Paragraph>
          Q: 서비스 이용 비용이 있나요?
          <br />
          A: 현재는 무료로 서비스를 제공하고 있습니다. 향후 유료 기능이 추가될
          수 있습니다.
          <br />
          <br />
          Q: 모든 종류의 수화를 지원하나요?
          <br />
          A: 주요 국가의 수화는 지원하고 있으나, 아직 모든 수화를 완벽하게
          지원하지는 않습니다. 지속적으로 업데이트를 통해 지원 언어를 확장할
          예정입니다.
        </Paragraph>
      </Section>
    </PageContainer>
  );
};
