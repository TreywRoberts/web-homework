import React, {Fragment, useState} from 'react';
import { arrayOf, string, bool, number, shape } from 'prop-types';
import { css } from '@emotion/core';

import EditRow from '../rows/EditRow';
import ReadRow from '../rows/ReadRow';

const styles = css`

  form {
    display: flex;
    flex-direction: column;
    // justify-content:center;
    // align-items: center;
    gap: 10px;
    padding: 1rem;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    border: 1px solid #ffffff;
    text-align: center;
    padding: 8px;
    font-size: 2rem;
  }
  
  th {
    background-color: #f6f4e9;
  }
  
  td {
    background-color: #f2f5fb;
  }
  
  form {
    display: flex;
    gap: 5px;
  }
  
  form td:last-child {
    display: flex;
    justify-content: space-evenly;
  }
  
  form * {
    font-size: 28px;
  }
 
`


export function TxTable ({data }) {
  
  const [editFormData, setEditFormData] =useState({
    id:"",
    user_id: "",
    description:"",
    merchant_id:"",
    debit: false,
    credit: false,
    amount: 0
  })
  const [editContactId, setEditContactId] = useState(null)

  const [amount, setAmount] = useState(0)

   const handleRomanConvertClick = (e, num)=>{
      e.preventDefault()
      if(Number.isInteger(amount)){
        setAmount(RomanConverter(num))
      }else{
        setAmount(amount)
      }
    }

    console.log(amount)


  const handleEditFormChange = (e) =>{
    e.preventDefault();

    const fieldName = e.target.getAttribute("id")
    const fieldValue = e.target.value

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleEditClick =(event, tx) =>{
    event.preventDefault();
    setEditContactId(tx.id)

    const formValues ={
    id: tx.id,
    user_id: tx.user_id,
    description:tx.description,
    merchant_id:tx.merchant_id,
    debit: tx.debit,
    credit: tx.credit,
    amount: tx.amount
    }

    setEditFormData(formValues)

  }

  const handleCancel = () =>{
    setEditContactId(null)
  }
  




  return (
    <div className='app-container'>
    <form>
    <table css={styles}>
      <tbody>
        <tr className='header'>
          {/* <td >ID</td> */}
          <th >User ID</th>
          <th >Description</th>
          <th >Merchant ID</th>
          <th >Debit</th>
          <th>Credit</th>
          <th >Amount</th>
          <th>Actions</th>
        </tr>
        {
          data.map(tx => {
            return(
              <Fragment>
                {editContactId === tx.id ? (
                <EditRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancel={handleCancel} /> ): (
                <ReadRow tx={tx} handleEditClick={handleEditClick} />)}
              </Fragment>

            )
          })
        }
      </tbody>
    </table>
    </form>
    </div>
  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
