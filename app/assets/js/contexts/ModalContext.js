import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { accountsReducer, initialState } from '../Reducers/accountsReducer';


export const ModalContext = createContext();

const ModalContextProvider = (props) => {
const [currentModal, setCurrentModal] = useState(null);
    return (
        <ModalContext.Provider value={{currentModal, setCurrentModal}}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;