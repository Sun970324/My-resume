import React from 'react';
import styled from 'styled-components';
import FooterImg from './FooterImg';
const Container = styled.footer`
  height: 11rem;
  padding-top: 3rem;
  background-color: rgb(34,34,34);
  text-align: center;
`
const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
`
const Descript = styled.div`
  font-size: 0.9rem;
  color: rgb(245,245,245);
`
function Footer() {
  return (
    <Container>
      <Logos>
        <FooterImg logo={'/img/git-hub.png'} />
        <FooterImg logo={'/img/notion.png'} />
      </Logos>
      <Descript>
      © 2022. Yoon Sun Woong. All rights reserved.
      </Descript>
    </Container>
  )
}

export default Footer;