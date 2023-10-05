import React from 'react';
import { styled } from 'styled-components';
import { mobile } from '../reponsive';
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  position: relative;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    transition: all ease 0.5s;
  }
`;
const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  ${mobile({ height: '30vh' })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  text-align: center;
  color: #393939;
  margin-bottom: 20px;
  ${mobile({ marginBottom: '20px' })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #cb0242;
  color: lightgray;
  cursor: pointer;
  font-weight: 600;
`;
const Type = styled.h2`
  text-align: center;
  color: #393939;
  margin-bottom: 20px;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Type>{item.cat}</Type>
        <Title>{item.title} </Title>
        <Button> Read More</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
