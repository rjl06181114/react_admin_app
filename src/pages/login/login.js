import React, { Component } from 'react'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqlogin} from '../../api/index';
import './login.less'
import logo from '../../assets/images/logo.png'
import storage from '../../utils/storageUtils';
export default class login extends Component {
    onFinish=async (values)=>{  
        let response =await reqlogin(values);      
        let result = response.data;
        if(result.status===0){
            storage.saveUser({user:result.data.username,_id:result.data._id});
            this.props.history.replace({pathname:'/home',state:{titleName:'首页'}});
            message.success('登录成功');     
        }else{
            message.error(result.msg);
        }
    }
    render() {
        return (
            <div className='login'>
                 <header className='login-header'>
                     <img src={logo}></img>
                     <span>商品管理后台</span>
                 </header>
                 <section className='login-section'>
                      <h2>管理员登陆</h2> 
                     <Form
                       name="normal_login"
                       className="login-form"
                       initialValues={{ remember: true }}
                       onFinish={this.onFinish}
                     >
                    <Form.Item
                      name="username"
                      rules={[{ required:true ,   message: '请输入用户名' },
                              { max:12,min:4, message:'用户名必须大于4位小于12位'},                             
                              { pattern:/^[a-zA-Z0-9_]+$/, message:'用户名必须为数字字母或下划线的组合'}
                    ]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: '请输入密码' }, 
                      { max:12,min:4, message:'密码必须大于4位小于12位'},                             
                      ]}
                    >
                      <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                      </Button>      
                    </Form.Item>
                    </Form>
                 </section>
            </div>
        )
    }
}
