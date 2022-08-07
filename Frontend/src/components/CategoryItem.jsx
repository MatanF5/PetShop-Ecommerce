import styled from "styled-components";
import { Link } from "react-router-dom";
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 100px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: aliceblue;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  background-color: aliceblue;
  opacity: 50%;
  &:hover {
    opacity: 100%;
  }
  &:hover ${Title} {
    font-size: 150px;
  }
  &:hover ${Button} {
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container bg={"aliceblue"}>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
