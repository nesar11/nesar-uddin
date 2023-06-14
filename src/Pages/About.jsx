import React from 'react';
import { styled } from 'styled-components';
import { abouts } from '../data';

const Container = styled.div`
  flex: 1;
  width: 80%;
  min-height: 40vh;
  padding-bottom: 50px;
  margin: auto;
  min-width: 280px;
  height: 250px;
  padding: 20px;
  margin: auto;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
  position: relative;

  &:hover {
    background-color: #f8d0f4c2;
  }
`;

const Image = styled.img`
  height: 350px;
  display: flex;
  z-index: 2;
  margin-bottom: 20px;
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

const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div``;

const Right = styled.div``;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #cb0242;
  color: lightgray;
  cursor: pointer;
  font-weight: 600;
  margin: 20px;
`;
const About = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <Container>
        {abouts.map((item) => (
          <div item={item} key={item.id}>
            <Wrapper>
              <Left>
                <Image src={item.image} alt="about" />
              </Left>
              <Right>
                <Title> {item.title}</Title>
                <Button> Read More</Button>
              </Right>
            </Wrapper>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default About;
