import styled from "@emotion/styled";
import { Rate, Modal } from "antd";
import "antd/dist/antd.min.css";
export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  height: 129px;
  border-bottom: 1px solid gray;
  padding-top: 10px;
`;
export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
export const MainWrapper = styled.div`
  width: 100%;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;
export const OptionWrapper = styled.div`
  display: flex;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const deleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Star = styled(Rate)`
  padding-left: 10px;
`;
