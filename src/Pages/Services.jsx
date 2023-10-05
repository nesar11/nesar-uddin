import { styled } from 'styled-components';
import { services } from '../data';
import Service from './Service';
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: rgb(176, 2, 77);
  transition: step-start();
`;
const Services = () => {
  return (
    <Container>
      <PageTitle>Service</PageTitle>
      {services.map((item) => (
        <Service item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Services;
