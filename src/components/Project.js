import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import ProjectTag from "./ProjectTag";

const Container = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  margin: 0 auto 2rem;
  width: 80%;
  box-shadow: 5px 5px 10px rgba(0,0,0, 0.5);
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

const TextBox = styled.div`
  width: 90%;
  margin-top: 2.5rem;
`;
const ReadMe = styled.div`
  align-self: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(204, 204, 204);
`;
function Project({data}) {
  return (
    <Container>
      <Title>{data.name}</Title>
      <SubTitle>{data.date}</SubTitle>
      <Content>
        <ImgBox>
          <ImgSlider img={data.img} />
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
