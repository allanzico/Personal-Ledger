import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../css/datepicker.css';
import { AccountsContext } from '../../contexts/AccountsContext';

const AddCredit = () =>{
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [startDate, setStartDate] = useState(new Date());
    const {accounts} = useContext(AccountsContext);
    const [account, setAccount] = useState(Object.values(accounts.accounts)[0].id);
return (
    <div>
         <div className="w-full justify-center  items-center">
            
         <form class="form p-6 my-10 relative" style={{ background: theme.ui, color: theme.syntax }}>
                <h3 class="text-2xl font-semibold">Add Income</h3>
                <div class=" w-full flex mb-6">
                    <input type="text" placeholder="Description" className="border p-2 w-full mt-3" 
                        
                        />
                </div>
                <div class="w-full flex mb-6">
                    <select class="block w-full  border text-grey-darker p-2">
                    {
                        Object.values(accounts.accounts).map(account=>( <option value={account.id} key={account.id}>{account.account_title}</option>))
                    }
                    </select>
                    
                </div>

                <div class=" w-full flex mb-6">
                    <div class="w-1/4 mr-3">
                        <input class="block w-full border p-2 mb-3" type="text" placeholder="Amount" />
                    </div>
                    <div class="w-3/4">
                    <DatePicker 
                        className="date-picker"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showYearDropdown
                        yearDropdownItemNumber={5}
                        scrollableYearDropdown
                        style={{height:30}}
                      />
                    </div>
                </div>
                <input  type="submit" value="Add" className="w-full mt-6 font-semibold select-none cursor-pointer flex flex-1 items-center p-2" style={{ background: theme.button, color: theme.button_text }} />
               
                </form>
                
        </div>
    </div>
)
}

export default AddCredit;