import React from "react";
import styled from "styled-components";
import ProjectTag from "./ProjectTag";
const Container = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  margin: 0 auto 2rem;
`;
const Title = styled.div`
  padding-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;
const SubTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: rgb(137, 145, 150);
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgBox = styled.div`
  width: 85%;
`;

const OrderNum = styled.nav`
  height: 2rem;
  margin-top: 1rem;
  text-align: center;
`;
const TextBox = styled.div`
  width: 90%;
`;
const ReadMe = styled.div`
  align-self: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(204, 204, 204);
`;
const Img = styled.img`
  width: 100%;
`;
function Project({title, subtitle, img, descript, tags}) {
  return (
    <Container>
      <Title>제목</Title>
      <SubTitle>날짜, 인원</SubTitle>
      <Content>
        <ImgBox>
          <Img src="/img/nostanding/nostanding1.jpeg" />
          <OrderNum>1/5</OrderNum>
        </ImgBox>
        <TextBox>
          <ReadMe>
            설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설
          </ReadMe>
          <ProjectTag />
        </TextBox>
      </Content>
    </Container>
  );
}

export default Project;
