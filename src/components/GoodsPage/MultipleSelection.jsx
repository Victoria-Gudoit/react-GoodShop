import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

export const Selection = ({goodCategories, handleChange}) => {
   
return (
  <>
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '30%',
        marginTop: '15px'
      }}
      placeholder="Please select"
      defaultValue={['Все категории']}
      onChange={(value) => handleChange(value)}
    >
 
{goodCategories.map((item) => (<Option value={item.id} key={item.id}>[{item.label}]</Option>) )}

    </Select>
  </>
)};