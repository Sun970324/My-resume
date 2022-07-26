import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin: 0 auto 3rem;
`;
const Lable = styled.div`
  color: ${(props) => (props.isWhite ? "white" : "black")};
  border-bottom-color: #cccccc;
  font-size: 2rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-weight: 400;
  line-height: 1.5;
`;
function Title({ name, isWhite }) {
  return (
    <Container isWhite={isWhite}>
      <Lable isWhite={isWhite}>{name}</Lable>
    </Container>
  );
}

export default Title;
