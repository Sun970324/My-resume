import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: rgba(153,153,153,0.5);
  width: 100vw;
  height: 100px;
`
function Header() {
  return (
    <Container>헤더</Container>
  )
}

export default Header;