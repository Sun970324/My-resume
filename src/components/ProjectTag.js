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
function ProjectTag() {
  return (
    <Container>
      <Lable>
        <FontAwesomeIcon icon={faCheck} />
        <div>이름</div>
      </Lable>
      <Value>설명</Value>
    </Container>
  );
}

export default ProjectTag;
