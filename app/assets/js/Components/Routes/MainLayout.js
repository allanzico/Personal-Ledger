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
                    <div className="flex justify-between px-6 -mb-px">
                        <h3 className="py-4 font-normal text-lg" style={{ color: theme.syntax }}>
                            <div className="flex -mb-px mr-8">
                                <svg className="h-6 w-6 fill-current mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                        Account title here...
                            </div>
                        </h3>

                    </div>

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