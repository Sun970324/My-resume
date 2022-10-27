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
  line-height: 1.6;
`;

const Main = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Contents>
      <br />
        <Name>윤선웅</Name>
        <br />
        <Name>포트폴리오</Name>
        <Texts>
          새로운 기술을 배우고 도전하는 것을 좋아하는 웹, 앱개발자입니다.
          <br />
          불가능해 보이던 일을 '마침내 또 해냈다'라는 성취감을 갖고
          <br />
          매일매일 성장합니다.
        </Texts>
      </Contents>
    </Container>
  );
});

export default Main;
