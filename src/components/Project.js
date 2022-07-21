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
  margin-bottom: 1rem;
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
  border: 1px solid black;
  border-radius: 1rem;
`;
function Project({data}) {
  return (
    <Container>
      <Title>{data.name}</Title>
      <SubTitle>{data.date}</SubTitle>
      <Content>
        <ImgBox>
          <Img src={data.img[1]} />
          <OrderNum>1 / {data.img.length}</OrderNum>
        </ImgBox>
        <TextBox>
          <ReadMe>
            {data.mainDescript}
          </ReadMe>
          {data.tagDescript.map((data, idx) => <ProjectTag key={idx} tag={data} />)}
        </TextBox>
      </Content>
    </Container>
  );
}

export default Project;
