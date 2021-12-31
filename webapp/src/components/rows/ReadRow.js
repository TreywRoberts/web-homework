import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_TRANSACTION } from '../../gql/mutation'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

const ReadRow = ({tx, handleEditClick}) => {
    
    const [deleteTransaction]= useMutation(DELETE_TRANSACTION)

    // console.log(tx)
    return (
        <tr data-testid={`transaction-${tx.id}`} key={`transaction-${tx.id}`}>
        {/* <td data-testid={makeDataTestId(tx.id, 'tx.id')}>{tx.id}</td> */}
        <td data-testid={makeDataTestId(tx.id, 'userId')}>{tx.user_id}</td>
        <td data-testid={makeDataTestId(tx.id, 'description')}>{tx.description}</td>
        <td data-testid={makeDataTestId(tx.id, 'merchant')}>{tx.merchant_id}</td>
        <td data-testid={makeDataTestId(tx.id, 'debit')}>{tx.debit.toString()}</td>
        <td data-testid={makeDataTestId(tx.id, 'credit')}>{tx.credit.toString()}</td>
        <td data-testid={makeDataTestId(tx.id, 'amount')}>{tx.amount}</td>
        <td>
            <button type='button' onClick={(event)=> handleEditClick(event, tx)}>edit</button>
        <button onClick={()=>{
          deleteTransaction({variables: {id: tx.id}})
          console.log(id)
        }}>delete</button>
        </td>
      </tr>
    )
}

export default ReadRow
