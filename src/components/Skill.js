import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: white;
  width: 19rem;
  flex-shrink: 0;
  height: fit-content;
  @media (max-width: 1150px) {
    width: 17rem;
  };
  @media (max-width: 670px) {
    width: 19rem;
  };
  @keyframes skillHover {
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  :hover {
    animation-name: skillHover;
    animation-duration: 0.8s;
    animation-iteration-count: 2;
  }
`;
const Title = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  font-size: 1.7rem;
  color: rgb(46, 142, 255);
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
function Skill({ name, src }) {
  return (
    <Container>
      <Title>{name}</Title>
      {src.map((img, i)=> <Img key={i} src={img} alt={img} />)}
    </Container>
  );
}

export default Skill;
