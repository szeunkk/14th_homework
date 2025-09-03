"use client"

import { FETCH_BOARD } from "@/graphql/queries/board";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Sectiontitle from "@/components/ui/section/Sectiontitle"; 
import Sectioncontent from "@/components/ui/section/Sectioncontent";
import Writer from "@/components/features/boards/detail/Writer";
import Like from "@/components/features/boards/detail/Like";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import styles from './styles.module.css'

export default function BoardsBoardIdPage() {
    const params = useParams();
    const boardId = params.boardId

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: boardId
        }
    })

    return(
        <div className={styles.boardsDetail}>
            <Sectiontitle text={data && data.fetchBoard.title} />
            <Writer writer={data? data.fetchBoard.writer : "비회원" } date={data && (data.fetchBoard.createdAt).slice(0,10)}/>
            <img src="/images/boardsdetail_image.png" className={styles.addimage1}/>
            <Sectioncontent content={data && data.fetchBoard.contents}/>
            <div className={styles.boardsDetail__youtube__group}>
                <img src="/icons/play.svg" className={styles.youtube__icon}/>
                <img src="/images/boardsdetail_image_2.png" className={styles.youtube__thumbnail} />
            </div>
            <Like bad={data && data.fetchBoard.dislikeCount} good={data && data.fetchBoard.likeCount}/>
            <div className={styles.boardsDetail__button__group}>
                <Link href='/'>
                    <Button type="button" variant='FormBtn'><img src="/icons/menu.svg"/>목록으로</Button>
                </Link>
                <Button type="button" variant='FormBtn'><img src="/icons/edit.svg"/>수정하기</Button>
            </div>
        </div>
    )
}