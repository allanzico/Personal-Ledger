import React from 'react';
import '../../css/main.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (

        <div className="bg-gray-200">
            <div>
                <div className="container mx-auto px-4">
                    <div className="flex items-center  md:justify-between py-2 ">
                        <div className="w-1/2 md:w-auto m-auto text-center text-gray-900 text-2xl font-medium">
                            Personal Ledger
                        </div>
                    </div>
                </div>
            </div>

        </div>



    );
}

export default NavBar;