import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import axios from '../api';
import { Input, Select, Col, Row, Button, Space, Tag, InputNumber, Popconfirm, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/filter.css'

const Equipment = () => {
	const { id } = useParams();
	const { state } = useLocation();
	const [ Data, setData ] = useState([]);
	console.log(state)

	const attrColor = (attr) => {
	    const attrList = ['Wire', 'Stand', 'Instrument', 'Speaker', 'Mixer'];
	    const colorList = ['blue', 'green', 'yellow', 'red', 'orange'];
	    for (let i = 0; i < attrList.length; i++)
	        if (attr === attrList[i])
	            return colorList[i];
	}

	const search = async () => {
	    const { data } = await axios.get('/reqHandle', { params: {
	        Equipment:(id) ? id : null,
	    }});
	    setData(data);
	}

	useEffect(() => {
		search();
	}, []);

	return (
		<>
			<div className='filterRow'>
			    <div className='title'>{id}</div>
			</div>
			<div className='imgContainer'>
			    <img src={state.path}/>
			    <Tag color={attrColor(state.attr)}>{state.attr}</Tag>
			</div>
			<div className='infoContainer'>
			{ Data.map((item) => {
				return (
					<div className='row'>
					    {item.Name}
					    {item.Activity}
					    {item.EquipNum}
					</div>
			    )
			})}
			</div>
		</>
	)
}
export default Equipment;