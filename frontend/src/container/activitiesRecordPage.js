import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import axios from '../api';
import { Input, Select, Col, Row, Button, Space, Tag, InputNumber, Popconfirm, message, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/equipmentPage.css'

const ActivitiesRecordPage = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [ Data, setData ] = useState([]);

    const attrColor = (attr) => {
        const attrList = ['Wire', 'Stand', 'Instrument', 'Speaker', 'Mixer', 'Microphone', 'Other'];
        const colorList = ['blue', 'green', 'yellow', 'red', 'orange', 'purple', 'pink'];
        for (let i = 0; i < attrList.length; i++)
            if (attr === attrList[i])
                return colorList[i];
    }

    const stateColor = (state) => {
        const stateList = ['borrow', 'return']
        const colorList = ['green', 'red'];
        for (let i = 0; i < stateList.length; i++)
            if (state === stateList[i])
                return colorList[i];
    }

    const search = async () => {
        const { data } = await axios.get('/reqHandle', { params: {
            Equipment:(id) ? id : null,
        }});
        const newData = [];
        const map = new Map();
        for (let item of data) {
            if (!map.has(item.BorrowDate)) {
                map.set(item.BorrowDate, true);
                newData.push(item);
            }
        }
        setData(newData);
    }

    useEffect(() => {
        search();
    }, []);

    const navigate = useNavigate(); 
    const ToActivity = (activity) => {
        navigate('/activity/' + activity);
    }

    const columns = [
    {
        title: 'State',
        dataIndex: 'State',
        key: 'State',
        render: (text) => <Tag color={stateColor(text)}>{text.toUpperCase()}</Tag>,

    },
    {
        title: 'Activity',
        dataIndex: 'Activity',
        key: 'Activity',
        render: (text) => <a onClick={() => ToActivity(text)}>{text}</a>,
    },
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
    },
    {
        title: 'Incharger',
        dataIndex: 'Incharger',
        key: 'Incharger',
    },
    {
        title: 'Borrow Date',
        dataIndex: 'BorrowDate',
        key: 'BorrowDate',
    },
    {
        title: 'Start Date',
        dataIndex: 'StartDate',
        key: 'StartDate',
    },
    {
        title: 'End Date',
        dataIndex: 'EndDate',
        key: 'EndDate',
    }];
    return (
        <Table columns={columns} dataSource={Data} pagination={{pageSize: 50}} scroll={{y: 450}}/>
    )
}
export default ActivitiesRecordPage