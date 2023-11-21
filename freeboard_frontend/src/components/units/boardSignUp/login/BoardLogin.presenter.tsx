import type { ILoginPageUI } from "./BoardLogin.types";
import * as L from "./BoardLogin.style";
export default function LoginPageUI(props: ILoginPageUI) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <L.LoginContainer>
        <L.LoginTitle>로그인</L.LoginTitle>
        <L.EmailInput
          type="text"
          placeholder="Email"
          {...props.register("email")}
        />
        <L.ErrorMessage>{props.formState.errors.email?.message}</L.ErrorMessage>

        <L.PasswordInput
          type="password"
          placeholder="PassWord"
          {...props.register("password")}
        />
        <L.ErrorMessage>
          {props.formState.errors.password?.message}
        </L.ErrorMessage>
        <L.GoToLoginButton>로그인하기</L.GoToLoginButton>
      </L.LoginContainer>
    </form>
  );
}
