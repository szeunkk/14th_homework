import { forwardRef } from "react";
import { BoardAddressProps, InputProps, TextareaProps } from "./type";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { Modal } from "antd";
import { FieldValues, Path } from "react-hook-form";
import { Button } from "../button";

/* input 컴포넌트: 라벨, span, input */
export const Inputfield = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, required, type, placeholder, isEdit, isAuth, error, ...rest },
    ref
  ) => {
    const router = useRouter();

    const handleUnauthClick = () => {
      Modal.confirm({
        title: "로그인 후 이용할 수 있습니다.",
        content: "댓글 기능은 로그인 후 이용할 수 있습니다.",
        okText: "로그인하기",
        cancelText: "창닫기",
        onOk() {
          router.push("/login");
        },
        onCancel() {},
      });
    };

    return (
      <div className={styles.Formfield}>
        <div>
          <label>{label}</label>
          {required && <span>*</span>}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          readOnly={isAuth === false ? true : false}
          disabled={isEdit}
          onClick={isAuth === false ? handleUnauthClick : undefined}
          {...rest}
          ref={ref}
        />
        <span>{error}</span>
      </div>
    );
  }
);

/* TextArea 컴포넌트: 라벨, span, input */
export const Textareafield = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      isCommentField,
      label,
      required,
      placeholder,
      isAuth,
      maxLength,
      error,
      ...rest
    },
    ref
  ) => {
    const router = useRouter();

    const handleUnauthClick = () => {
      Modal.confirm({
        title: "로그인 후 이용할 수 있습니다.",
        content: "댓글 기능은 로그인 후 이용할 수 있습니다.",
        okText: "로그인하기",
        cancelText: "창닫기",
        onOk() {
          router.push("/login");
        },
        onCancel() {},
      });
    };

    return (
      <div className={isCommentField ? styles.Commentfield : styles.Formfield}>
        {isCommentField ? (
          ""
        ) : (
          <div>
            <label>{label}</label>
            {required && <span>*</span>}
          </div>
        )}
        <textarea
          placeholder={placeholder}
          readOnly={isAuth === false ? true : false}
          maxLength={maxLength}
          onClick={isAuth === false ? handleUnauthClick : undefined}
          {...rest}
          ref={ref}
        ></textarea>
        <span>{error}</span>
      </div>
    );
  }
);

/* boardAddress 컴포넌트 */
export function InputBoardAddress<T extends FieldValues>({
  required,
  onClick,
  placeholder,
  placeholder_2,
  register,
  basePath,
}: BoardAddressProps<T>) {
  return (
    <div className={`${styles.Formfield} ${styles.FormAddressGroup}`}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label>주소</label>
          {required && <span>*</span>}
        </div>
        <div className={styles.ZipCodeGroup}>
          <input
            type="text"
            readOnly
            placeholder="01234"
            {...register(`${basePath}.zipcode` as Path<T>)}
          />
          <Button variant="FormBtn" type="button" onClick={onClick}>
            우편번호 검색
          </Button>
        </div>
      </div>
      <input
        type="text"
        id="address"
        placeholder={placeholder}
        readOnly
        {...register(`${basePath}.address` as Path<T>)}
      />
      {placeholder_2 && (
        <input
          type="text"
          id="addressDetail"
          placeholder={placeholder_2}
          {...register(`${basePath}.addressDetail` as Path<T>)}
        />
      )}
    </div>
  );
}
