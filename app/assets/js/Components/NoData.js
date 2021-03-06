import React, { useContext } from 'react';
import '../../css/main.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from 'react-router-dom';



const NoData = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="w-full justify-center items-center p-4" style={{ background: theme.ui, color: theme.syntax }} >
            <div className="text-center px-6 py-4">
                <div className="py-8">
                    <div className="mb-4">
                        <svg className="inline-block fill-current text-grey h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" /></svg>
                    </div>
                    <p className="text-2xl text-grey-darker font-medium mb-4">No Data!</p>
                    <p className="text-grey max-w-xs mx-auto mb-6">Please select an account with transactions!</p>
                    <Link to="/account" style={{ textDecoration: 'none' }}>
                        <button className="select-none cursor-pointer items-center p-2" style={{ background: theme.button, color: theme.button_text }}>
                            <div className="flex-1 pl-1">
                                <div className="font-small">Select Account</div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default NoData;