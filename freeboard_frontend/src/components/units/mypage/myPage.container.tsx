import { gql, useQuery } from "@apollo/client";
import MyPageUi from "./myPage.presenter";
import { type IQuery } from "../../../commons/types/generated/types";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function MyPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  //return <>{data?.fetchUserLoggedIn.name} 님 환영합니다</>;

  return <MyPageUi data={data} />;
}
