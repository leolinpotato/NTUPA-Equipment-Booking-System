import React from 'react';
import { useState } from 'react';
import axios from '../api';
import { Input, Select } from 'antd';
import Filter from '../components/filter.js'
import '../css/displayEquipment.css'

const DisplayEquipment = ({type, activity, start, end, borrow}) => {
    return (
        <div className='displayEquipmentContainer'>
            <Filter type={type} activity={activity} start={start} end={end} borrow={borrow}/>
        </div>
    )
}
export default DisplayEquipment
