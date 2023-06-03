import React from 'react';
import { styled } from 'styled-components';
import { abouts } from '../data';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
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
  min-width: 280px;
  height: 250px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
  position: relative;

  &:hover {
    background-color: #f8d0f4c2;
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
  height: 350px;
  display: flex;
  z-index: 2;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;

  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #b00296;
  transition: step-start();
`;
const Title = styled.h4`
  padding: 20px;
`;
const Desc = styled.span`
  text-align: justify;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div``;

const Right = styled.div``;
const About = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <Container>
        {console.log(abouts)}
        {abouts.map((item) => (
          <div item={item} key={item.id}>
            <Wrapper>
              <Left>
                <Image src={item.image} alt="about" />
              </Left>
              <Right>
                <Title> {item.title}</Title>
              </Right>
            </Wrapper>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default About;
