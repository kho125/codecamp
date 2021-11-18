import { gql } from '@apollo/client'
export const UPDATE_USER = gql`
    mutation updateUser($updateUserInput:UpdateUserInput!){
        updateUser(updateUserInput:$updateUserInput){
            _id
            name
            picture
        }
    }
`
export const RESET_USER_PASSWORD = gql`
    mutation resetUserPassword($password:String!){
        resetUserPassword(password:$password)
    }
`
export const LOGOUT_USER = gql`
    mutation logoutUser{
        logoutUser
    }
`
export const UPLOAD_FILE = gql`
    mutation uploadFile($file:Upload!){
        uploadFile(file:$file){
            url
        }
    }
`