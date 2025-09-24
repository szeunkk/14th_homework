"use client";

import Button from "@/components/ui/button/Button";
import { Inputfield } from "@/components/ui/input/Inputfield";
import styles from "./styles.module.css";

export default function Signup() {
  return (
    <form className={styles.formContainer}>
      <span className={styles.title}>회원가입</span>
      <div>
        회원가입을 위해 아래 빈칸을 모두 채워 주세요
        <div className={styles.inputContainer}>
          <Inputfield
            type="text"
            placeholder="이메일을 입력해 주세요."
            label="이메일"
            required
          />
          <Inputfield
            type="text"
            placeholder="이름을 입력해 주세요."
            label="이름"
            required
          />
          <Inputfield
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            label="비밀번호"
            required
          />
          <Inputfield
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요."
            label="비밀번호 확인"
            required
          />
        </div>
      </div>
      <>
        <Button variant="FormBtn" type="submit">
          회원가입
        </Button>
      </>
    </form>
  );
}
