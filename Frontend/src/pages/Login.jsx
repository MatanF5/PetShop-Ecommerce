import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media-be.chewy.com/wp-content/uploads/2021/06/01091708/Samoyed-FeaturedImage.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: transparent;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-decoration: underline;
`;
const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 15px 10px 0px 0px;
  padding: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 5px;
  background-color: aliceblue;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: aliceblue;
    background-color: black;
  }
  &:disabled{
    color: gray;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
      </Wrapper>
    </Container>
  );
};
export default Login;
