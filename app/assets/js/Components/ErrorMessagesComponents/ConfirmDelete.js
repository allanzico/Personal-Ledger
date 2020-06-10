import React, { useEffect, useContext, useReducer } from 'react'
import { node } from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';
import { accountsReducer } from '../../Reducers/accountsReducer';
import Axios from 'axios';
const accountDeleteUrl = '/api/account/delete/';

const ConfirmDelete = ({ closeConfirmModal, account }) => {

    let modalRef;
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const [accounts, dispatch] = useReducer(accountsReducer, [])
    const theme = isLightTheme ? light : dark;

    console.log(account)


    //Delete method
    // useEffect((id) => {
    //     Axios.delete(accountDeleteUrl + id)
    //         .then((account) => {
    //             dispatch({ type: 'DELETE_ACCOUNT', payload: id })
    //             console.log(account)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    //detect event listener
    useEffect(() => {
        document.addEventListener('click', onClickOutside)
    }, []);

    //Close Modal on outside click
    const onClickOutside = (e) => {
        modalRef && !modalRef.contains(e.target) ? closeConfirmModal() : null
    }

    return (

        <div className="modal pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div ref={(node) => (modalRef = node)} className="modal-container w-11/12 md:max-w-md mx-auto z-50 overflow-y-auto" style={{ background: theme.bg, color: theme.syntax }} >

                <div className="modal-content py-4 text-left px-6" style={{ background: theme.ui, color: theme.syntax }}>
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Delete Account!</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis fuga in provident est quis sapiente, exercitationem voluptatibus voluptas atque. Ipsam quibusdam fugiat incidunt repudiandae at quia porro cum illum!
                    </p>
                    <div className="flex justify-end pt-2">
                        <button onClick={closeConfirmModal} className="px-4 p-3 mr-2 border" style={{ color: theme.syntax }} > Cancel</button>
                        <button className="modal-close px-4 p-3 " style={{ background: theme.button, color: theme.button_text }}>Update</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;