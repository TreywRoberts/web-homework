import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { css } from '@emotion/core'
import Modal from 'react-modal';

import AddForm from '../components/forms/addForm'
import PieChart from '../components/charts/PieChart'
const styles = css`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 10px;
padding: 1rem;
`

export function Transactions () {
  const { loading, error, data = {} } = useQuery(GetTransactions)
  const [modal, setModal] = useState(false)

    const modalOpen =()=>{
        setModal(true)
    }

    const modalClose = ()=>{
        setModal(false)
    }

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#f6f4e9',
      }
  };

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div css={styles}>
        <TxTable data={data.transactions} />
        <button onClick={modalOpen}>Add New Transaction</button>
                  <Modal isOpen={modal} style={customStyles} onRequestClose={modalClose}>
                      <AddForm modalClose={modalClose} />
                  </Modal>
        <PieChart data={data.transactions}/>
      </div>
    </Fragment>
  )
}
