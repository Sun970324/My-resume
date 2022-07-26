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
  border-top: 0.2rem solid rgb(244,97,58);
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
  background-color: rgb(244,97,58);
  cursor: pointer;
`;
const Quote = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  color: hsla(0, 0%, 100%, 0.75);
  line-height: 1.5;
  font-style: italic;
`
const Intro = styled.div`
  font-size: 1.25rem;
  font-weight: 200;
  color: hsla(0, 0%, 100%, 0.75);
  line-height: 1.5;
`
const Main = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Contents>
        <Name>윤선웅</Name>
        <br />
        <Name>포트폴리오</Name>
        <HrLine />
        <Texts>
          <Quote>
          "개발자라는 직업은 '성장'이라는 키워드에서 볼 때 가장 절정에 있는 직업이 아닐까 싶다."
          </Quote>
          <Intro>
           - 오늘부터 개발자 中 -
           </Intro>
          <br />
          반갑습니다, 성장형 개발자 윤선웅입니다.
        </Texts>
        <Button onClick={props.onAboutClick}>About me ↓</Button>
      </Contents>
    </Container>
  );
});

export default Main;
