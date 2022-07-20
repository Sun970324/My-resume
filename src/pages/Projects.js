import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
const Article = styled.article`
  display: block;
`;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
  background-color: rgb(28, 128, 159);
`;

function Projects() {
  return (
    <Article>
      <Container>
        <Title name={"Projects"} isWhite={true} />
      </Container>
    </Article>
  );
}

export default Projects;
