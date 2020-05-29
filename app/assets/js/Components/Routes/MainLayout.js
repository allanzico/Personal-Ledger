import React, { useContext, createContext } from 'react';
import '../../../css/main.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import Dashboard from "./Dashboard";
import { LedgerContext } from '../../contexts/LedgerContext';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideNav from '../SideNav';
import Accounts from './Accounts';


const MainLayout = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (

        <div className=" w-full flex-grow container mx-auto sm:px-4" style={{ background: theme.bg }}>
            <div className="flex flex-wrap -mx-4" >
                <div className="w-full lg:mb-0 lg:w-1/4 px-4 flex-col justify-center items-center" >
                    <div className="flex-grow flex flex-col ">
                        <div className="flex-grow flex px-6 py-6 text-grey-darker items-center -mx-4">
                            <SideNav />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 px-4">
                    <div className="justify-center items-center">
                        <div className="mb-4">
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/dashboard/:id" component={Dashboard} />
                                <Route path="/account" component={Accounts} />
                            </Switch>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default MainLayout;