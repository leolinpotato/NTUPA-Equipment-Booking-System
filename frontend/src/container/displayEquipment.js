import React from 'react';
import { useState } from 'react';
import axios from '../api';
import { Input, Select } from 'antd';
import Filter from '../components/filter.js'
import '../css/displayEquipment.css'

const DisplayEquipment = ({type, props}) => {
    return (
        <div className='displayEquipmentContainer'>
            <Filter type={type} props={props}/>
        </div>
    )
}
export default DisplayEquipment
