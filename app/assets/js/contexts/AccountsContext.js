import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { accountsReducer, initialState } from '../Reducers/accountsReducer';


export const AccountsContext = createContext();

const accountsPostUrl = '/api/account/create';
const accountsGetUrl = '/api/account';

const AccountsContextProvider = (props) => {

    const [state, dispatch] = useReducer(accountsReducer, initialState);
    const [accounts, accountFetch] = useReducer(accountsReducer, initialState)

     //Fetch account
     useEffect(() => {
        axios.get(accountsGetUrl)
            .then(res => {
                accountFetch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                accountFetch({ type: 'FETCH_ERROR' })
            })
    }, []);


    const addAccount =(account)=> {
        const config = {
            'Content-Type':'application/json'
        }
        axios.post(accountsPostUrl, account, config).then((res)=>{
            dispatch({
                type: 'ADD_ACCOUNT',
                payload:res.data
            })
         
        })
    }

    
    return (
        <AccountsContext.Provider value={{ dispatch, accounts, addAccount }}>
            {props.children}
        </AccountsContext.Provider>
    );
}

export default AccountsContextProvider;