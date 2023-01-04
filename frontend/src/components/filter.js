import React from 'react';
import { useState } from 'react';
import axios from '../api';
import { Input, Select, Col, Row, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/filter.css'

const Filter = ({type}) => {
    const [ Name, setName ] = useState('');
    const [ Equipment, setEquip ] = useState('');
    const [ EquipNum, setNum ] = useState(0);
    const [ Activity, setAct ] = useState('');
    const [ Attr, setAttr] = useState('');
    const [ Data, setData ] = useState([]);

    const handleChange = (st) => (e) => {
        st(e.target.value);
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
            Activity:(Activity) ? Activity : null
        }});
        setData(data);
    }

    return (
        <div className='filterContainer'>
            <div className='filterRow'>
            { type === 'record' ? 
                <>
                    <Input size='large' placeholder="Activity" onChange={handleChange(setAct)} style={{ width: "65%" }}></Input>
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
                      onChange={handleChange(setAttr)}
                      options={[
                        {
                            value: 'all',
                            label: 'All',
                        },
                        {
                          value: 'wire',
                          label: 'Wire',
                        },
                        {
                          value: 'stand',
                          label: 'Stand',
                        },
                        {
                          value: 'instrument',
                          label: 'Instrument',
                        },
                        {
                          value: 'speaker',
                          label: 'Speaker',
                        },
                        {
                            value: 'mixer',
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
                    </>
                    :
                    <>
                        <Input size='large' placeholder="Name" onChange={handleChange(setName)} className='filterName'></Input>
                        <Input size='large' placeholder="Activity" onChange={handleChange(setAct)} className='filterActivity'></Input>
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
                        <p className='equipment'>{item.Equipment}</p>
                        <p className='attr'>{item.attr}</p>
                        <p className='equipNum'>{item.EquipNum}</p>
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