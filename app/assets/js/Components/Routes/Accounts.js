import React, { useContext, useReducer, useState, useEffect } from 'react';
import '../../../css/main.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../ErrorMessagesComponents/Loader';
import Pagination from '../Pagination';
import { accountsReducer, initialState } from '../../Reducers/accountsReducer';
import axios from 'axios';
import NoAccount from '../ErrorMessagesComponents/NoAccount';
import EditAccount from '../Modals/AccountModals/EditAccount';
import ConfirmDelete from '../Modals/AccountModals/ConfirmDeleteAccount';
import { AccountsContext } from '../../contexts/AccountsContext';
import {useForm} from 'react-hook-form';
import { ModalContext } from '../../contexts/ModalContext';
const accountsGetUrl = '/api/account';

export const Accounts = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [showEditModal, setShowEditModal] = useState(false);
    const  {addAccount, deleteAccount} = useContext(AccountsContext);
    const [accountTitle, setTitle] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [accounts, accountFetch] = useReducer(accountsReducer, initialState)
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);
    const {register,errors, handleSubmit} = useForm();
    const{setCurrentModal} = useContext(ModalContext);
    const [accountId, setAccountId] = useState([]);
    //Fetch account
    useEffect(() => {
        axios.get(accountsGetUrl)
            .then(res => {
                accountFetch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                accountFetch({ type: 'FETCH_ERROR' })
            })
    }, []);

    //Refresh page 
    const refreshPage = () => {
        window.location.reload(false);
    }
    //Add account
    const onSubmit = () => {
        
        const newAccount = {
            account_title: accountTitle
        }
        addAccount(newAccount)
        setTitle('');
       refreshPage();
   
    }

    
    //Get current Account

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentAccount = accounts.accounts.slice(indexOfFirst, indexOfLast);

    //Paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Open Edit Modal
    const openEditModal = (e) => {
        e.preventDefault();
        setCurrentModal('EditAccount');
        
    }

    //Delete Account
   const handleAccountDelete = (id) => {
    setCurrentModal({
        name:'ConfirmDeleteAccount', 
        props: {callback:() => {
            deleteAccount(id);
            setCurrentModal(null);
            refreshPage();
        }
        }
    });
    
   }
    
    return (
        <div>


            <div className="flex flex-wrap sm:mt-6 ">

                {accounts.loading ? <Loader /> : (currentAccount.length == 0 ? <NoAccount /> : currentAccount.map(account => {
                    return (

                        <div className="w-full sm:w-1/4 mb-4 px-2 items-baseline" key={account.id} >

                            <div className="cursor-pointer items-center p-4  h-full shadow-lg" style={{ background: theme.ui, color: theme.syntax }}>
                                <Link to={"/dashboard/" + account.id} style={{ textDecoration: 'none' }}>
                                    <h3 className="mb-2 font-semibold items-center tracking-wide">{account.account_title}</h3>
                                    <div>
                                        <p className="text-sm "> Transactions: <span className="inline-block ml-2 px-2 rounded uppercase tracking-wide font-semibold " style={{ background: theme.badge_bg, color: theme.badge_syntax }} > {account.total_transactions}</span> </p>
                                    </div>
                                    <hr />
                                </Link>
                                <div className="mt-2">
                                    <p>
                                        <button onClick={openEditModal} className="edit-button inline-block ml-2 p-1 border " style={{ color: theme.syntax }} >
                                             <svg className="h-4 w-4 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                        </button>
                                        <button type="button" onClick={() => handleAccountDelete(account.id)} className="delete-button inline-block ml-2 p-1 border" style={{ color: theme.syntax }} >
                                             <svg className="h-4 w-4 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                        </button>
                                    </p>

                                </div>
                            </div>

                        </div>
                    );

                }))}
                <div class="w-full flex justify-center  items-center" >
                    <Pagination perPage={perPage} totalTransactions={accounts.accounts.length} paginate={paginate} />
                </div>
            </div>
            <div className="w-full justify-center  items-center">
            
                <form onSubmit={handleSubmit(onSubmit)} action="" class="form p-6 my-10 relative" style={{ background: theme.ui, color: theme.syntax }}>
                    <h3 class="text-2xl font-semibold">Add Account</h3>
                    <p class="text-gray-600"> please a new account in order to record transactions</p>
                    <input type="text" placeholder="Account name" class="border p-2 w-full mt-3" 
                         value={accountTitle} onChange={(e)=>setTitle(e.target.value)}
                         name ="account"
                         ref={register({required: 'Account name is required'})}
                    />
                  {errors.account && <p class="text-red-500 text-s italic" >{errors.account.message}</p>}
                    <input  type="submit" value="Submit" class="w-full mt-6 font-semibold select-none cursor-pointer flex flex-1 items-center p-2" style={{ background: theme.button, color: theme.button_text }} />
                   
                    </form>
                    
            </div>
        </div>
    );
}

export default Accounts;

