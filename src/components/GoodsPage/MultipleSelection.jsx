import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;


export const Selection = (props) => {
   
return (
  <>
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '30%',
      }}
      placeholder="Please select"
    //   defaultValue={['Все']}
      onChange={(value) => props.handleChange}
    >
 
{props.goodCategories.map((item) => (<Option value={item.id} key={item.id}>[{item.label}]</Option>) )}

    </Select>
  </>
)};