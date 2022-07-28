import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Tags from "../components/Tags";
import { init, send } from "emailjs-com";
const Article = styled.article`
  display: block;
`;
const Container = styled.form`
  width: 100%;
  padding: 0 2rem 4rem;
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
  font-size: 15px;
  margin-bottom: 1rem;
`;
const Message = styled.textarea`
  width: 100%;
  min-height: 5rem;
  height: auto;
  font-size: 15px;
  margin-bottom: 1.5rem;
`;
const Button = styled.button`
  width: 10em;
  height: 4em;
  background-color: rgb(46, 142, 255);
  color: white;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0px;
  :hover {
    transform: scale(1.02);
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 10%;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`
const Contact = forwardRef((props, ref) => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const info = [
    { img: "user", lable: "이름", value: "윤선웅" },
    { img: "phone", lable: "연락처", value: "010-2368-5202" },
    { img: "email", lable: "이메일", value: "ysw5202222@gmail.com" },
  ];
  useEffect(() => {}, []);
  const sendEmail = (e) => {
    init("4od_0SAjGzmq8Hbui");
    let templateParams = {
      userName,
      phone,
      email,
      message,
    };
    send("service_ndqrukt", "template_q5pycjr", templateParams);
    alert("이메일 보내주심에 감사합니다. 2일 이내에 회신하겠습니다.");
    setUserName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  return (
    <Article>
        <Title name={"Contact"} isWhite={false} />
        <InfoDiv>
        {info.map((el, idx) => (
            <Tags key={idx} img={el.img} lable={el.lable} value={el.value} />
          ))}
          </InfoDiv>
      <Container ref={ref} onSubmit={sendEmail}>
        <Label>* 이름</Label>
        <Input
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={(e) => setUserName(e.target.value)}
        />
        <Label>* Phone</Label>
        <Input
          type="text"
          placeholder="전화번호를 입력해주세요."
          onChange={(e) => setPhone(e.target.value)}
        />
        <Label>* Email</Label>
        <Input
          type="text"
          placeholder="사용자의 이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Message</Label>
        <Message
          placeholder="메세지를 입력해주세요."
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button>이메일 전송하기</Button>
      </Container>
    </Article>
  );
});

export default Contact;
