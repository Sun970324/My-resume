import React, { forwardRef } from "react";
import styled from "styled-components";
import Skill from "../components/Skill";
import Title from "../components/Title";

const Article = styled.article`
  display: block;
`;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
  background-color: rgb(22, 22, 22);
`;
const SkillBox = styled.div`
	display: flex;
  flex-flow: column wrap;
  height: 58rem;
  align-content: space-around;
  @media (max-width: 670px) {
    flex-flow: row wrap;
    height: fit-content;
  }
`;
const imgDatas = [
  { name: "Front-End", src: "/img/skills/frontend.png" },
  { name: "Back-End", src: "/img/skills/backend.png" },
  { name: "Version-Control", src: "/img/skills/version-control.png" },
  { name: "Comunication", src: "/img/skills/communication.png" },
  { name: "Deployment", src: "/img/skills/deployment.png" },
];
const Skills = forwardRef((props, ref) => {
  return (
    <Article ref={ref}>
      <Container>
        <Title
          name={"Technical Skills"}
          isWhite={true}
          clicked={props.onSkillClick}
        />
        <SkillBox>
          {imgDatas.map((el) => (
            <Skill name={el.name} src={el.src} />
          ))}
        </SkillBox>
      </Container>
    </Article>
  );
});

export default Skills;
