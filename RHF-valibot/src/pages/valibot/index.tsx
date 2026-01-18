import { useForm, type SubmitHandler } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";

const userSchema = v.pipe(
  v.object({
    id: v.pipe(v.string(), v.minLength(4, "아이디는 4자 이상이어야 합니다.")),
    password: v.pipe(
      v.string(),
      v.minLength(8, "비밀번호는 8자 이상이어야 합니다."),
    ),
    passwordConfirm: v.string(),
    age: v.pipe(
      v.number(),
      v.minValue(19, "19세 이상만 가능합니다."),
      v.transform((value) => Number(value)),
    ),
  }),
  v.forward(
    v.check(
      (input) => input.password === input.passwordConfirm,
      "비밀번호가 일치하지 않습니다.",
    ),
    ["passwordConfirm"],
  ),
);

type UserFormData = v.InferOutput<typeof userSchema>;

export default function ValibotPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: valibotResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>With Valibot</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>아이디: </label>
          <input {...register("id")} />
          {errors.id && <p style={{ color: "red" }}>{errors.id.message}</p>}
        </div>
        <div>
          <label>비밀번호: </label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <label>비밀번호 확인: </label>
          <input type="password" {...register("passwordConfirm")} />
          {errors.passwordConfirm && (
            <p style={{ color: "red" }}>{errors.passwordConfirm.message}</p>
          )}
        </div>
        <div>
          <label>나이: </label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>
        <button type="submit">가입하기</button>
      </form>
    </>
  );
}
