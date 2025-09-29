import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";

export const withAuth = (Component: ComponentType) => () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({
        title: "해당 페이지에 접속 권한이 없습니다.",
        content: "로그인 후 이용해주세요.",
      });

      router.push("/login");
    }
  }, []);

  return <Component />;
};
