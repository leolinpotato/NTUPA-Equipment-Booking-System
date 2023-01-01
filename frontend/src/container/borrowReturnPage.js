import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/borrowReturnPage.css'

const BorrowReturnPage = () => {

    const navigate = useNavigate();

    const navigateToBorrow = () => {
        navigate('/borrow');
    };

    const navigateToReturn = () => {
        navigate('/return');
    };

    return (
        <div className='borrowReturnPageContainer'>
            <button onClick={navigateToBorrow} id='borrowButton'>Borrow</button>
            <button onClick={navigateToReturn} id='returnButton'>Return</button>
        </div>
    )
}
export default BorrowReturnPage