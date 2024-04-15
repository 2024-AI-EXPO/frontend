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
            <BannerButton>수화 번역기</BannerButton>
          </BannerTextWrapper>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Call%20Me%20Hand%20Medium-Light%20Skin%20Tone.png"
            alt="Call Me Hand Medium-Light Skin Tone"
            width="400"
            height="400"
          />
        </BannerInnerWrapper>
      </Banner>
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
`;
