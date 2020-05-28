import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchAccounts, initialState } from '../Reducers/accountsReducer';


export const AccountsContext = createContext();
const accountsUrl = '/api/account';

const AccountsContextProvider = (props) => {

    const [accounts, dispatch] = useReducer(fetchAccounts, initialState)
    useEffect(() => {
        axios.get(accountsUrl)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);



    return (
        <AccountsContext.Provider value={{ accounts, dispatch }}>
            {props.children}
        </AccountsContext.Provider>
    );
}

export default AccountsContextProvider;