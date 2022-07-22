import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;
const Lable = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: top;
  width: 8.4rem;
  font-weight: bold;
  font-size: 1rem;
  svg {
    margin-right: 8px;
  }
`;
const Value = styled.div`
  width: calc(100% - 8.4rem);
  vertical-align: bottom;
  font-size: 1rem;
`;
const LinkValue = styled.a`
  width: calc(100% - 8.4rem);
  vertical-align: bottom;
  font-size: 1rem;
  text-decoration: none;
  color: rgb(76,157,224);
  :hover{
    text-decoration: underline;
  }
`;
function ProjectTag({tag}) {
  return (
    <Container>
      <Lable>
        <FontAwesomeIcon icon={faCheck} />
        <div>{tag.lable}</div>
      </Lable>
      {tag.isLink? <LinkValue href={tag.value} target="_blank">{tag.value}</LinkValue> : <Value>{tag.value}</Value> }
    </Container>
  );
}

export default ProjectTag;
