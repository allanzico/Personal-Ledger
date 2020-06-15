import React, { useContext } from 'react';
import AddDebit from '../AddComponents/AddDebitComponent';
import { ThemeContext } from '../../contexts/ThemeContext';
import AddCredit from '../AddComponents/AddCreditComponent';


export const AddTransaction = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
  
        <div className="flex w-full flex-wrap sm:mt-6 ">
            <div className="w-1/2  mb-4 px-2 items-baseline" >
                <AddDebit/>
            </div>
            <div className="w-1/2 justify-center  items-center"> 
              <AddCredit/>
            </div>
        </div>
    );
}

export default AddTransaction;

