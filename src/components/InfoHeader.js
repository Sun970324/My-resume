import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getScrollY } from "../store";
const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  align-items: center;
  z-index: 10;
  background-color: ${(props) => (props.scrollY <= 150 ? "none" : "white")};
  box-shadow: ${(props) =>
    props.scrollY <= 150 ? "none" : "0px 3px 5px gray"};
  transition: 0.4s;
  a{
    text-decoration: none;
  }
  @media (max-width: 992px) {
    background-color: white;
    height: fit-content;
    box-shadow: 0px 3px 5px gray;
  }
`;
const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) =>
    props.scrollY <= 150 ? "hsla(0, 0%, 100%, 0.7)" : "rgb(69,57,51)"};
  @media (max-width: 992px) {
    position: absolute;
  top: 20px;
  left: 50px;
    color: rgb(69, 57, 51);
  }
  transition: 0.4s;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 70px;
  }
`;
const Div = styled.div`
  color: ${(props) =>
    props.scrollY <= 150 ? "hsla(0, 0%, 100%, 0.7)" : "rgb(69,57,51)"};
  transition: 0.4s;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 2rem;
  cursor: pointer;
  :hover {
    color: rgb(244, 97, 58);
  }
  @media (max-width: 992px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    color: rgb(69, 57, 51);
    padding: 8px 30px;
    transition: 0.4s;
  }
`;
const Line = styled.span`
  width: 20px;
  height: 2px;
  display: hide;
  background-color: black;
  margin: 5px;
  @media (max-width: 992px) {
    display: block;
  }
`;
const LineDiv = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
function InfoHeader({
  scrollY,getScrollY
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const clickOpenHandle = () => setOpenMenu(!openMenu);
  useEffect(()=> {
    getScrollY(0)
  },[])
  return (
    <Container scrollY={scrollY}>
      <Link to="/">
        <Logo scrollY={scrollY}>Sun's log</Logo>
      </Link>
      <Nav>
        <LineDiv onClick={clickOpenHandle}>
          <Line />
          <Line />
          <Line />
        </LineDiv>
        <Div
          scrollY={scrollY}
          onClick={()=>setOpenMenu(false)}
          isOpen={openMenu}
        >
          Home
        </Div>
        <Div
          scrollY={scrollY}
          onClick={()=>setOpenMenu(false)}
          isOpen={openMenu}
        >
          About me
        </Div>
        <Div
          scrollY={scrollY}
          onClick={()=>setOpenMenu(false)}
          isOpen={openMenu}
        >
          Pair Review
        </Div>
        <Div
          scrollY={scrollY}
          onClick={()=>setOpenMenu(false)}
          isOpen={openMenu}
        >
          Career
        </Div>
      </Nav>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    scrollY: state.scroll.scrollY,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getScrollY: (data) => {
      dispatch(getScrollY(data));
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoHeader);
