import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/borrowReturnPage.css'
import { Button } from 'antd';
import { ExportOutlined, RedoOutlined } from '@ant-design/icons';

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
            <button onClick={navigateToBorrow} id='borrowButton'>
                <ExportOutlined />
                Borrow
            </button>
            <button onClick={navigateToReturn} id='returnButton'>
                <RedoOutlined />
                Return
            </button>
        </div>
    )
}
export default BorrowReturnPage