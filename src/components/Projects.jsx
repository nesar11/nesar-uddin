import { styled } from 'styled-components';
import { projects } from '../data';
import Product from './Project';
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
