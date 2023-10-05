import React from 'react';
import { styled } from 'styled-components';
import { mobile } from '../reponsive';
import { Link, Outlet } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  padding: 0px 20px 25px 10px;

  ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;
const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 19px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
  text-decoration: none; /* Remove underline from all links */
  /* &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none; /* Remove underline during various states */
  /* } */
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000; /* Set your desired text color */
  /* Add more styles as needed */
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Title = styled.span`
  margin-top: -50px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Nesar Uddin</Logo>
        </Left>
        <Center></Center>
        <Right>
          <StyledLink to="/">
            <MenuItem> Home</MenuItem>
          </StyledLink>

          <StyledLink to="/about">
            <MenuItem> About</MenuItem>
          </StyledLink>

          <StyledLink to="/skills">
            <MenuItem>Skills</MenuItem>
          </StyledLink>
          <StyledLink to="/Service">
            <MenuItem> Service</MenuItem>
          </StyledLink>
          <StyledLink to="/projects">
            <MenuItem> Projects</MenuItem>
          </StyledLink>
          <MenuItem>Contact</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
