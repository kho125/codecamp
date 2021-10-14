import {gql} from '@apollo/client'

export const FETCH_USED_ITEMS_I_SOLD = gql`
    query fetchUseditemsISold{
        fetchUseditemsISold{
            _id
            name
            remarks
            contents
            price
            tags
            images
            createdAt
            buyer{
                name
            }
        }
    }
`
export const FETCH_USED_ITEMS_I_PICKED = gql`
    query fetchUseditemsIPicked{
        fetchUseditemsIPicked{
            _id
            name
            remarks
            contents
            price
            tags
            images
            createdAt 
            buyer{
                name
            }
            seller{
                name
            }
        }
    }
`
export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
    query fetchUseditemsCountISold{
        fetchUseditemsCountISold
    }
`
export const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId:ID!){
        deleteUseditem(useditemId:$useditemId)
    }
`