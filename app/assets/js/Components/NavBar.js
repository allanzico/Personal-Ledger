import React, {Component} from 'react';
import '../../css/main.css';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

class NavBar extends Component{

    //Consume the theme context in class components
    static  contextType = ThemeContext;

    render() {
        return (
            <AuthContext.Consumer>{(authContext)=> {
                const  {isAuthenticated, toggleAuth} = authContext;
                const  {isLightTheme, light, dark} = this.context;
                const  theme = isLightTheme ? light : dark;
                return(
                    <div style={{background: theme.bg, color: theme.syntax}}>
                        <div>
                            <div className="container mx-auto px-4">
                                <div className="flex items-center  md:justify-between py-2 ">
                                    <div className="w-1/2 md:w-auto m-auto text-center text-2xl font-medium">
                                        Personal Ledger
                                    </div>
                                    <div onClick={toggleAuth}>
                                        { isAuthenticated ? 'Logged in' :'Logged out'}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            }}
            </AuthContext.Consumer>
            );


    }

}
// const NavBar = () => {
//     return (
//
//         <div className="bg-gray-200">
//             <div>
//                 <div className="container mx-auto px-4">
//                     <div className="flex items-center  md:justify-between py-2 ">
//                         <div className="w-1/2 md:w-auto m-auto text-center text-gray-900 text-2xl font-medium">
//                             Personal Ledger
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//
//
//
//     );
// }

export default NavBar;