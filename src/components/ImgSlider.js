import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
  overflow: hidden;
`;
const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;
const Img = styled.img`
  border: 1px solid black;
  border-radius: 1rem;
  height: 500px;
  width: 500px;
`;
function ImgSlider({ img, setCurrentImg }) {
  const settings = {
    beforeChange : (slide, newSlide) => setCurrentImg(newSlide+1),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <StyledSlider {...settings}>
        {img.map((el, idx) => (
          <Img key={idx} src={el} alt={el}></Img>
        ))}
      </StyledSlider>
    </Container>
  );
}

export default ImgSlider;
