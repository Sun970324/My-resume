import React, { useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import ProjectTag from "./ProjectTag";

const Container = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  margin: 0 auto 2rem;
  width: 80%;
  box-shadow: 5px 7px 10px black;
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
function Project({data}) {
  const [curentImg, setCurrentImg] = useState('1')
  return (
    <Container>
      <Title>{data.name}</Title>
      <SubTitle>{data.date}</SubTitle>
      <Content>
        <ImgBox>
          <ImgSlider img={data.img} setCurrentImg={setCurrentImg} />
          <OrderNum>{curentImg} / {data.img.length}</OrderNum>
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
