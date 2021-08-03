import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard($aaa: ID!){
        fetchBoard(boardId: $aaa){
            writer
            title
            contents
        }
    }
`

export default function BoardsEditPage(){
    const router = useRouter()
    const {data} = useQuery<IQuery>(FETCH_BOARD, {
        variables: { aaa: router.query.boardId }
    })

    return <BoardWrite isEdit={true} data = {data} />
}