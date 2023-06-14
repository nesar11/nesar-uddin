import React from 'react';
import { styled } from 'styled-components';

const Info = styled.div`
  opacity: 0;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  padding: 20px;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  min-width: 350px;
  height: 280px;
  z-index: 2;
`;

const Title = styled.h2``;
const Desc = styled.span``;
const Project = ({ item }) => {
  return (
    <Container>
      <Circle />

      <Image src={item.img} />
      <Info>
        <Title> {item.title}</Title>
        <Desc>{item.desc}</Desc>
      </Info>
    </Container>
  );
};

export default Project;
