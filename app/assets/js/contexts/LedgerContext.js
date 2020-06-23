import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { ledgerReducer, initialState} from '../Reducers/ledgerReducer';

const debitPostUrl = '/api/debit/create';
const creditPostUrl = '/api/credit/create';


export const LedgerContext = createContext();
const LedgerContextProvider = (props) => {
    
    const [state, debitAdd, creditAdd] = useReducer(ledgerReducer, initialState)

    //Add Debit
const addDebit =(debit)=> {
    const config = {
        'Content-Type':'application/json'
    }
    axios.post(debitPostUrl, debit, config).then((res)=>{
        debitAdd({
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
        debitAdd({
            type: 'ADD_CREDIT',
            payload:res.data
        })
     
    })
}

    return (
        <LedgerContext.Provider value={{ debitAdd, creditAdd, addCredit, addDebit }} >
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;