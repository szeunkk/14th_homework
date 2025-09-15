import { FetchBoardsQuery } from "@/commons/graphql/graphql";

export type BoardType = FetchBoardsQuery['fetchBoards'][0]

export interface IBoardsListProps {
    flex: string[],
    textAlign: CanvasTextAlign[],
    pageNum: Array<number | undefined>,
    currentPage: number,
    data: BoardType[]
}