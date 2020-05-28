import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchLedgerData, initialState } from '../Reducers/LedgerReducer';


export const LedgerContext = createContext();


const LedgerContextProvider = (props) => {


    return (
        <LedgerContext.Provider >
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;