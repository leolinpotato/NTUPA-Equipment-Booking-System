import React from 'react';
import { useState } from 'react';
import axios from '../api';
import { Input, Select, Col, Row, Button, Space, Tag, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../css/filter.css'

const EquipBlock = ({type, props, item, path}) => {
    const [ Count, setCount ] = useState([]);

    const attrColor = (attr) => {
        const attrList = ['Wire', 'Stand', 'Instrument', 'Speaker', 'Mixer'];
        const colorList = ['blue', 'green', 'yellow', 'red', 'orange'];
        for (let i = 0; i < attrList.length; i++)
            if (attr === attrList[i])
                return colorList[i];
    }

    const send = async () => {
        if(Count === 0) console.log('num = 0');
        else{
            const { data: { message } } = await axios.post('/reqHandle', {
                Name: item.Name,
                Equipment: item.Equipment,
                EquipNum: Count,
                Activity: item.Activity,
                attr: item.Attr,
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

    return (
        <>
          <div className='resBlock'>
            <div className='resImgContainer'>
              <img className='resImg' src={path}/>
            </div>
            <div className='resInfo'>
              <div className='title'>
                <p className='equipment' style={{ color: "white" }}>{item.Equipment}</p>
                <Tag color={attrColor(item.attr)}>{item.attr}</Tag>
              </div>
            </div>
            { type === 'borrow' ?
            <>
                <Space>
                  <InputNumber min={0} max={20} defaultValue={0} onChange={setCount} />
                  <Button type='primary' onClick={setCount} style={{ background: "rgb(189, 159, 127)" }}>
                      Borrow
                  </Button>
                  <Button type='primary' onClick={onReset} style={{ background: "rgb(189, 159, 127)" }}>
                      Reset
                  </Button>
                </Space>
            </>
            : type === 'return' ?
            <>
                <Space>
                  <InputNumber min={0} max={20} defaultValue={0} onChange={setCount} />
                  <Button type='primary' onClick={setCount} style={{ background: "rgb(189, 159, 127)" }}>
                      Return
                  </Button>
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