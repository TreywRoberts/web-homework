import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import 'jest-dom/extend-expect';
import { EDIT_TRANSACTION, DELETE_TRANSACTION } from '../../gql/mutation';
import { TxTable } from './TxTable';
import { transactions} from '../../../mocks/transactions-data';

      const mockData = 
        {
        request: {
            query: EDIT_TRANSACTION,
            variables:{
              id: '5d5c1f747e01cd704f18f864',
              user_id: 'Trey',
              description: 'refund',
              merchant_id: 'Target',
              debit: false,
              credit: true,
              amount: 250,
            },      
          },
          newData: jest.fn(()=>({
          data:
            {
              id: '5d5c1f747e01cd704f18f864',
            },
          })),
        }
  
  
      const deleteMock ={
        request:{
          query: DELETE_TRANSACTION,
          variables: {
            id: '5d5c1f747e01cd704f18f863',
          }
        },
        newData: jest.fn(()=>({
          data:{
            id: '5d5c1f747e01cd704f18f863'
          }
        })),
      }

    

describe('Transactions Table', () => {

  it('Should edit a transaction', async  () => {
    const {container} = render(
    <MockedProvider addTypename={false} mocks={[mockData]}>
      <TxTable data={transactions} />
    </MockedProvider>
    )

    const button = screen.getByTestId('transaction-5d5c1f747e01cd704f18f864-editButton');
    userEvent.click(button);

    const userInput = screen.getByDisplayValue(/employee3/i);
    userEvent.clear(userInput);
    userEvent.type(userInput, "Trey");

    const merchantInput = screen.getByDisplayValue(/walmart/i);
    userEvent.clear(merchantInput);
    userEvent.type(merchantInput, "Target")

    const newUser = await screen.findByDisplayValue(/trey/i);
    expect(newUser).toBeInTheDocument();

    const newMerchant = await screen.findByDisplayValue(/target/i);
    expect(newMerchant).toBeInTheDocument();
  
    const saveButton = screen.getByText(/save/i);
    userEvent.click(saveButton);

    const editTransactionMutation = mockData.newData;
    await waitFor(() => expect(editTransactionMutation).toHaveBeenCalled());
  })

  it('Should change digit to roman numeral', ()=>{
    render(
      <MockedProvider addTypename={false} mocks={[mockData]}>
        <TxTable data={transactions} />
      </MockedProvider>
      )

      const numeralButton = screen.getByTestId('transaction-5d5c1f747e01cd704f18f863-numeralButton');

      const digit = screen.getByTestId('transaction-5d5c1f747e01cd704f18f863-amount');
      expect(digit).toHaveTextContent(150);

      userEvent.click(numeralButton);
      expect(digit).toHaveTextContent(/CL/i);
  })
  
  it('Should cancel editing with cancel button', async ()=>{
    const {container} = render(
      <MockedProvider addTypename={false} mocks={[mockData]}>
        <TxTable data={transactions} />
      </MockedProvider>
      )
      const editButton = screen.getByTestId('transaction-5d5c1f747e01cd704f18f864-editButton');
      userEvent.click(editButton);

      const userInput = screen.getByDisplayValue(/employee3/i);
      userEvent.clear(userInput);
      userEvent.type(userInput, "Trey");
      const cancelButton = screen.getByText(/cancel/i);
      const newUser = screen.getByDisplayValue(/trey/i);
      //checks to see if Trey has been typed in the document
      expect(newUser).toBeInTheDocument();

      userEvent.click(cancelButton);
      const updatedEditButton = await screen.findByTestId('transaction-5d5c1f747e01cd704f18f864-editButton');

      expect(newUser).not.toBeInTheDocument();
      expect(updatedEditButton).toBeInTheDocument();


  })
  it('Should delete transaction', async ()=>{
    const {container}=render(
      <MockedProvider mocks={[deleteMock]} addTypename={false}>
        <TxTable data={transactions} />
      </MockedProvider>
      )

      const button = screen.getByTestId('transaction-5d5c1f747e01cd704f18f863-deleteButton')

      userEvent.click(button)

      const deleteTransactionMutation = deleteMock.newData;
      await waitFor(() => expect(deleteTransactionMutation).toHaveBeenCalled());



  })

})
