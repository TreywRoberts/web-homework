import React, { useState } from 'react';
import { EDIT_TRANSACTION } from '../../gql/mutation.js'
import { useMutation } from '@apollo/client';

function EditForm ({tx}){
    const [id, setId] = useState(tx.id)
    const [userid, setUserId] = useState(tx.user_id);
    const [description, setDescription] = useState(tx.description);
    const [merchantid, setMerchantId] = useState(tx.merchant_id);
    const [debit, setDebit] = useState(tx.debit);
    const [credit, setCredit] = useState(tx.credit);
    const [amount, setAmount] = useState(parseInt(tx.amount))

    const [ editTransaction, {error} ] = useMutation(EDIT_TRANSACTION);

    const editTrans = () =>{
        editTransaction({
            variables: {
                id: id,
                user_id: userid,
                description: description,
                merchant_id: merchantid,
                debit: debit,
                credit: credit,
                amount: amount
            }
        });
        if (error){
            console.log(error)
        }
    }
    

    return(
    <div>
        <label>User</label>
        <input
        type="text"
        placeholder="User"
        value={userid}
        onChange={(e)=>{
            setUserId(e.target.value)
        }}
        >
        </input>
        <label>Description</label>
        <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        >
        </input>
        <label>Merchant</label>
        <input
        type="text"
        placeholder="MerchantId"
        value={merchantid}
        onChange={(e)=>{
            setMerchantId(e.target.value)
        }}
        >
        </input>
        <p>Payment Type</p>
        <input
        type="radio"
        id='debit'
        name='paymentType'
        value={!debit}
        onChange={()=>{
            setDebit(true)
            setCredit(false)
        }}
        />
        <label>Debit</label>
        <input
        type="radio"
        id='credit'
        name='paymentType'
        value={!credit}
        onChange={()=>{
            setCredit(true)
            setDebit(false)
        }}
        />
        <label>Credit</label>


        <label>Amount</label>
        <input
        type="number"
        step="0.01"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>{
            setAmount(parseInt(e.target.value))
        }}
        >
        </input>
        <button onClick={editTrans}>Save</button>
    </div>
    )
}

export default EditForm