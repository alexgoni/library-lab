/*
2. Controller

RHF은 비제어 컴포넌트 방식을 강조하지만, 외부 UI 라이브러리를 사용하는 경우 ref를 꽂을 수 없는 구조가 있을 수 있다.
제어 방식 컴포넌트를 RHF의 생태계로 끌어들이기 위한 다리 역할
*/

import { Controller, useForm, type SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  rememberMe: boolean;
}

export default function ControllerPage() {
  const { control, handleSubmit } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log({ data });
  };

  return (
    <>
      <h1>Controller</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "이메일은 필수입니다." }}
          render={({ field, fieldState }) => (
            <div>
              <label>이메일</label>
              <input {...field} placeholder="example@test.com" />
              {fieldState.error && (
                <p style={{ color: "red" }}>{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <div>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
              />
              <label>아이디 저장</label>
            </div>
          )}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

// ----

// import {
//   useController,
//   useForm,
//   type Control,
//   type SubmitHandler,
// } from "react-hook-form";

// interface LoginFormInputs {
//   email: string;
//   rememberMe: boolean;
// }

// function CustomEmailInput({ control }: { control: Control<LoginFormInputs> }) {
//   const {
//     field,
//     fieldState: { error },
//   } = useController({
//     name: "email",
//     control,
//     rules: { required: "이메일이 필요합니다." },
//   });

//   return (
//     <div>
//       <label>이메일</label>
//       <input {...field} placeholder="example@test.com" />
//       {error && <p style={{ color: "red" }}>{error.message}</p>}
//     </div>
//   );
// }

// function CustomCheckbox({ control }: { control: Control<LoginFormInputs> }) {
//   const { field } = useController({
//     name: "rememberMe",
//     control,
//   });

//   return (
//     <div>
//       <input type="checkbox" checked={field.value} onChange={field.onChange} />
//       <label>아이디 저장</label>
//     </div>
//   );
// }

// export default function UseControllerPage() {
//   const { control, handleSubmit } = useForm<LoginFormInputs>({
//     defaultValues: { email: "", rememberMe: false },
//   });

//   const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>useController Hook</h1>
//       <CustomEmailInput control={control} />
//       <CustomCheckbox control={control} />
//       <button type="submit">제출</button>
//     </form>
//   );
// }
