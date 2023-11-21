import styled from "@emotion/styled";
import { Rate } from "antd";
import "antd/dist/antd.min.css";
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;
export const PencilIcon = styled.img``;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 180px;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;
export const Contents = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: none;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  width: 91px;
  height: 50px;
`;
export const ContentsLength = styled.div`
  hegiht: 51px;
  color: gray;
  width: 100%;
`;
export const Star = styled(Rate)``;
