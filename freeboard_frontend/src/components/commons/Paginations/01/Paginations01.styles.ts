import styled from "@emotion/styled";
export const Column = styled.span`
  margin: 0px 50px;
`;
interface IPageProps {
  isAcitve?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isAcitve ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isAcitve ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isAcitve ? "none" : "pointer")};
`;
