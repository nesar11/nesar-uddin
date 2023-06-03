import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../reponsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 60vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 40%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOPtion = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-content: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #cb0242;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #cb0242;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: red;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/0/10057216_8d6ad931_iPhone13.png" />
        </ImageContainer>
        <InfoContainer>
          <Title> Demin Jupsuite</Title>
          <Desc>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Desc>
          <Price>$233</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle> Size</FilterTitle>
              <FilterSize>
                <FilterSizeOPtion>XS</FilterSizeOPtion>
                <FilterSizeOPtion>X</FilterSizeOPtion>
                <FilterSizeOPtion>M</FilterSizeOPtion>
                <FilterSizeOPtion>L</FilterSizeOPtion>
                <FilterSizeOPtion>XL</FilterSizeOPtion>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button> Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
