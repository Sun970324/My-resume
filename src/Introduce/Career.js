import { forwardRef } from "react";
import styled from "styled-components";
import Title from "../components/Title";

const Container = styled.article`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
  background-color: black;
`;
const Career = forwardRef((props, ref) => {
  return (
    <Container>
      <Title name={"Career"} isWhite={true} />
    </Container>
  );
});

export default Career;
