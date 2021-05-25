import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import { Form, Input, Button,message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {connect} from 'react-redux'
import {createSaveUserInfoAction} from '../../redux/creators/login_action.js'

import {reqLogin} from '../../api/'
import "./index.less";

class Login extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        const {username,password} = {username:'admin',password:'123456'};
        let result = await reqLogin(username,password);
        if(result.status === 0){
            this.props.saveUserInfo(result);
            this.props.history.replace('/admin');
        }else{
            message.warn('出错了！');
        }
    }
    render () {
        let {isLogin} = this.props;
        if(isLogin){
            return <Redirect to="/admin" />
        }else{
        return (
            <div className="login_wrap">
                <div className="login_header">
                    <h2>管理系统</h2>
                </div>
                <div className="login_cont">
                    <div className="login_main">
                        <h2>登录</h2>
                        <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
                            <Form.Item name="username"
                                rules={[
                                    { required: true, message: "请输入用户名！" },
                                ]}>
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="用户名"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: "请输入密码！" }
                                ]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    onClick={this.handleSubmit}
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default connect(
    state => ({isLogin:state.userInfo.isLogin}),
    {
        saveUserInfo:createSaveUserInfoAction
    }
)(Login)