import { styled } from 'styled-components';
import { projects } from '../data';
import Product from './Project';
import { mobile } from '../reponsive';
const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  ${mobile({ width: '100%', padding: '5px' })}
`;
const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #b00296;
  transition: step-start();
`;
const Projects = () => {
  return (
    <Container>
      <PageTitle>Projects</PageTitle>
      {projects.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Projects;
