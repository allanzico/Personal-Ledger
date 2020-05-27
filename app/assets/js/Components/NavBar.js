import React, { useContext } from 'react';
import '../../css/main.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
    // const  {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{ background: theme.bg, color: theme.syntax }}>

            <div className="container mx-auto px-4">
                <div className="flex items-center  md:justify-between py-2 ">
                    <div className="w-1/2 md:w-auto m-auto text-center text-2xl font-medium">
                        Personal Ledger
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NavBar;