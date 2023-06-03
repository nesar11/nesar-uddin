import React from 'react';
import { categories } from '../data';
import { mobile } from '../reponsive';
import CategoryItem from './CategoryItem';
import { styled } from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ height: '100%', padding: '0px', flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
