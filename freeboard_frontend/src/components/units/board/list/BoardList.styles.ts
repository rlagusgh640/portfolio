import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const TableTop = styled.div`
  border: 2px solid gray;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  cursor: pointer;
  border-bottom: 1px solid gray;
`;
export const Column = styled.div`
  width: 25%;
`;
export const ColumnTitle = styled.div`
  width: 25%;
`;
export const Delete = styled.button`
  border: none;
  background: aqua;
  color: black;
  width: 100px;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;
export const BoardWriteButton = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
