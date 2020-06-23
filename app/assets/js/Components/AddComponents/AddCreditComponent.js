import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../css/datepicker.css';
import { AccountsContext } from '../../contexts/AccountsContext';
import { LedgerContext } from '../../contexts/LedgerContext';
import { useForm } from 'react-hook-form';

const AddCredit = () =>{
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const  {addCredit} = useContext(LedgerContext);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactDate, setTransactDate] = useState(new Date());
    const {accounts} = useContext(AccountsContext);
    const [account, setAccount] = useState(Object.values(accounts.accounts)[0].id);
    const {register,errors, handleSubmit} = useForm();

    //Add Debit
    const onSubmit = () => {
        const newTransaction = {
            account: account,
            transaction_description: description,
            credit: amount,
            date: transactDate
        }
        addCredit(newTransaction)
        setDescription('')
        setAmount('')
        setTransactDate(new Date())

    }



return (
    <div>
         <div className="w-full justify-center  items-center">
            
         <form onSubmit={handleSubmit(onSubmit)} className="form p-6 my-10 relative" style={{ background: theme.ui, color: theme.syntax }}>
                <h3 className="text-2xl font-semibold">Add Income</h3>
                <div className=" w-full flex mb-6">
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Description" className="border p-2 w-full mt-3" 
                        
                        />
                </div>
                <div className="w-full flex mb-6">
                    <select value={account} onChange={e => setAccount(e.target.value)} className="block w-full  border text-grey-darker p-2">
                    {
                        Object.values(accounts.accounts).map(account=>( <option value={account.id} key={account.id}>{account.account_title}</option>))
                    }
                    </select>
                    
                </div>

                <div className=" w-full flex mb-6">
                    <div className="w-1/4 mr-3">
                        <input value={amount} onChange={(e)=>setAmount(e.target.value)} className="block w-full border p-2 mb-3" type="text" placeholder="Amount" />
                    </div>
                    <div className="w-3/4">
                    <DatePicker 
                        className="date-picker"
                        selected={transactDate}
                        onChange={date => setTransactDate(date)}
                        showYearDropdown
                        yearDropdownItemNumber={5}
                        scrollableYearDropdown
                        style={{height:30}}
                      />
                    </div>
                </div>
                <input  type="submit" value="Add" className="w-full mt-6 font-semibold select-none cursor-pointer flex flex-1 items-center p-2" style={{ background: theme.button, color: theme.button_text }} />
               
                </form>
                
        </div>
    </div>
)
}

export default AddCredit;