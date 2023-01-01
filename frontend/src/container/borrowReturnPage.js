import React from 'react'
import { useNavigate } from 'react-router-dom';

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
            <button onClick={navigateToBorrow}>Borrow</button>
            <button onClick={navigateToReturn}>Return</button>
        </div>
    )
}
export default BorrowReturnPage