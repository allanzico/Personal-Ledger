import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';


const Pagination = ({ perPage, totalTransactions, paginate }) => {
    const pageNumbers = [];
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    for (let index = 1; index <= Math.ceil(totalTransactions / perPage); index++) {
        pageNumbers.push(index);
    }
    return (
        <div>
            <ul className="flex pl-0 list-none my-2 cursor-pointer " style={{ color: theme.syntax, borderColor: theme.ui }}>
                {pageNumbers.map(number => (
                    <a onClick={() => paginate(number)}>
                        <li className="relative block py-2 px-3 leading-tight border border-r-0" key={number}>
                            {number}
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
