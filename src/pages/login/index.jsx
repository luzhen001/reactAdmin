import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";
export default class index extends Component {
    render () {
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
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: '不合法的手机号格式!',
                                    }
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
                                    className="login-form-button">
                                    {" "}
                                     Log in{" "}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}