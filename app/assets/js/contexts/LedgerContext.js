import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { ledgerReducer, initialState} from '../Reducers/ledgerReducer';

const debitPostUrl = '/api/debit/create';

export const LedgerContext = createContext();
const LedgerContextProvider = (props) => {
    const [state, debitAdd] = useReducer(ledgerReducer, initialState)

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


    return (
        <LedgerContext.Provider value={{ debitAdd, addDebit }} >
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;