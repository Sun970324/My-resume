import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
const Container = styled.article`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    width: 10rem;
    padding: 0.8rem;
    height: 3rem;
    margin: 5px auto;
    max-width: 14rem;
    border: none;
    border-radius: 10rem;
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    background-color: rgb(46, 142, 255);
    cursor: pointer;
    :hover{
      transform: scale(1.03);
      transition: 0.2s;
    }
  }
`;
const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    flex-flow: row wrap;
    align-items: center;
  }
`;
const Circle = styled.div`
  width: 9rem;
  height: 9rem;
  text-align: center;
  border-radius: 50%;
  background-color: rgba(65, 65, 65, 0.1);
  padding: 1.1rem;
  margin: 0 2rem 2rem 0;
`;
const Img = styled.img`
  width: 4rem;
  margin: 0 0 10px;
  align-self: center;
`;
const ImgText = styled.div`
  font-size: 15px;
  font-weight: 200;
`;
const Text = styled.div`
  line-height: 2;
  margin-bottom: 2rem;
`;
const MyInfo = forwardRef((props, ref) => {
  const images = [
    { src: "/img/intro1.png", label1: "전문분야", label2: "프론트엔드" },
    { src: "/img/intro2.png", label1: "가치를 만드는", label2: "개발자" },
    { src: "/img/intro3.png", label1: "긍정적인", label2: "마인드" },
    { src: "/img/intro4.png", label1: "핵심가치", label2: "성장" },
  ];

  return (
    <Container ref={ref}>
      <Title name={"About me"} isWhite={false} />
      <Content>
        <ImgDiv>
          {images.map((el, idx) => (
            <Circle>
              <Img key={idx} src={el.src} />
              <ImgText>{el.label1}</ImgText>
              <ImgText>{el.label2}</ImgText>
            </Circle>
          ))}
        </ImgDiv>
        <Text>
          아이디어를 노트북 하나로 실현시킬 수 있는 것에
          매력을 느껴 개발자의 길을 걷기로 했습니다.
          <br />
          문제나 장애물을 만나면 성장의 기회로 생각하고 해결하는 과정에서 보람을
          느낍니다.
          <br />
          웹개발로 세상에 긍정적인 변화를 만들어 가치를 창출하는 것이 개발자로서
          궁극적인 목표입니다.
        </Text>
        <Link to={"pairreview"}>페어 리뷰</Link>
      </Content>
    </Container>
  );
});

export default MyInfo;
