import { useRouter } from "next/router";
import LayoutHeaderUi from "./LayoutHeader.presenter";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
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
export default function LayoutHeader() {
  const router = useRouter();
  const [saveData, setSaveData] = useState(false);
  useEffect(() => {
    const LoginState = localStorage.getItem("accessToken");
    if (LoginState) {
      setSaveData(true);
    } else {
      setSaveData(false);
    }
    console.log(saveData);
  });

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogo = () => {
    void router.push("/boards"); //boardlist
  };
  const onClickLoginPage = () => {
    void router.push("/login");
  };
  const onClickSubmitPage = () => {
    void router.push("/signup");
  };
  const onClickLogout = () => {
    window.localStorage.removeItem("accessToken");
    location.reload();
  };

  return (
    <LayoutHeaderUi
      onClickLogout={onClickLogout}
      data={data}
      saveData={saveData}
      onClickLogo={onClickLogo}
      onClickLoginPage={onClickLoginPage}
      onClickSubmitPage={onClickSubmitPage}
    />
  );
}
