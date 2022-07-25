import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: ${(props) => (props.scrollY <= 150 ? "none" : "white")};
  box-shadow: ${(props) =>
    props.scrollY <= 150 ? "none" : "0px 3px 5px gray"};
  transition: 0.4s;
  @media (max-width:992px) {
    background-color: white;
  }
`;
const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) =>
    props.scrollY <= 150 ? "hsla(0, 0%, 100%, 0.7)" : "rgb(69,57,51)"};
      @media (max-width:992px) {
    color: rgb(69,57,51);
  }
  transition: 0.4s;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;
const Div = styled.div`
  color: ${(props) =>
    props.scrollY <= 150 ? "hsla(0, 0%, 100%, 0.7)" : "rgb(69,57,51)"};
      @media (max-width:992px) {
    color: rgb(69,57,51);
  }
  transition: 0.4s;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 2rem;
  cursor: pointer;
  :hover {
    color: rgb(244, 97, 58);
  }
`;
function Header({ scrollY, onHomeClick, onAboutClick, onSkillClick, onProjectClick, onContactClick }) {
  
  return (
    <Container scrollY={scrollY}>
      <div>
        <Logo scrollY={scrollY}>Sun's log</Logo>
      </div>
      <Nav>
        <Div scrollY={scrollY} onClick={onHomeClick}>Home</Div>
        <Div scrollY={scrollY} onClick={onAboutClick}>About me</Div>
        <Div scrollY={scrollY} onClick={onSkillClick}>Skills</Div>
        <Div scrollY={scrollY} onClick={onProjectClick}>Projects</Div>
        <Div scrollY={scrollY} onClick={onContactClick}>Contact</Div>
      </Nav>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    scrollY: state.scroll.scrollY,
  };
}

export default connect(mapStateToProps)(Header);
