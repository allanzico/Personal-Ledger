import React, { useContext } from 'react';
import '../../css/main.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from 'react-router-dom';


const SideNav = () => {
    // const  {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row mb-2">

                <div
                    className="select-none cursor-pointer flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" style={{ background: theme.ui, color: theme.syntax }}>
                    <div className="flex flex-col justify-center items-center mr-2">
                        <svg className="h-6 w-6 fill-current mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                        </svg>
                    </div>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-small">Dashboard</div>
                        </div>
                    </Link>
                </div>


            </div>
            <div className="w-full flex flex-row mb-2">
                <div
                    className="select-none cursor-pointer flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" style={{ background: theme.ui, color: theme.syntax }}>

                    <div className="flex flex-col justify-center items-center mr-2">
                        <svg className="h-6 w-6 fill-current mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <Link to="/account" style={{ textDecoration: 'none' }}>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-small">Accounts</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-row mb-2 hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <button className="select-none cursor-pointer flex flex-1 items-center p-2" style={{ background: theme.button, color: theme.button_text }}>
                    <div className="flex flex-col justify-center items-center mr-2">
                        <svg className="h-6 w-6 fill-current mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                        <div className="font-small">Add Transaction</div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default SideNav;