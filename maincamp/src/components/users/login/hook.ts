import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();

  const;

  const onClickSignup = () => {
    router.push("/signup");
  };

  return { onClickSignup };
}
