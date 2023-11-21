import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { LOGIN_USER } from "./BoardLogin.query";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LoginPageUI from "./BoardLogin.presenter";
import { useForm } from "react-hook-form";
import type { IFormData } from "./BoardLogin.types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("이메일 필수입력").email("email형식이 아닙니다"),
  password: yup.string().required("비밀번호 필수 입력"),
});
export default function LoginPage() {
  //global state
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickSubmit = async (data: IFormData) => {
    try {
      //1.jwt 토큰 받기
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      //2.jwt 토큰 global state 에 저장
      if (!accessToken) {
        Modal.error({ content: "로그인실패" });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      //3.로그인 성공 페이지 이동
      void router.push("/loginSuccess");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "회원정보가없습니다" });
    }
  };

  return (
    <>
      <LoginPageUI
        register={register}
        handleSubmit={handleSubmit}
        onClickSubmit={onClickSubmit}
        formState={formState}
      />
    </>
  );
}
