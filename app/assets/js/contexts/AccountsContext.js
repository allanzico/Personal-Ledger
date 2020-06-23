import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { accountsReducer, initialState } from '../Reducers/accountsReducer';


export const AccountsContext = createContext();

const accountsPostUrl = '/api/account/create';
const accountDeleteUrl = '/api/account/delete/';
const accountsGetUrl = '/api/account';

const AccountsContextProvider = (props) => {

    const [accounts, dispatch] = useReducer(accountsReducer, initialState);

     //Fetch account
     useEffect(() => {
        axios.get(accountsGetUrl)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

  //Add new account
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

    //Delete Account
    const deleteAccount = (id) => {
        axios.delete(accountDeleteUrl + id);
        dispatch({
           type: 'DELETE_ACCOUNT',
           payload: id
       })
    }

    return (
        <AccountsContext.Provider value={{ accounts, addAccount, deleteAccount, dispatch}}>
            {props.children}
        </AccountsContext.Provider>
    );
}

export default AccountsContextProvider;