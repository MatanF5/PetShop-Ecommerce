import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: transparent;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-decoration: underline;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 15px;
  background-color: aliceblue;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    color:aliceblue;
    background-color: black;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </Form>
        <Button>Create</Button>
      </Wrapper>
    </Container>

  );
};

export default Register;
