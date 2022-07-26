import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 2px;
  margin: 0 0.5rem;
  border-radius: 2rem;
  background-color: white;
  cursor: pointer;
`
const Img = styled.img`
    width: 100%;
`
function FooterImg({logo}) {
  return (
  <Container>
    <Img src={logo} alt={logo} />
  </Container>
  )
}

export default FooterImg;
