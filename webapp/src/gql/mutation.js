import { gql } from '@apollo/client';


export const ADD_TRANSACTION = gql `
mutation addTransaction(
    $user_id: String! 
    $description: String! 
    $merchant_id: String! 
    $debit: Boolean! 
    $credit: Boolean! 
    $amount: Float!) {
    addTransaction(
        user_id: $user_id
        description: $description
        merchant_id: $merchant_id
        debit: $debit
        credit: $credit
        amount: $amount
        
        ){
        id
    }
}
`

export const DELETE_TRANSACTION = gql`
mutation deleteTransaction($id: String!){
    deleteTransaction(id: $id){
        id
    }
}
`

export const EDIT_TRANSACTION = gql `
mutation editTransaction(
    $id:String!
    $user_id: String! 
    $description: String! 
    $merchant_id: String! 
    $debit: Boolean! 
    $credit: Boolean! 
    $amount: Float!) {
    editTransaction(
        id: $id
        user_id: $user_id
        description: $description
        merchant_id: $merchant_id
        debit: $debit
        credit: $credit
        amount: $amount
        ){
        id
    }
}
`