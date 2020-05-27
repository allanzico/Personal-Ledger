import React, {useContext} from 'react';
import '../../../css/main.css';
import {ThemeContext} from "../../contexts/ThemeContext";
import Dashboard from "./Dashboard";



const MainLayout = () => {
    const  {isLightTheme, light, dark} = useContext(ThemeContext);
    const  theme = isLightTheme ? light : dark;
    return(
        //Consume theme context in functional components

                <div className="flex mt-4" style={{background:theme.bg, color:theme.syntax}}>
                    <div className="w-full md:w-1/4  md:mx-8 " style={{background:theme.ui}}>

                    </div>
                    <div className="w-full md:w-3/4 " style={{background:theme.ui}}>
                     <Dashboard/>
                    </div>

                </div>

    );
}

export default MainLayout;