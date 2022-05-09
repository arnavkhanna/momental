import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'antd';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Momental 
        </p>
        <Space direction="vertical">
          <Input placeholder="input email" prefix={<UserOutlined />} />
        </Space>
        <Space direction="vertical">
          <Input.Password
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
         />
        </Space>
        <Space direction="vertical">
        <Button type="primary">Log-in</Button>
        </Space>
        
      </header>
    </div>
  );
}

export default App;
