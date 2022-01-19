import React, { useState } from 'react';
import { ADD_TRANSACTION } from '../../gql/mutation.js';
import { useMutation } from '@apollo/client';
import { css } from '@emotion/core';

const styles = css`
    form{
        display: flex;
        flex-direction: column;
    };

`

function AddForm ({modalClose}){

    const [userid, setUserId] = useState("");
    const [description, setDescription] = useState("");
    const [merchantid, setMerchantId] = useState("");
    const [debit, setDebit] = useState(false);
    const [credit, setCredit] = useState(false);
    const [amount, setAmount] = useState(parseInt(0))

    const [ addTransaction, {error} ] = useMutation(ADD_TRANSACTION);

    const newTrans = (e) =>{
        addTransaction({
            variables: {
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
    <div css={styles}>
        <form onSubmit={newTrans}>
        <label>User</label>
        <input
        type="text"
        placeholder="User"
        required
        onChange={(e)=>{
            setUserId(e.target.value)
        }}
        >
        </input>
        <label>Category</label>
        <select
        type="text"
        placeholder="Description"
        required
        id='description'
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        >   
            <option label='Select One' hidden></option>
            <option value="Food" >Food</option>
            <option value="Fun">Fun</option>
            <option value="Gas">Gas</option>
        </select>
        <label>Merchant</label>
        <input
        type="text"
        placeholder="MerchantId"
        required
        onChange={(e)=>{
            setMerchantId(e.target.value)
        }}
        >
        </input>
        <div>

        <p>Payment Type</p>
        <label>Debit</label>
        <input
        className='radio'
        type="radio"
        id='debit'
        name='paymentType'
        value={!debit}
        required
        onChange={()=>{
            setDebit(true)
            setCredit(false)
        }}
        />
        <label>Credit</label>
        <input
        className='radio'
        type="radio"
        id='credit'
        name='paymentType'
        value={!credit}
        required
        onChange={()=>{
            setCredit(true)
            setDebit(false)
        }}
        />
        </div>
        <label>Amount</label>
        <input
        type="number"
        step="0.01"
        placeholder="Amount"
        required
        onChange={(e)=>{
            setAmount(parseInt(e.target.value))
        }}
        >
        </input>
        <button type='submit'>Add</button>
        <button onClick={modalClose}>Close</button>
        </form>
    </div>
    )
}

export default AddForm