import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { CREATE_USER } from "./BoardSignUp.query";
import * as S from "./BoardSignUp.styles";
import { useForm } from "react-hook-form";
import type { IData } from "./BoardSignUp.type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMovePage } from "../../../commons/hooks/useMove";
const schema = yup.object({
  name: yup.string().required("작성자를 입력해주세요"),
  email: yup
    .string()
    .email("이메일 형식 이어야합니다")
    .required("이메일은 필수입력입니다."),
  password: yup.string().min(6, "최소 6자리이상").required("비밀번호 필수입력"),
});
export default function BoardSignUpUI() {
  const { onClickMoveToPage } = useMovePage();
  const { register, handleSubmit, formState } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    // 제어컴포넌트 클릭 onSubmit 할때마다 비제어에서 제어로 변경
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  // 전달받은데이터로 onClickSubmit실행
  const onClickSubmit = async (data: IData) => {
    const result = await createUser({
      variables: {
        createUserInput: {
          ...data,
          // {name:"김현호" ,email:"r@gmail",password:"*****"}
        },
      },
    });
    console.log(result.data?.createUser);
    alert(`${result.data?.createUser.name} 가입 축하드립니다`);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* handleSubmit 이 register에 적힌 state를 등록해줌 onClickSubmit으로 전달 */}
      <S.Container>
        <S.Message>회원가입</S.Message>
        <S.Message>가입을 통해 더 다양한 서비스를 만나 보세요👍</S.Message>
        <S.InputContainer>
          닉네임:<S.DetailInput>* 닉네임</S.DetailInput>
          <S.InputBox type="text" placeholder="닉네임" {...register("name")} />
          <div style={{ color: "red" }}>{formState.errors.name?.message}</div>
        </S.InputContainer>
        {/* 에러메세지 */}
        {/* register => useState와 같이 state를 등록하는데 필요한 기능이 모두 들어있음 */}
        <S.InputContainer>
          이메일:<S.DetailInput>* 이메일</S.DetailInput>
          <S.InputBox type="text" placeholder="r@mail" {...register("email")} />
          <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
        </S.InputContainer>

        <S.InputContainer>
          패스워드:<S.DetailInput>* 패스워드</S.DetailInput>
          <S.InputBox
            type="password"
            placeholder="비밀번호 6자리이상"
            {...register("password")}
          />
          <div style={{ color: "red" }}>
            {formState.errors.password?.message}
          </div>
        </S.InputContainer>
        <S.ButtonContainer>
          <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>
          <S.GoToLoginButton
            type="button"
            onClick={onClickMoveToPage("/login")}
          >
            로그인하러가기
          </S.GoToLoginButton>
          {/* default 값 type="submit" */}
        </S.ButtonContainer>
      </S.Container>
    </form>
  );
}
