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
    url('https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-style: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #de3163;
  box-shadow: 0px 2.9825618267059326px 7.456404209136963px 0px #0000001a;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="passwordConfirmation" />
          <Agreement>
            By Creating an account, I conset to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button> CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
