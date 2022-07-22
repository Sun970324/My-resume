import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
const Article = styled.article`
  display: block;
`;
const Container = styled.form`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
  background-color: white;
  width: 40%;
`;
const Label = styled.div`
  align-self: start;
  margin: 4px;
  font-size: 1rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  height: 2.3rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const Message = styled.textarea`
  width: 100%;
  min-height: 5rem;
  height: auto;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;
const Button = styled.button`
  width: 10em;
  height: 4em;
  background-color: rgb(249,197,30);
  color: black;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0px;
  :hover{
    transform: scale(1.02);
  }
`;
function Contact() {
  return (
    <Article>
      <Container>
        <Title name={"Contact"} isWhite={false} />
        <Label>* 이름</Label>
        <Input type="text" placeholder="이름을 입력해주세요" />
        <Label>* Phone</Label>
        <Input type="text" placeholder="전화번호를 입력해주세요" />
        <Label>* Email</Label>
        <Input type="text" placeholder="이메일을 입력해주세요" />
        <Label>Message</Label>
        <Message placeholder="메세지를 입력해주세요" />
        <Button>
          이메일 전송하기
        </Button>
      </Container>
    </Article>
  );
}

export default Contact;
