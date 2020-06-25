import React, { useContext, useReducer, useState, useEffect } from 'react';
import '../../../css/main.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import Loader from '../ErrorMessagesComponents/Loader';
import Pagination from '../Pagination';

import NoAccount from '../ErrorMessagesComponents/NoAccount';
import { AccountsContext } from '../../contexts/AccountsContext';
import {useForm} from 'react-hook-form';


export const AddAccounts = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const  {addAccount} = useContext(AccountsContext);
    const [accountTitle, setTitle] = useState('');
    const {register,errors, handleSubmit} = useForm();
   
   

    //Add account

    //Refresh page 
    const refreshPage = () => {
        window.location.reload(false);
    }
    //Add account
    const onSubmit = () => {
        const newAccount = {
            account_title: accountTitle
        }
        addAccount(newAccount)
        setTitle('');
       refreshPage();
    }

    
    
    return (
        <div>

            <div className="w-full justify-center  items-center">
            
                <form onSubmit={handleSubmit(onSubmit)} action="" class="form p-6 my-10 relative" style={{ background: theme.ui, color: theme.syntax }}>
                    <h3 class="text-2xl font-semibold">Add Account</h3>
                    <p class="text-gray-600"> please a new account in order to record transactions</p>
                    <input type="text" placeholder="Account name" class="border p-2 w-full mt-3" 
                         value={accountTitle} onChange={(e)=>setTitle(e.target.value)}
                         name ="account"
                         ref={register({required: 'Account name is required'})}
                    />
                  {errors.account && <p class="text-red-500 text-s italic" >{errors.account.message}</p>}
                    <input  type="submit" value="Submit" class="w-full mt-6 font-semibold select-none cursor-pointer flex flex-1 items-center p-2" style={{ background: theme.button, color: theme.button_text }} />
                   
                    </form>
                    
            </div>
        </div>
    );
}

export default AddAccounts;

