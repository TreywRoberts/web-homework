import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event'
import 'jest-dom/extend-expect';
import { ADD_TRANSACTION } from '../../gql/mutation';
import AddForm from './addForm';

    const mockData =[
    {
        request:{
          query: ADD_TRANSACTION,
          variables: {
            user_id:"61cf3cf030fdca257f304cb6", 
            description: "Food", 
            merchant_id: "blockbuster", 
            debit: false, 
            credit: true, 
            amount: 10
          }
        },
        newData: jest.fn(()=>({
                data: {
                    addTransaction: {
                      user_id: "61cf3cf030fdca257f304cb6",
                      description: "Food",
                      merchant_id: "blockbuster",
                      debit: false,
                      credit: false,
                      amount: 10
                    }
                  }
              })),
        }
    ]
    



it('should add', async ()=>{
    render(
        <MockedProvider mocks={mockData} addTypename={false}>
            <AddForm />
        </MockedProvider>
    )
    const userIdInput = screen.getByPlaceholderText(/user/i)
    const description = screen.getByPlaceholderText(/description/i)
    const merchant_id = screen.getByPlaceholderText(/merchantid/i)
    const debit = screen.getByLabelText(/debit/i)
    const credit = screen.getByLabelText(/credit/i)
    const amount= screen.getByPlaceholderText(/amount/i)

    userEvent.type(userIdInput, '61cf3cf030fdca257f304cb6'),
    userEvent.selectOptions(description, ['Food'])
    userEvent.type(merchant_id, "blockbuster"),
    userEvent.click(credit)
    userEvent.type(amount, '10')

    const addButton = screen.getByRole('button', {name:/add/i})

    userEvent.click(addButton)

    const addTransactionMutation = mockData[0].newData;
    await waitFor(() => expect(addTransactionMutation).toHaveBeenCalled());
})