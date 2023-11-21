import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 10px;
  width: 1000px;
  height: 900px;
  padding: 50px;
  display: flex;
  padding-bottom: 50px;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid gray;
  border-radius: 15px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
`;
export const Message = styled.div`
  font-size: 32px;
  font-weight: 1000;
  color: black;
`;

export const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid gray;
`;
export const DetailInput = styled.div`
  font-size: 11px;
  color: aliceblue;
`;
export const SubmitBtn = styled.button`
  width: 100px;
  border-radius: 15px;
  background-color: green;
  color: darkgray;
  cursor: pointer;
  margin-right: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GoToLoginButton = styled.button`
  width: 100px;
  border-radius: 15px;
  background-color: green;
  color: darkgray;
  cursor: pointer;
`;
