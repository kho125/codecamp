import { gql } from '@apollo/client'

export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            _id
            name
            picture
            userPoint{
                _id
                amount
            }
        }
    }
`
export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
    mutation createPointTransactionOfLoading($impUid:ID!){
        createPointTransactionOfLoading(impUid:$impUid){
            amount
        }
    }
`
export const LOGOUT_USER = gql`
    mutation logoutUser{
        logoutUser
    }
`