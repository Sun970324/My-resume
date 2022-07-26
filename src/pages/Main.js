import React, { forwardRef } from "react";
import styled from "styled-components";
const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(112, 93, 80, 0.8) 0,
      rgba(112, 93, 80, 0.8) 90%
    ),
    url("/img/main.jpg") 50% no-repeat;
  z-index: -1;
  background-size: cover;
`;
const Contents = styled.div`
  width: 100%;
  text-align: center;
  padding: 8.5rem 2rem 4.5rem 2rem;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 4rem;
  color: white;
  word-break: keep-all;
`;
const HrLine = styled.hr`
  width: 3.25rem;
  height: 0;
  margin: 1.5rem auto;
  border: none;
  border-top: 0.2rem solid rgb(244, 97, 58);
`;
const Texts = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.75);
  margin: 0 auto 2rem;
  line-height: 1.5;
`;
const Button = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10rem;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  text-decoration: none;
  background-color: rgb(244, 97, 58);
  cursor: pointer;
`;
const Main = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Contents>
        <Name>- 윤선웅 -</Name>
        <br />
        <Name>포트폴리오</Name>
        <HrLine />
        <Texts>
          안녕하세요.
          <br />
          성장하고 배우는 것을 좋아하는 웹개발자입니다.
          <br />
          긍정적인 사고, 끈기, 기술 습득력이 저의 장점입니다.
        </Texts>
        <Button onClick={props.onAboutClick}>더 알아보기 ↓</Button>
      </Contents>
    </Container>
  );
});

export default Main;
