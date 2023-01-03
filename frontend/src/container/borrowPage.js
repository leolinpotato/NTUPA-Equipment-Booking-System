import React from 'react';
import { useState } from 'react';
import '../css/borrowPage.css';
import DisplayEquipment from './displayEquipment';
import { Button, Checkbox, Form, Input, Col, DatePicker } from 'antd';

const BorrowPage = () => {
    const { RangePicker } = DatePicker;
    const [form] = Form.useForm();
    const [display, setDisplay] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
        setDisplay(true);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onReset = () => {
        form.resetFields();
    };


    return (
      <>
        {display ?
            <DisplayEquipment type='borrow'/>
            :
            <Form
                  form={form}
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 10,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                <h1> 活動資訊 </h1>
                  <Form.Item label="活動名稱" name="Activity">
                    <Input />
                  </Form.Item>

                  <Form.Item label="活動時間" name="ActivityDate">
                    <RangePicker />
                  </Form.Item>

                  <Form.Item label="活動地點" name="Location">
                    <Input />
                  </Form.Item>

                  <Form.Item label="活動負責人" name="Incharger">
                    <Input />
                  </Form.Item>

                  <Form.Item label="器材租借人" name="Name" rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item label="租借日期" name="date" rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                  </Form.Item>
            </Form>
        }
      </>
    )
}
export default BorrowPage