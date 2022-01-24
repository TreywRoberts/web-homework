import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import 'jest-dom/extend-expect';
import GetTransactions from '../gql/transactions.gql';
import { transactions } from '../../mocks/transactions-data';
import {Transactions} from './Transactions';

const mockData = {
        request: {
            query: GetTransactions,
        },
        result: {
            data: {
                transactions
            }
        }
}

const mockDataError={
    request:{
        query: GetTransactions,
    },
    error: new Error("Network Error")
};


describe('Transactions Page', () => {

    it('should render', ()=>{
        render(
            <MockedProvider mocks={[mockData]}>
                <Transactions  />
            </MockedProvider>
        )
    })
    
    it('should show user "employee4" with amount "150"', async () => {
        const {container, getByTestId} = render(
            <MockedProvider addTypename={false} mocks={[mockData]}>
                <Transactions  />
            </MockedProvider>
        )
        //before data renders
        expect(container).toMatchSnapshot()

        await waitFor(()=>mockData)
        //after data renders
        expect(container).toMatchSnapshot()

        expect(getByTestId("transaction-5d5c1f747e01cd704f18f863-userId")).toHaveTextContent(/employee4/i)
        expect(getByTestId("transaction-5d5c1f747e01cd704f18f863-amount")).toHaveTextContent(150)
        expect(getByTestId("transaction-5d5c1f747e01cd704f18f863-userId")).toMatchSnapshot()
    });



    it('should render loading message', ()=>{
        render(
            <MockedProvider mocks={[mockData]}>
                <Transactions  />
            </MockedProvider>
        )

        const loadingMessage = screen.queryByText(/loading.../i)

        expect(loadingMessage).toBeInTheDocument()
        expect(loadingMessage).toBeTruthy()
    })

      it('should render with error', async ()=>{
        render(
            <MockedProvider addTypename={false} mocks={[mockDataError]}>
                <Transactions />
            </MockedProvider>
        )

        const errorMan = await screen.findByText(/error/i)

        expect(errorMan).toBeInTheDocument()
        expect(errorMan).toBeTruthy()

    })
    
  })