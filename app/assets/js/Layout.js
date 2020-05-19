import React from 'react';
import '../css/main.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Routes/Dashboard";
import MainLayout from "./Components/Routes/MainLayout";


export  const Layout = () => {
    return (
        <div className="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
        <BrowserRouter>

            <NavBar />
            <MainLayout/>
            <Switch>

                 <Route path="/dashboard" component={Dashboard}/>
            </Switch>


        </BrowserRouter>
        </div>
    );
}

export default Layout;