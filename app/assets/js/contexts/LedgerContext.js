import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const LedgerContext = createContext();
const ledgerUrl = '/api/ledger';

const LedgerContextProvider = (props) => {
    const [ledgerData, setLedgerData]= useState([]);

    //Fetch ledger Data
    useEffect(()=> {
        axios.get(ledgerUrl)
            .then(res=>{
                setLedgerData(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }, []);

    return (
        <LedgerContext.Provider value={{ledgerData}}>
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;