import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from '@emotion/core';
import { Transactions } from './transactionData/Transactions';
import Home from './components/pages/Home';

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/transactions'>Your Transactions</a>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Transactions} exact path='/transactions' />
        </div>
        <div className='footer'>
        <nav css={navStyle}>
          <ul >
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/transactions'>Your Transactions</a>
            </li>
          </ul>
        </nav>

        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
`

const navStyle = css`
  grid-row: 1;
  background:black;
  
  a{
    color:white;
    text-decoration:none;
    font-size:2rem;
    transition: all 1s ease;  

  }
  a:hover{
    color: red;
  }
  
  & > ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content:space-evenly;
    height:100px;
  }
  
  & > ul > li:not(:first-of-type) {
    // margin-left: 16px;
  }

`

const contentStyle = css`
  grid-row: 2;
  padding-top:-200px;
  // border:1px solid black
  
`
