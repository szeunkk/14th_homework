"use client"

import Button from '@/components/ui/button/Button'
import { Inputfield, Textareafield } from '@/components/ui/input/Inputfield'
import InputBoardAddress from '@/components/ui/input/InputBoardAddress'
import InputImage from '@/components/ui/input/InputImage'
import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { ChangeEvent } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { CREATE_BOARD } from '@/graphql/mutations/board'


export default function BoardsNewPage (){

    /* 게시물 등록 유효성 검사 */
    // 1. 작성자, 비밀번호, 제목, 컨텐츠 작성 시 setState로 상태 변경
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [youtubeUrl, setYoutubeUrl] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [address, setAddress] = useState("")
    const [addressDetail, setAddressDetail] = useState("")

    // 1-2. 페이지 이동을 위한 useRouter
    const router = useRouter();

    // 1-3. 게시글 생성 API 요청 함수
    const [createBoard] = useMutation(CREATE_BOARD)


    // 2. 필수 작성 요소 작성 여부에 따른 버튼 활성화
    const [isValid, setIsValid] = useState(true)

    // 3. Change Event에 따른 유효성 검증
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        
        setWriter(value)
    
        if(value && password && title && contents){
          setIsValid(false)
        } else{
          setIsValid(true)
        }
      }
      const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        setPassword(value)
    
        if(writer && value && title && contents){
          setIsValid(false)
        } else{
          setIsValid(true)
        }
      }
      const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setTitle(value)
    
        if(writer && password && value && contents){
          setIsValid(false)
        } else{
          setIsValid(true)
        }
      }
      const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setContents(value)
    
        if(writer && password && title && value){
          setIsValid(false)
        } else{
          setIsValid(true)
        }
      }

      // 3-1. 필수 요소 아닌 ChangeEvent 추가
      const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setYoutubeUrl(value)
      }

      const onChangeBoardAddress = (event: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        switch(id){
          case "zipcode": {setZipcode(value);break;}
          case "address": {setAddress(value);break;}
          case "addressDetail": {setAddressDetail(value);break;}
        }
      }

      // 4. 버튼 활성화 후 등록 버튼 클릭 시 알럿 발생
      const onClickBtn = async () => {
        try{

          const result = await createBoard({
            variables:{
              createBoardInput:{
                writer: writer,
                password: password,
                title: title,
                contents: contents,
                youtubeUrl: youtubeUrl,
                boardAddress: {
                  zipcode: zipcode,
                  address: address,
                  addressDetail: addressDetail,
                }
              }
            }
          })
          console.log("🚀 ~ onClickBtn ~ result:", result)
          const boardId = result.data.createBoard._id
          router.push(
            `/boards/${boardId}`
          )

        } catch (error) {
          alert("에러가 발생하였습니다. 다시 시도해 주세요.");
        } 



      }

    return(
        <div className={styles.Formfield}>
            {/* 폼 타이틀 */}
            <div className={styles.postForm__title}>게시물 등록</div>
            {/* 작성자 그룹 */}
            <div className={styles.postForm__writer__group}>
                <Inputfield type='text' label='작성자' required placeholder='작성자 명을 입력해 주세요.' onChange={onChangeWriter}></Inputfield>
                <Inputfield type='password' label='비밀번호' required placeholder='비밀번호를 입력해 주세요.' onChange={onChangePassword}></Inputfield>
            </div>
            <hr />
            <Inputfield type='text' label='제목'required placeholder='제목을 입력해 주세요.' onChange={onChangeTitle} ></Inputfield>
            <hr/>
            <Textareafield label='내용' required placeholder='내용을 입력해 주세요.' onChange={onChangeContents} ></Textareafield>
            <hr />
            <InputBoardAddress placeholder='주소를 입력해 주세요.' placeholder_2='상세주소' onChange={onChangeBoardAddress}></InputBoardAddress>
            <hr />
            <Inputfield type='string' label='유튜브 링크' placeholder='링크를 입력해 주세요.' onChange={onChangeYoutubeUrl}></Inputfield>
            <hr />
            <div className={styles.postForm__attachments__group}>
                <label>사진 첨부</label>
                <div className={styles.image__upload__group}>
                    <InputImage />
                    <InputImage />
                    <InputImage />
                </div>
            </div>
            <div className={styles.postForm__button__group}>
                <Link href='/'>
                    <Button type="button" variant='FormBtn'>취소</Button>
                </Link>
                <Button type="submit" variant='FormBtn' disabled={isValid} onClick={onClickBtn}>등록하기</Button>
            </div>
        </div>
    );
}