import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faUser,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  margin-bottom: 2rem;
  width: 50%;
  svg {
    margin-right: 2.5rem;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  opacity: 0.8;
`;
const Lable = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const Value = styled.div`
  font-size: 1rem;
`;
function Tags({ img, lable, value }) {
  return (
    <Container>
      <Contents>
        <FontAwesomeIcon
          icon={
            img === "user"
              ? faUser
              : img === "calinder"
              ? faCalendar
              : img === "pin"
              ? faLocationDot
              : img === "phone"
              ? faPhone
              : faEnvelope
          }
          size="2x"
        />
        <div>
          <Lable>{lable}</Lable>
          <Value>{value}</Value>
        </div>
      </Contents>
    </Container>
  );
}

export default Tags;
