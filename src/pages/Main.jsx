import { styled } from "styled-components";

export const Main = () => {
  return (
    <div>
      <Banner>
        <BannerInnerWrapper>
          <BannerTextWrapper>
            <div>
              <div>모든 순간,</div>
              <div>소통의 장벽을 넘어</div>
              <div>함께 미래를 꿈꿀 수 있도록</div>
            </div>
            <div>
              수화 학습과 수화 통역은 <span>symbol</span>에서
            </div>
            <ButtonWrapper>
              <BannerButton>한글 수화 번역기</BannerButton>
              <BannerButton>영어 수화 번역기</BannerButton>
            </ButtonWrapper>
          </BannerTextWrapper>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raising%20Hands.png"
            alt="Raising Hands"
            width="400"
            height="400"
          />
        </BannerInnerWrapper>
      </Banner>
      <ContainerWrapper>
        <Container>
          <div>
            <div>수화를 배워보세요</div>
            <div>다양한 수화 교육 콘텐츠를 통해 새로운 언어를 배워보세요.</div>
          </div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Flashlight.png"
            alt="Flashlight"
          />
        </Container>
        <Container>
          <div>
            <div>건의할 사항이 있나요?</div>
            <div>여러분의 소중한 의견을 들려주세요. 함께 개선해 나갑시다.</div>
          </div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Loudspeaker.png"
            alt="Loudspeaker"
          />
        </Container>
        <Container>
          <div>
            <div>사용법을 알려드릴게요</div>
            <div>이 앱의 사용 방법을 단계별로 안내해 드립니다.</div>
          </div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Page%20with%20Curl.png"
            alt="Page with Curl"
          />
        </Container>
        <Container>
          <div>
            <div>개발자를 소개할게요</div>
            <div>이 앱을 만든 개발자들의 이야기를 들어보세요.</div>
          </div>
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png"
            alt="Desktop Computer"
          />
        </Container>
      </ContainerWrapper>
    </div>
  );
};

const Banner = styled.div`
  width: 100vw;
  height: 800px;
  margin-top: -60px;
  background-color: #191f28;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerInnerWrapper = styled.div`
  width: 1038px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  > img {
    transform: scaleX(-1);
  }
`;

const BannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  > div:nth-child(1) {
    > div {
      font-size: 46px;
      font-weight: 700;
      color: white;
    }
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  > div:nth-child(2) {
    font-size: 16px;
    font-weight: 700;
    color: #b0b8c1;
    > span {
      font-size: 16px;
      font-weight: 700;
      color: #458cdc;
    }
  }
`;

const BannerButton = styled.div`
  width: 136px;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: #3182f6;
  color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  height: 48px;
`;

const ContainerWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 100px;
`;

const Container = styled.div`
  display: flex;
  width: calc(50% - 50px);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  &:nth-child(odd) {
    flex-direction: row;
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    > div:nth-child(1) {
      font-size: 36px;
      font-weight: 700;
    }
    > div:nth-child(2) {
      font-size: 20px;
      font-weight: 200;
      word-break: keep-all;
    }
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;
