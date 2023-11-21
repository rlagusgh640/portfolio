import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
export const SearchBox = styled.div`
  width: 700px;
  height: 52px;
  border-radius: 15px;
  background-color: #f5f2fc;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 30px;
  cursor: pointer;
  :hover {
    margin-left: 5px;
    margin-bottom: 5px;
    color: red;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  margin: 0px 20px;
`;
