import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인후 이용해주세요");
      void router.push("/login");
    }
  }, []);
  return <Component {...props} />;
};
