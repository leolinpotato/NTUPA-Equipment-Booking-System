import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from '../api';
import { Input, Select, Col, Row, Button, Space, Tag, InputNumber, Popconfirm, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/filter.css'

const EquipBlock = ({type, props, item, equipment, attr, path}) => {
    const [ Count, setCount ] = useState(0);

    const attrColor = (attr) => {
        const attrList = ['Wire', 'Stand', 'Instrument', 'Speaker', 'Mixer', 'Microphone', 'Other'];
        const colorList = ['blue', 'green', 'yellow', 'red', 'orange', 'purple', 'pink'];
        for (let i = 0; i < attrList.length; i++)
            if (attr === attrList[i])
                return colorList[i];
    }

    const send = async () => {
        if(Count === 0) console.log('num = 0');
        else{
            const { data: { message } } = await axios.post('/reqHandle', {
                Name: props.Name,
                Equipment: equipment,
                EquipNum: Count,
                Activity: props.Activity,
                attr: attr,
                BorrowDate: props.date,
                StartDate: (props.ActivityDate) ? props.ActivityDate[0] : null,
                EndDate: (props.ActivityDate) ? props.ActivityDate[1] : null,
                Incharger: props.Incharger
            });
            console.log('success');
        }
    }

    const onReset = () => {
        setCount(0);
    }

    const confirm = (e) => {
      console.log(e);
      message.success('Click on Yes');
    };
    const cancel = (e) => {
      console.log(e);
      message.error('Click on No');
    };

    const navigate = useNavigate(); 
    const ToEquip = (equipment) => {
        navigate('/equipment/' + equipment, {
            state: {
                path: path,
                attr: item.attr,
            }
        });
    }

    return (
        <>
          <div className='resBlock'>
            <div className='resImgContainer'>
              <img className='resImg' src={path} onClick={() => ToEquip(equipment)}/>
            </div>
            <div className='resInfo'>
              <div className='title'>
                <p className='equipment' style={{ color: "white" }}>{equipment}</p>
                <Tag color={attrColor(attr)}>{attr}</Tag>
              </div>
            </div>
            { type === 'borrow' ?
            <>
                <Space>
                  <InputNumber min={0} max={20} defaultValue={0} onChange={setCount} value={Count}/>
                  <Popconfirm
                      title="Borrow Equipment"
                      description="Are you sure to borrow this equipment?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                      disabled={Count === 0 ? true : false}
                  >
                      <Button type='primary' onClick={send} style={{ background: "rgb(189, 159, 127)" }} disabled={Count === 0 ? true : false}>
                          Borrow
                      </Button>
                  </Popconfirm>
                  <Button type='primary' onClick={onReset} style={{ background: "rgb(189, 159, 127)" }}>
                      Reset
                  </Button>
                </Space>
            </>
            : type === 'return' ?
            <>
                <Space>
                  <InputNumber min={0} max={20} defaultValue={0} onChange={setCount} value={Count}/>
                  <Popconfirm
                      title="Return Equipment"
                      description="Are you sure to return this equipment?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                      disabled={Count === 0 ? true : false}
                  >
                      <Button type='primary' onClick={send} style={{ background: "rgb(189, 159, 127)" }} disabled={Count === 0 ? true : false}>
                          Return
                      </Button>
                  </Popconfirm>
                  <Button type='primary' onClick={onReset} style={{ background: "rgb(189, 159, 127)" }}>
                      Reset
                  </Button>
                </Space>
            </>
            :
            <>
            </>
            }
          </div>
        </>
    )
}
export default EquipBlock;