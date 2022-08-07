import { MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: lightgray;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  font-weight: bold;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Payment = styled.img`
  width: 250px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Pet Shop.</Logo>
        <Desc>Cheap Prices, Cute pets, Great food and Toys</Desc>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Israel
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          matanfridlis5@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
