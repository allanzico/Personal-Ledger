import React from 'react';
import '../../../css/main.css';
import {ThemeContext} from "../../contexts/ThemeContext";


export const MainLayout = () => {
    return(

        //Consume theme context in functional components

        <ThemeContext.Consumer>{(context)=> {
            const  {isLightTheme, light, dark} = context;
            const  theme = isLightTheme ? light : dark;
            return (
                <div className="flex mt-4" style={{background:theme.bg, color:theme.syntax}}>
                    <div className="w-full md:w-1/4  md:mx-8 " style={{background:theme.ui}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </div>
                    <div className="w-full md:w-3/4 " style={{background:theme.ui}}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                </div>
            )
        }}

        </ThemeContext.Consumer>

    );
}

export default MainLayout;