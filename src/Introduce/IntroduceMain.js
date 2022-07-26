import React from "react";
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

const Texts = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 0.75);
  margin: 0 auto 2rem;
  line-height: 1.5;
`;
function IntroduceMain () {
  return (
    <Container>
      <Contents>
          <Texts>
            웹개발자 윤선웅을 소개합니다.
          </Texts>
      </Contents>
    </Container>
  );
};

export default IntroduceMain;
