import React from 'react';
import '../css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Routes/Dashboard";
import MainLayout from "./Components/Routes/MainLayout";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import LedgerContextProvider from "./contexts/LedgerContext";
import AccountsContextProvider, { AccountsContext } from './contexts/AccountsContext';



export const Layout = () => {
    return (
        <div className="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
            <BrowserRouter>
                <ThemeContextProvider>
                    <LedgerContextProvider>
                        <AccountsContextProvider>
                            <NavBar />
                            <ThemeToggle />
                            <MainLayout />
                        </AccountsContextProvider>
                    </LedgerContextProvider>
                </ThemeContextProvider>
            </BrowserRouter>
        </div>

    );
}

export default Layout;