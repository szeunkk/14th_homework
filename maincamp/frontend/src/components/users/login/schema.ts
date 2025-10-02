import z from "zod";

export type LoginFormVlaues = {
  email: string;
  password: string;
};

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("이메일 또는 비밀번호를 확인해주세요."),
  password: z.string().min(1, { message: "이메일 또는 비밀번호를 확인해주세요." }),
});
