import styled from '@emotion/styled';

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <h1>Login</h1>
      </LoginBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginBox = styled.div`
  margin: 0 auto;
  text-align: center;
`;
