import { FetchBoardCommentsDocument, FetchBoardCommentsQuery, FetchBoardCommentsQueryVariables } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation"
import { IUseCommentList } from "./types";

export default function useCommentList(){

    const params = useParams();
    const boardId = params.boardId

    if(!boardId) return;
    
    const { data } = useQuery<FetchBoardCommentsQueryVariables>(FetchBoardCommentsDocument, {
        variables: {
            boardId
        },
        fetchPolicy: 'cache-and-network'
    })

    if(!data) return;

    const fetchBoardComments = data?.fetchBoardComments

    return(fetchBoardComments)
}