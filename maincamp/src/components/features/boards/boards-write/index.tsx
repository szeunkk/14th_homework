"use client";

import Button from "@/components/ui/button/Button";
import { Inputfield, Textareafield } from "@/components/ui/input/Inputfield";
import InputBoardAddress from "@/components/ui/input/InputBoardAddress";
import styles from "./style.module.css";
import useBoardsWrite from "./hook";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Board } from "@/commons/graphql/graphql";
import UploadImages from "./uploadImages/uploadImages";
import useBoardForm from "./useBoardForm";

export default function BoardsWrite({
  isEdit,
  data,
}: {
  isEdit: boolean;
  data?: { fetchBoard: Board };
}) {
  // const {
  //   onClickCancel,
  //   onClickUpdate,
  //   onClickSubmit,
  //   onChangeFile,
  //   onClickDelete,
  //   images,
  //   isModalOpen,
  //   onToggleModal,
  //   handleComplete,
  //   boardAddress,
  // } = useBoardsWrite({ data });

  const {
    register,
    handleSubmit,
    formState,
    watch,
    onClickSubmit,
    isModalOpen,
    onToggleModal,
    onClickDelete,
    onChangeFile,
    onClickCancel,
    handleComplete,
    onClickUpdate,
  } = useBoardForm({ data });

  return (
    <form
      className={styles.Formfield}
      onSubmit={
        isEdit ? handleSubmit(onClickUpdate) : handleSubmit(onClickSubmit)
      }
    >
      {/* 폼 타이틀 */}
      <div className={styles.postForm__title}>
        게시물 {isEdit ? "수정" : "등록"}
      </div>
      {/* 작성자 그룹 */}
      <div className={styles.postForm__writer__group}>
        <Inputfield
          type="text"
          label="작성자"
          required
          placeholder="작성자 명을 입력해 주세요."
          id="writer"
          {...register("writer")}
          // value={inputs?.writer}
          isEdit={isEdit}
          // onChange={onChangeInputs}
        ></Inputfield>
        <Inputfield
          type="password"
          label="비밀번호"
          required
          placeholder="비밀번호를 입력해 주세요."
          id="password"
          {...register("password")}
          // value={inputs?.password}
          isEdit={isEdit}
          // onChange={onChangeInputs}
        ></Inputfield>
      </div>
      <hr />
      <Inputfield
        type="text"
        label="제목"
        required
        placeholder="제목을 입력해 주세요."
        id="title"
        {...register("title")}
        // value={inputs?.title}
        // onChange={onChangeInputs}
      ></Inputfield>
      <hr />
      <Textareafield
        label="내용"
        required
        placeholder="내용을 입력해 주세요."
        id="contents"
        {...register("contents")}
        // value={inputs?.contents}
        // onChange={onChangeInputs}
      ></Textareafield>
      <hr />
      <InputBoardAddress
        placeholder="주소를 입력해 주세요."
        placeholder_2="상세주소"
        isEdit={isEdit}
        register={register}
        onClick={onToggleModal}
        // onChange={onChangeBoardAddress}
      ></InputBoardAddress>
      {isModalOpen && (
        <Modal
          title="주소입력하기"
          open={true}
          styles={{ body: { height: 450 } }}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed
            onComplete={handleComplete}
            style={{ height: "100%" }}
          />
        </Modal>
      )}
      <hr />
      <Inputfield
        type="string"
        label="유튜브 링크"
        placeholder="링크를 입력해 주세요."
        id="youtubeUrl"
        {...register("youtubeUrl")}
        // value={youtubeUrl}
        // onChange={onChangeYoutubeUrl}
      ></Inputfield>
      <hr />
      <div className={styles.postForm__attachments__group}>
        <label>사진 첨부</label>
        <UploadImages
          images={watch("images") ?? []}
          onClickDelete={onClickDelete}
          onChangeFile={onChangeFile}
        />
      </div>
      <div className={styles.postForm__button__group}>
        <Button type="button" variant="FormBtn" onClick={onClickCancel}>
          취소
        </Button>
        <Button
          type="submit"
          variant="FormBtn"
          disabled={!formState.isValid}
          // onClick={isEdit ? onClickUpdate : onClickSubmit}
        >
          {isEdit ? "수정" : "등록"}하기
        </Button>
      </div>
    </form>
  );
}
