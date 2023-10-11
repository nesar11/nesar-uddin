import React from 'react';
import { styled } from 'styled-components';
import { abouts } from '../data';

const Container = styled.div`
  flex: 1;
  width: 80%;
  min-height: 45vh;
  padding-bottom: 50px;
  margin: auto;
  min-width: 280px;
  height: 250px;
  margin: auto;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 350px;
  display: flex;
  z-index: 2;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const Title = styled.p`
  padding: 20px;
  white-space: pre-line;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #cb0242;
  color: lightgray;
  cursor: pointer;
  font-weight: 600;
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    order: 1;
    font-weight: 12px;
  }
`;

const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: rgb(176, 2, 77);
  transition: step-start();
`;

const About = () => {
  return (
    <div>
      <PageTitle>About Me</PageTitle>
      <Container>
        {abouts.map((item) => (
          <div item={item} key={item.id}>
            <Wrapper>
              <Left>
                <Image src={item.image} alt="about" />
              </Left>
              <Right>
                <Title>{item.title}</Title>
                <Button>Read More</Button>
              </Right>
            </Wrapper>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default About;
