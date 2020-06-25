import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { ledgerReducer, initialState} from '../Reducers/ledgerReducer';

const debitPostUrl = '/api/debit/create';
const creditPostUrl = '/api/credit/create';
const transactionDeleteUrl = '/api/ledger/delete/';


export const LedgerContext = createContext();
const LedgerContextProvider = (props) => {
    
    const [state, dispatch] = useReducer(ledgerReducer, initialState)

    //Add Debit
const addDebit =(debit)=> {
    const config = {
        'Content-Type':'application/json'
    }
    axios.post(debitPostUrl, debit, config).then((res)=>{
        dispatch({
            type: 'ADD_DEBIT',
            payload:res.data
        })
     
    })
}

//Add Credit
const addCredit =(credit)=> {
    const config = {
        'Content-Type':'application/json'
    }
    axios.post(creditPostUrl, credit, config).then((res)=>{
        dispatch({
            type: 'ADD_CREDIT',
            payload:res.data
        })
     
    })
}

//Delete ledger
const deleteTransaction = (id) => {
    axios.delete(transactionDeleteUrl + id);
    dispatch({
       type: 'DELETE_TRANSACTION',
       payload: id
   })
}

    return (
        <LedgerContext.Provider value={{ dispatch, addCredit, addDebit, deleteTransaction }} >
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;