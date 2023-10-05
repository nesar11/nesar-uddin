import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../reponsive';

const Container = styled.div`
  display: flex;
  background-color: #898787;
  ${mobile({ flexDirection: 'column' })}
  margin-top: auto;
`;
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 20px;
  ${mobile({ flexDirection: 'column' })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ flexDirection: 'column', innerWidth: '80%' })}
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

// const Payment = styled.img`
//   width: 50%;
// `;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Nesar Uddin</Logo>
          <Desc>
            Experienced IT professional with expertise in leading software
            development, ensuring accessibility, customer experience, and
            usability, seeking opportunities in a dynamic and growing company to
            excel in a first-class career.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>service</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: '10px' }} />
            Dataran Prima Condominium<br></br>Jalan PJU 1/42, Dataran Prima
            <br></br> 47301 Petaling Jaya, Selangor
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: '10px' }} /> +6011 2836 5140
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: '10px' }} />{' '}
            nesar.uddin100@gmail.com
          </ContactItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
