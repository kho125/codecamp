import {gql} from '@apollo/client'
export const FETCH_POINT_TRANSACTIONS = gql`
    query fetchPointTransactions($page:Int){
        fetchPointTransactions(page:$page){
            _id
            impUid
            amount
            balance
            status
            statusDetail
            createdAt
        }
    }
`
export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
    query fetchPointTransactionsOfLoading($page:Int){
        fetchPointTransactionsOfLoading(page:$page){
            _id
            impUid
            amount
            balance
            status
            statusDetail
            createdAt
        }
    }
`
export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
    query fetchPointTransactionsOfBuying($page:Int){
        fetchPointTransactionsOfBuying(page:$page){
            _id
            amount
            balance
            status
            statusDetail
            useditem{
                _id
                name
            }
            createdAt
        }
    }
`
export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
    query fetchPointTransactionsOfSelling($page:Int){
        fetchPointTransactionsOfSelling(page:$page){
            _id
            amount
            balance
            status
            statusDetail
            useditem{
                _id
                name
            }
            createdAt
        }
    }
`
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING = gql`
    query fetchPointTransactionsCountOfBuying{
        fetchPointTransactionsCountOfBuying
    }
`
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
    query fetchPointTransactionsCountOfSelling{
        fetchPointTransactionsCountOfSelling
    }
`
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
    query fetchPointTransactionsCountOfLoading{
        fetchPointTransactionsCountOfLoading
    }
`