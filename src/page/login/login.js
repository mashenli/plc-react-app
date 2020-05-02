import React, { Component } from 'react';
import './login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { setUserInfo } from '../../redux/actions/userInfo';
import $axios from '../../axios/$axios';
import { connect } from 'react-redux';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

class Login extends Component {
    constructor(props) {
        super(props);
        // this.onResize = this.onResize.bind(this);
    }
    onFinish = values => {
        $axios({
            url: '/api/login',
            method: 'post',
            type: 'json',
            data: values
        }).then(data => {
            let newData = data.data
            let json = newData.data
            console.log(newData, json)
            if (newData.code == 0) {
                //用户不存在
                alert("用户不存在")
            } else {
                if (newData.code == 1) {
                    //密码正确
                    localStorage.setItem('isLogin', '1');
                    this.props.setUserInfo(Object.assign({}, json));
                    localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, json)));
                    this.props.history.push('/')
                    console.log(this.props);
                } else {
                    //密码错误
                    alert("密码错误")
                }
            }

        })

    };
    render() {
        return (
            <div className="login">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="手机号"
                        name="userName"
                        rules={[{ required: true, message: '请输入您的手机号!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="passWord"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    setUserInfo: data => {
        dispatch(setUserInfo(data));
    }
});
// export default Login;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);