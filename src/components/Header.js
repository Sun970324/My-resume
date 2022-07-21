import React from "react";
import styled from "styled-components";
const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: hsla(0,0%,100%,.7);
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  div {
    color: hsla(0,0%,100%,.7);;
    padding: 0 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
`;
function Header() {
  return (
    <Container>
      <div>
        <Logo>Sun's log</Logo>
      </div>
      <Nav>
        <div>Home</div>
        <div>About me</div>
        <div>Projects</div>
        <div>Contact</div>
      </Nav>
    </Container>
  );
}

export default Header;
