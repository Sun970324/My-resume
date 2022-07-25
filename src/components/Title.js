import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin: 0 auto 3rem;
  svg {
    color: ${(props)=> props.isWhite? 'white': 'black'};
    padding: 5px 5px 0 0;
    opacity: 0.6;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;
const Lable = styled.div`
 color: ${(props)=> props.isWhite? 'white': 'black'};
    border-bottom-color: #cccccc;
    font-size: 2rem;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    font-weight: 400;
    line-height: 1.5;
`
function Title({ name, isWhite, clicked }) {
  return (
    <Container isWhite={isWhite}>
      <FontAwesomeIcon icon={faLink} onClick={clicked} />
      <Lable isWhite={isWhite}>{name}</Lable>
    </Container>
  );
}

export default Title;
