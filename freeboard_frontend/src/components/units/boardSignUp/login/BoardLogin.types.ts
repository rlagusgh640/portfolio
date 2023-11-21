import type {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginPageUI {
  handleSubmit: UseFormHandleSubmit<IFormData, undefined>;
  register: UseFormRegister<IFormData>;
  //onClickLogin: () => void;
  onClickSubmit: () => void;
  formState: FormState<IFormData>;
}
export interface IFormData {
  email: string;
  password: string;
}
