import React from 'react';
import { useState } from 'react';
import axios from '../api';
import { Input, Select, Col, Row } from 'antd';
import '../css/filter.css'

const Filter = (type) => {
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
                <Row className='filterRow'>
                    <Col span={4}>
                    <Select
                      defaultValue="Mixer"
                      size="large"
                      style={{
                        width: 140,
                      }}
                      onChange={handleChange(setAttr)}
                      options={[
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
                        }
                      ]}
                    />
                    </Col>
                    <Col span={5}>
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
                  </Col>
                  <Col span={4}>
                <Input placeholder="Name" onChange={handleChange(setName)}></Input>
                </Col>
                <Col span={4}>
                <Input placeholder="Activity" onChange={handleChange(setAct)}></Input>
                </Col>
            <div className='button'>
                <button onClick={send} id='send'>   send   </button> 
                <button onClick={search} id='search'> search </button> 
            </div>
            </Row>
            <h2>Equipments list</h2> { Data.map((element, id) => (
                <p>{element.Name} {element.Equipment} {element.EquipNum} {element.Activity} {element.date}</p>
            ))}
            
        </div>
    )
}
export default Filter;