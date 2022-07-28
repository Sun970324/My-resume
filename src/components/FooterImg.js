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
     <a href={logo === '/img/git-hub.png'? "https://github.com/Sun970324": "https://www.notion.so/b45d0a0494c14d98b57b43bc68adc359"} target="_blank" rel="noreferrer">
    <Img src={logo} alt={logo} />
    </a>
  </Container>
  )
}

export default FooterImg;
