import React from 'react';
import { categories } from '../data';
import { mobile } from '../reponsive';
import CategoryItem from './CategoryItem';
import { styled } from 'styled-components';
const Container = styled.div`
  width: 80%;
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  ${mobile({ height: '100%', padding: '0px', flexDirection: 'column' })}
`;
const PageTitle = styled.h1`
  width: 100%;
  padding-top: 30px;
  text-align: center;
  color: #b00296;
`;
const Categories = () => {
  return (
    <Container>
      <PageTitle>Skills</PageTitle>;
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
