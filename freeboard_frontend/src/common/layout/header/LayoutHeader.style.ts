import styled from "@emotion/styled";
export const tooltip = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
`;
export const DetailProfile = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  height: 100px;
  background-color: #f5f2fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
`;
export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
export const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const InnerButton = styled.span`
  width: 40px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
  background-color: antiquewhite;
  color: gray;
  :hover {
    background-color: #f5f2fc;
  }
`;

export const ProfileGroup = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
