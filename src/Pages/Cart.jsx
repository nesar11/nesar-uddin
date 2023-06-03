import React from 'react';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../reponsive';
const Caontainer = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? '#cb0242' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  padding: 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Details = styled.span`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '22px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #cb0242;
  color: white;
  font-weight: 600;
  border: none;
  ${mobile({ fontSize: '15px' })}
`;

const Cart = () => {
  return (
    <Caontainer>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title> YOUR BAG</Title>
        <Top>
          <TopBottom> CONTINUE SHOPPING</TopBottom>
          <TopTexts>
            <TopText>Shopping Bags (2)</TopText>
            <TopText>Your wish list (0)</TopText>
            <TopText></TopText>
          </TopTexts>
          <TopBottom type="filled"> CHECKOUT NOW</TopBottom>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/0/10057216_8d6ad931_iPhone13.png" />
                <Details>
                  <ProductName>
                    <b> Priduct: </b> iPhone 13
                  </ProductName>
                  <ProductId>
                    <b> ID: </b> qw2344545
                  </ProductId>
                  <ProductColor color="black">
                    {/* <b> Color: </b> red */}
                  </ProductColor>
                  <ProductSize>
                    <b> Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$800</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/0/10057216_8d6ad931_iPhone13.png" />
                <Details>
                  <ProductName>
                    <b> Priduct: </b> iPhone 14
                  </ProductName>
                  <ProductId>
                    <b> ID: </b> qw2344545
                  </ProductId>
                  <ProductColor color="blue">
                    {/* <b> Color: </b> red */}
                  </ProductColor>
                  <ProductSize>
                    <b> Size: </b> S
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$900</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText> Subtotal</SummaryItemText>
              <SummaryItemPrice> $800</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Estimated Shipping</SummaryItemText>
              <SummaryItemPrice> $80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Shipping Discount</SummaryItemText>
              <SummaryItemPrice> $-6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> Total</SummaryItemText>
              <SummaryItemPrice> $874</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton> Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Caontainer>
  );
};

export default Cart;
