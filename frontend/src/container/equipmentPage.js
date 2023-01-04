import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import axios from '../api';
import { Input, Select, Col, Row, Button, Space, Tag, InputNumber, Popconfirm, message, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/equipmentPage.css'

const Equipment = () => {
	const { id } = useParams();
	const { state } = useLocation();
	const [ Data, setData ] = useState([]);
	console.log(state)

	const attrColor = (attr) => {
	    const attrList = ['Wire', 'Stand', 'Instrument', 'Speaker', 'Mixer', 'Microphone', 'Other'];
      	const colorList = ['blue', 'green', 'yellow', 'red', 'orange', 'purple', 'pink'];
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

	const columns = [
	{
		title: 'Borrower',
		dataIndex: 'Name',
		key: 'Name',
	},
	{
		title: 'Activity',
		dataIndex: 'Activity',
		key: 'Activity',
	},
	{
		title: 'Num',
		dataIndex: 'EquipNum',
		key: 'EquipNum',
	},
	{
		title: 'Borrow Date',
		dataIndex: 'BorrowDate',
		key: 'BorrowDate',
	}];

	return (
		<>
			<div className='equipmentPageRow'>
			    <div className='title'>{id}</div>
			    <Tag color={attrColor(state.attr)} className='equipmentPageTag'>{state.attr}</Tag>
			</div>
			<div className='imgContainer'>
			    <img src={state.path} className='equipmentPagePicture'/>
			</div>
			<div className='infoContainer'>
			    <Table columns={columns} dataSource={Data} scroll={{y: 180}}/>
			</div>
		</>
	)
}
export default Equipment;