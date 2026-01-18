/*
1. useForm

register: 필드 등록 / 이벤트 핸들러 주입 / 유효성 검사
handleSubmit: This function will receive the form data if form validation is successful.
formState: 현재 폼이 어떤 상태인지
*/

import { useForm, type SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function UseFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log({ data });
  };

  return (
    <>
      <h1>useForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이메일</label>
          <input
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
            })}
            placeholder="example@test.com"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px", margin: "4px 0 0" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" {...register("password")} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
