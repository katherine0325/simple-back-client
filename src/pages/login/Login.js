import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="login-box">
            <img src="favicon.ico" />
            <div style={{height: 20}}></div>
            <Input placeholder="请输入账号" />
            <div style={{height: 20}}></div>
            <Input.Password placeholder="请输入密码" />
            <div style={{height: 20}}></div>
            <Button type="primary" block="true">登陆</Button>
        </div>
      </div>
    )
  }
}

export default Login;
