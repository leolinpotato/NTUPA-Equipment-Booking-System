import React from 'react';
import { useState } from 'react';
import axios from '../api';
import { Input, Select, Col, Row, Button, Space, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/filter.css'

const Filter = ({type}) => {
    const [ Name, setName ] = useState('');
    const [ Equipment, setEquip ] = useState('');
    const [ EquipNum, setNum ] = useState(0);
    const [ Activity, setAct ] = useState('');
    const [ Attr, setAttr] = useState('');
    const [ Data, setData ] = useState([]);

    const handleChange = (func) => (e) => {
        func(e.target.value);
    }

    const handleSelect = (func) => (e) => {
        func(e);
    }

    const send = async () => {
        if(!(Name && EquipNum && Equipment && Activity)) console.log('not good');
        else{
            const { data: { message } } = await axios.post('/reqHandle', {
                Name,
                Equipment,
                EquipNum,
                Activity
            });
        }
    }

    const search = async () => {
        const { data } = await axios.get('/reqHandle', { params: {
            Name:(Name) ? Name : null,
            Equipment:(Equipment) ? Equipment : null,
            EquipNum:(EquipNum) ? EquipNum : null,
            Activity:(Activity) ? Activity : null,
            attr: (Attr && Attr !== 'All') ? Attr : null
        }});
        setData(data);
    }

    const attrColor = (attr) => {
        const attrList = ['Wire', 'Stand', 'Instrument', 'Speaker', 'Mixer'];
        const colorList = ['blue', 'green', 'yellow', 'red', 'orange'];
        for (let i = 0; i < attrList.length; i++)
            if (attr === attrList[i])
                return colorList[i];
    }

    return (
        <div className='filterContainer'>
            <div className='filterRow'>
            { type === 'record' ? 
                <>
                    <Input size='large' placeholder="Activity" onChange={handleChange(setAct)} style={{ width: "40%" }}></Input>
                    <Input size='large' placeholder="Borrower" onChange={handleChange(setName)} style={{ width: "40%" }}></Input>
                    <Button size='large'type="primary" icon={<SearchOutlined />} onClick={search} style={{ background: "rgb(189, 159, 127)" }}> Search </Button> 
                </>
                :
                <>
                    <Select
                      defaultValue="All"
                      size="large"
                      style={{
                        width: 140,
                      }}
                      onChange={handleSelect(setAttr)}
                      options={[
                        {
                            value: 'All',
                            label: 'All',
                        },
                        {
                          value: 'Wire',
                          label: 'Wire',
                        },
                        {
                          value: 'Stand',
                          label: 'Stand',
                        },
                        {
                          value: 'Instrument',
                          label: 'Instrument',
                        },
                        {
                          value: 'Speaker',
                          label: 'Speaker',
                        },
                        {
                            value: 'Mixer',
                            label: 'Mixer',
                        },
                      ]}
                    />
                    <Select
                        showSearch
                        size="large"
                        style={{
                          width: 200,
                        }}
                        placeholder="Equipment"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                          {
                            value: '1',
                            label: 'Not Identified',
                          },
                          {
                            value: '2',
                            label: 'Closed',
                          },
                          {
                            value: '3',
                            label: 'Communicated',
                          },
                          {
                            value: '4',
                            label: 'Identified',
                          },
                          {
                            value: '5',
                            label: 'Resolved',
                          },
                          {
                            value: '6',
                            label: 'Cancelled',
                          },
                        ]}
                    />
                    { type === 'search' ? 
                    <>
                        <Input size='large' placeholder="Borrower" onChange={handleChange(setName)} className='filterName' style={{ width: "20%" }}></Input>
                        <Input size='large' placeholder="Activity" onChange={handleChange(setAct)} className='filterActivity' style={{ width: "20%" }}></Input>
                    </>
                    :
                    <>
                    </>
                    }
                    <Button size='large'type="primary" icon={<SearchOutlined />} onClick={search} style={{ background: "rgb(189, 159, 127)" }}> Search </Button> 
                </>
            }
            </div>
            <div className='filterDisplay'>
            { Data.map((item) => (
                <>
                  <div className='resBlock'>
                    <div className='resImgContainer'>
                    </div>
                    <div className='resInfo'>
                      <div className='title'>
                        <p className='equipment' style={{ color: "white" }}>{item.Equipment}</p>
                        <Tag color={attrColor(item.attr)}>{item.attr}</Tag>
                      </div>
                    </div>
                  </div>
                </>
            ))}
            </div>
        </div>
    )
}
export default Filter;