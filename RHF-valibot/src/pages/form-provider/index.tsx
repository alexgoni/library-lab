/*
3. FormProvider

목적: 컴포넌트를 분리할 때 Context API를 사용하여 폼 객체를 하위로 전파
*/

import {
  FormProvider,
  useForm,
  useFormContext,
  type SubmitHandler,
} from "react-hook-form";

interface LoginFormInputs {
  email: string;
}

export default function FormProviderPage() {
  const form = useForm<LoginFormInputs>({
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>FormProvider</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput />
          <button type="submit">제출</button>
        </form>
      </FormProvider>
    </>
  );
}

function CustomInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormInputs>();

  return (
    <div>
      <label>이메일</label>
      <input {...register("email", { required: "이메일 필수!" })} />
      {errors.email && <p>{errors.email.message}</p>}
    </div>
  );
}
