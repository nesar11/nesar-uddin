import React from 'react';
import { styled } from 'styled-components';
import { mobile } from '../reponsive';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 10px 0px;
  padding: 10px;
  outline-color: red;
  border: 1px solid #de3163;
  box-shadow: 0 0 2.5px #0d0d0d;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #de3163;
  box-shadow: 0px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
  cursor: pointer;
`;
const Span = styled.a`
  font-size: 12px;
  padding: 5px;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> SIGN IN</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button> LOGIN</Button> <br></br>
          <Span>
            <a href={`/register`}>DO NOT YOU REMEMBER THE PASSWORD</a>
          </Span>
          <Span>
            <a href={`/register`}>CREATE A NEW ACCOUNT</a>
          </Span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
