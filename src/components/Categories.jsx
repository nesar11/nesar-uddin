import React from 'react';
import { categories } from '../data';
import { mobile } from '../reponsive';
import CategoryItem from './CategoryItem';
import { styled } from 'styled-components';
const Container = styled.div`
  width: 80%;
  padding: 80px;
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  ${mobile({
    height: '100%',
    marginTop: '380px',
    padding: '0px',
    flexDirection: 'column',
  })}
`;
const PageTitle = styled.h1`
  width: 100%;
  padding-top: 30px;
  text-align: center;
  color: rgb(176, 2, 77);
  ${mobile({ marginTop: '80px' })}
`;
const Categories = () => {
  return (
    <Container>
      <PageTitle>Skills</PageTitle>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
