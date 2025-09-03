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
import YoutubeUrl from "@/components/features/boards/detail/YoutubeUrl";

export default function BoardsBoardIdPage() {
    const params = useParams();
    const boardId = params.boardId

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: boardId
        }
    })

    const { writer, title, contents, youtubeUrl, images, createdAt, likeCount, dislikeCount } = data?.fetchBoard || {} ;

    const date = createdAt?.slice(0,10)

    return(
        <div className={styles.boardsDetail}>
            <Sectiontitle text={title} />
            <Writer writer={writer} date={date}/>
            <img src="/images/boardsdetail_image.png" className={styles.addimage1}/>
            <Sectioncontent content={contents}/>
            {youtubeUrl !== "" ? <YoutubeUrl youtubeUrl={youtubeUrl}></YoutubeUrl> : ""}
            <Like bad={dislikeCount} good={likeCount}/>
            <div className={styles.boardsDetail__button__group}>
                <Link href='/'>
                    <Button type="button" variant='FormBtn'><img src="/icons/menu.svg"/>목록으로</Button>
                </Link>
                <Button type="button" variant='FormBtn'><img src="/icons/edit.svg"/>수정하기</Button>
            </div>
        </div>
    )
}