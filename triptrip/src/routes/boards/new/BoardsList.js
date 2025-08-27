import { Link } from "react-router"
import { CustomButton } from "./BoardsNew"

const BoardsList = () => {
    return(
        <>
            <Link to='./boards/new'>
                게시글 등록하기
            </Link>
            <Link to='./boards/detail'>
                게시물 상세
            </Link>
        </>

    )}


export default BoardsList