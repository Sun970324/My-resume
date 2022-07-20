import React from "react";
import styled from "styled-components";
import Tags from "../components/Tags";
import Title from "../components/Title";
const Article = styled.article`
  display: block;
`;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

const Contents = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
function MyInfo() {
  const info = [
    { img: "user", lable: "이름", value: "윤선웅" },
    { img: "calinder", lable: "생년월일", value: "1997.03.24" },
    { img: "pin", lable: "주소지", value: "경기도 수원시" },
    { img: "phone", lable: "연락처", value: "010-2368-5202" },
    { img: "email", lable: "이메일", value: "ysw5202222@gmail.com" },
  ];
  return (
    <Article>
      <Container>
        <Title name={"About me"} />
        <Contents>
          {info.map((el, idx) => (
            <Tags key={idx} img={el.img} lable={el.lable} value={el.value} />
          ))}
        </Contents>
      </Container>
    </Article>
  );
}

export default MyInfo;
