import React, { forwardRef } from "react";
import styled from "styled-components";
import Project from "../components/Project";
import Title from "../components/Title";
import datas from "../projectDatas";
const Article = styled.article`
  display: block;
`;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
  background-color: rgb(46, 142, 255);
`;

const Projects = forwardRef((props, ref) => {
  return (
    <Article ref={ref}>
      <Container>
        <Title name={"Projects"} isWhite={true} />
        {datas.map((data, idx) => (
          <Project key={idx} data={data} />
        ))}
      </Container>
    </Article>
  );
});

export default Projects;
