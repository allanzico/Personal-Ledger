import React from 'react';
import '../css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavComponents/NavBar";
import Dashboard from "./Components/Routes/Dashboard";
import MainLayout from "./Components/Routes/MainLayout";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import LedgerContextProvider from "./contexts/LedgerContext";
import AccountsContextProvider, { AccountsContext } from './contexts/AccountsContext';
import ModalContextProvider from './contexts/ModalContext';
import ModalManager from './Components/Modals/ModalManager';



export const Layout = () => {
    return (
        
            
        <div className="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
            <BrowserRouter>
            <ModalContextProvider>
                <ThemeContextProvider>
                    <LedgerContextProvider>
                        <AccountsContextProvider>
                            <NavBar />
                            <ThemeToggle />
                            <MainLayout />
                            <ModalManager/>
                        </AccountsContextProvider>
                    </LedgerContextProvider>
                </ThemeContextProvider>
                </ModalContextProvider>
            </BrowserRouter>
        </div>
       

    );
}

export default Layout;