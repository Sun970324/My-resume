import { forwardRef } from "react";
import styled from "styled-components";
import Title from "../components/Title";

const Container = styled.article`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
width: 50%;
  border-radius: 40%;
  margin: 0 auto 30px;
` 
const Text = styled.div`
  line-height: 2;
`
const Myself = forwardRef((props, ref) => {
  return(
    <Container>
      <Title name={'About me'} isWhite={false} />
      <Content>
        <Img src="/img/introduceImg.jpeg" />
        <Text>
          지속적인 성장이 가능하고 아이디어를 노트북 하나로 실현시킬 수 있는 것에 매력을 느껴 개발자의 길을 걷기로 했습니다.
          <br />
          웹개발로 세상에 긍정적인 변화를 만들어 가치를 창출하는 것이 개발자로서 궁극적인 목표입니다.
          <br/>
        </Text>
      </Content>
    </Container>
  )
})

export default Myself