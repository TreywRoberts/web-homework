import React, {useState} from 'react'
// import { useMutation } from '@apollo/client';
// import { EDIT_TRANSACTION } from '../../gql/mutation.js'

const EditRow = ({
    editFormData, 
    handleEditFormChange, 
    handleCancel,
    setCredit,
    setDebit
    }) => {

    // const [ editTransaction, {error} ] = useMutation(EDIT_TRANSACTION);

    // const [debit, setDebit] = useState(editFormData.debit);
    // const [credit, setCredit] = useState(editFormData.credit);

    // const editTrans = (e) =>{
    //     e.preventDefault()
    //     editTransaction({
    //         variables: {
    //             id: editFormData.id,
    //             user_id: editFormData.user_id,
    //             description: editFormData.description,
    //             merchant_id: editFormData.merchant_id,
    //             debit: debit,
    //             credit: credit,
    //             amount: parseInt(editFormData.amount)
    //         }
    //     });
    //     if (error){
    //         console.log(error)
    //     }
    // }



    return (
        <tr>
        <td><input
        type="text"
        placeholder="User"
        id='user_id'
        value={editFormData.user_id}
        onChange={handleEditFormChange}
        >
        </input></td>
        <td><select
        type="text"
        placeholder="Description"
        id='description'
        value={editFormData.description}
        onChange={handleEditFormChange}
        >
            <option value="Food">Food</option>
            <option value="Fun">Fun</option>
            <option value="Gas">Gas</option>
        </select></td>
        <td><input
        type="text"
        placeholder="Merchant"
        id='merchant_id'
        value={editFormData.merchant_id}
        onChange={handleEditFormChange}
        >
        </input></td>
        <td><input
        type="radio"
        placeholder="Debit"
        id='debit'
        name='paymentType'
        value={editFormData.debit}
        onChange={()=>{
            setDebit(true)
            setCredit(false)
        }}
        >
        </input></td>
        <td><input
        type="radio"
        placeholder="Credit"
        id='credit'
        name='paymentType'
        value={editFormData.credit}
        onChange={()=>{
            setCredit(true)
            setDebit(false)
        }}
        >
        </input></td>
        <td><input
        type="number"
        placeholder="Amount"
        id='amount'
        value={editFormData.amount}
        onChange={handleEditFormChange}
        >
        </input></td>
        <td>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
        </td>
        </tr>
    )
}

export default EditRow
