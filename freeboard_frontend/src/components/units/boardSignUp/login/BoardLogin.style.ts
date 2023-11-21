import styled from "@emotion/styled";

export const LoginTitle = styled.div`
  font-weight: 1000;
  font-size: 40px;
  margin-bottom: 20px;
`;
export const LoginContainer = styled.div`
  background-image: url("/images/layout/gradation.jpg");
  background-size: contain;
  margin-top: 30px;
  width: 900px;
  height: 600px;
  border: 2px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
`;
export const EmailInput = styled.input`
  border: 1px solid gray;
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
export const PasswordInput = styled.input`
  border: 1px solid gray;
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
export const ErrorMessage = styled.div`
  color: red;
`;
export const GoToLoginButton = styled.button`
  width: 150px;
  border-radius: 15px;
  background-color: lightgreen;
  color: black;
  cursor: pointer;
  margin-right: 20px;
  height: 40px;
  :hover {
    background-color: black;
    color: white;
  }
`;
