import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const signLanguage = [
  {
    name: '안녕하세요',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151206/223170/IMG000215340_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151206/223171/IMG000215341_700X466.jpg',
    ],
    description:
      '오른 손바닥으로 주먹을 쥔 왼 팔을 쓸어내린 다음, 두 주먹을 쥐고 바닥이 아래로 향하게하여 가슴 앞에서 아래로 내린다.',
  },
  {
    name: '감사합니다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151204/221972/IMG000214002_700X466.jpg',
    ],
    description:
      '손끝이 밖으로 향하게 펴서 모로 세운 오른손의 4지 옆면을 손바닥이 아래로 향하게 편 왼 손등에 두 번 댄다.',
  },

  {
    name: '죄송합니다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151231/238194/IMG000234152_700X466.jpg',
    ],
    description:
      '오른손의 1·5지 끝을 맞대어 동그라미를 만들어 이마에 댔다가 1·5지를 펴며, 손등이 위로 손끝이 오른쪽으로 향하게 편 왼 손등에 내려놓는다.',
  },
  {
    name: '너',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151220/231085/IMG000224999_700X466.jpg',
    ],
    description: '오른 주먹의 1지를 펴서 끝이 밖으로 향하게 하여 약간 내민다.',
  },
  {
    name: '나',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151214/227729/IMG000220681_700X466.jpg',
    ],
    description: '오른 손바닥을 가슴 중앙에 댄다.',
  },
  {
    name: '우리',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151225/234062/IMG000228770_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151225/234063/IMG000228771_700X466.jpg',
    ],
    description:
      '오른 손바닥을 가슴에 댔다가 손등이 위로 향하게 하여 오른쪽으로 한 바퀴 크게 돌린다.',
  },
  {
    name: '괜찮습니다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151216/228644/IMG000221836_700X466.jpg',
    ],
    description: '오른 주먹의 4지를 펴서 끝 바닥을 턱에 가볍게 두 번 댄다.',
  },
  {
    name: '배부르다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151206/223091/IMG000215372_700X466.jpg',
    ],
    description:
      '왼손을 손등이 밖으로 손끝이 오른쪽으로 향하게 배 앞에 내놓고 오른손을 손등이 밖으로 손끝이 왼쪽으로 향하게 하여 배에 댔다가 내밀어 왼 손바닥에 댄다.',
  },
  {
    name: '배고프다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151214/227497/IMG000220388_700X466.jpg',
    ],
    description:
      '자연스럽게 편 두 손의 5지 등을 배에 대고 5지 바닥에 나머지 손가락을 모아대고 누르면서 몸을 약간 구부린다.',
  },
  {
    name: '넣다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151220/231212/IMG000225165_700X466.jpg',
    ],
    description:
      '손끝이 오른쪽으로 향하게 세운 왼손의 1·5지 사이에 손끝이 아래로 향하게 편 오른손을 넣는다.',
  },
  {
    name: '울다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20210108/796320/IMG000358145_700X466.jpg',
    ],
    description:
      '양 주먹의 1·5지 끝을 맞대어 양 눈 밑에서 아래로 두 번 내린다.',
  },
  {
    name: '슬프다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151226/235127/IMG000230221_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151226/235128/IMG000230222_700X466.jpg',
    ],
    description:
      '오른 주먹의 1·5지를 펴서 끝을 맞대어 오른쪽 눈 밑에 댔다가 내린 다음, 손가락을 펴서 구부려 가슴에 대고 왼쪽으로 돌린다.',
  },
  {
    name: '훌륭하다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151129/218779/IMG000210349_700X466.jpg',
    ],
    description:
      '오른 주먹의 1·5지를 펴서 끝을 맞대고 머리 오른쪽에 대고 1지를 위로 편다.(지적 성취 따위가 월등한 경우)',
  },
  {
    name: '인정',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151228/236101/IMG000231497_700X466.jpg',
    ],
    description:
      '오른손의 1·5지 끝을 맞대어 동그라미를 만들어 손등이 밖으로 향하게 세웠다가, 손목을 돌려 손바닥이 밖으로 향하게 한다.',
  },
  {
    name: '아프다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151127/217673/IMG000209048_700X466.jpg',
    ],
    description: '오른 주먹의 4지 옆면으로 머리 오른쪽을 가볍게 두 번 친다.',
  },
  {
    name: '감기',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151214/227606/IMG000220519_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151214/227607/IMG000220520_700X466.jpg',
    ],
    description:
      '오른 손의 1·5지 끝을 맞대어 동그라미를 만들어 턱밑 가까이 댔다가 입을 벌리며 내민후 오른 주먹의 1·2지를 펴서 끝바닥으로 코밑을 두 번 스쳐 내린다.',
  },
  {
    name: '힘들다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151130/219265/IMG000210934_700X466.jpg',
    ],
    description:
      '오른손의 1·5지 끝을 맞대어 동그라미를 만들어 코밑에 댔다가 아래로 내리며 편다.',
  },
  {
    name: '알아듣다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151207/223383/IMG000215696_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151207/223384/IMG000215697_700X466.jpg',
    ],
    description:
      '오른 주먹의 1지를 펴서 바닥으로 코 왼쪽을 오른쪽으로 스쳐낸 다음, 1지를 접고 5지를 펴서 바닥으로 코 오른쪽을 왼쪽으로 스쳐낸다.',
  },
  {
    name: '졸리다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20210121/802140/IMG000358248_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20210121/802141/IMG000358249_700X466.jpg',
    ],
    description:
      '오른 주먹의 1지를 펴서 오른쪽 눈 밑에서 밑으로 내린 다음, 1지를 접고 5지를 펴서 바닥으로 턱 밑을 스쳐 낸다.',
  },
  {
    name: '어색하다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151225/234031/IMG000228719_700X466.jpg',
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151225/234032/IMG000228720_700X466.jpg',
    ],
    description:
      '오른 주먹의 1지를 펴서 목 중앙에 댄 다음, 손가락이 위로 향하게 편 두 손의 손등을 맞대고 엇갈리게 상하로 움직인다.',
  },
  {
    name: '쉽다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151222/232742/IMG000227137_700X466.jpg',
    ],
    description:
      '오른 주먹의 1지를 펴서 끝 바닥을 입에 댔다가 내려 왼 손바닥에 댄다.',
  },
  {
    name: '싫어하다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151225/234227/IMG000229038_700X466.jpg',
    ],
    description:
      '오른 주먹의 1·5지를 펴서 벌리고 끝으로 가슴 중앙을 두 번 툭툭 친다.',
  },
  {
    name: '아깝다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20190726/604528/IMG000229741_700X466.jpg',
    ],
    description: '오른 손바닥을 왼쪽 뺨에 두 번 댄다.',
  },
  {
    name: '할 수 있다',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151216/228679/IMG000221894_700X466.jpg',
    ],
    description:
      '손끝이 위로 향하게 펴서 세운 오른 손바닥을 입 앞에 댔다가 내밀며 입으로 ‘파’한다.',
  },
  {
    name: '행복',
    imgLink: [
      'http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20151120/213423/IMG000204081_700X466.jpg',
    ],
    description:
      '오른손의 1·2·3·4지 바닥을 왼쪽 볼에 5지 바닥을 오른쪽 볼에 댔다가 내리며 손가락을 모아 붙인다.',
  },
];

export const Manual = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          {'<'} <Link to={'/'}>돌아가기</Link>
        </Top>
        <ItemContainer>
          {signLanguage.map((item, idx) => {
            return (
              <Item key={idx}>
                <div>{item.name}</div>
                <div>
                  {item.imgLink.map((img, idx) => {
                    return <img src={img} key={idx} />;
                  })}
                </div>
                <div>
                  <span>수형 설명</span>
                  <div>{item.description}</div>
                </div>
              </Item>
            );
          })}
        </ItemContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 880px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
`;

const Item = styled.div`
  border-radius: 12px;
  border: 1px solid gray;
  width: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:nth-of-type(1) {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 24px;
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    height: 136px;
    justify-content: center;
    align-items: center;
    img {
      width: 33%;
    }
  }
  > div:nth-of-type(3) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    span {
      color: #ff7e00;
      margin-bottom: 4px;
      font-size: 16px;
    }
    margin-bottom: 20px;
  }
`;

const Top = styled.div`
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
`;
