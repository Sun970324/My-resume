import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/Title";
const Container = styled.article`
  width: 100%;
  padding: 4rem 10%;
  margin: 0 auto;
  text-align: center;
  a {
    color: white;
    text-decoration: none;
    width: 10rem;
    padding: 0.8rem;
    height: 3rem;
    margin: 5rem 0;
    max-width: 14rem;
    border: none;
    border-radius: 10rem;
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    background-color: rgb(28,128,159);
    cursor: pointer;
    :hover{
      transform: scale(1.03);
      transition: 0.2s;
    }
  }
`;
const Label = styled.div`
  font-size: 24px;
  font-weight: 600;
`
const Div = styled.div`
line-height: 2;
margin-bottom: 2rem;
`
const HrLine = styled.hr`
  width: 3.25rem;
  height: 0;
  margin: 1.5rem auto;
  border: none;
  border-top: 0.2rem solid rgb(244,97,58);
`;
const ImgContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`
const Img = styled.img`
  margin-bottom: 5rem;
  border: 2px solid rgb(244,97,58);
  object-fit: scale-down;
  width: 100%;
`
const GoBackDiv = styled.div`
  a {
    position: fixed;
    top: 10px;
    right: 30px;
    color: white;
    text-decoration: none;
    width: 6rem;
    padding: 0.8rem;
    height: 3rem;
    margin: 5rem 0;
    max-width: 14rem;
    border: none;
    border-radius: 10rem;
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    background-color: rgb(28,128,159);
    cursor: pointer;
    :hover{
      transform: scale(1.03);
      transition: 0.2s;
    }
  }
`
const PairReview = forwardRef((props, ref) => {
  const images = ['/img/pair/pair1.png','/img/pair/pair2.png','/img/pair/pair3.png','/img/pair/pair4.png','/img/pair/pair5.png','/img/pair/pair6.png','/img/pair/pair7.png','/img/pair/pair8.png','/img/pair/pair9.png','/img/pair/pair10.png','/img/pair/pair11.png','/img/pair/pair12.png','/img/pair/pair13.png','/img/pair/pair14.png']
  return (
    <Container>
      <GoBackDiv>
      <Link to="/">Go Back</Link>
      </GoBackDiv>
      <Title name={"Pair Review"} isWhite={false} />
      <Label>
      Pair Review란?
      </Label>
      <Div>
        <br />
        두 명 이상이 함께 프로그래밍 과제를 수행하는 것을 '페어 프로그래밍'이라고 합니다.
        <br />
        페어 프로그래밍을 마친 후 페어에게 남기는 리뷰입니다.
      </Div>
      <HrLine />
      <Div>
        이제까지 만난 페어분들이 저에 대해 남겨준 평가입니다.
      </Div>
      <ImgContainer>
      {images.map((el, idx)=> <Img key={idx} src={el} />)}
      </ImgContainer>
      <Link to="/">Go Back</Link>
    </Container>
  );
});

export default PairReview;
