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
            console.log(data)
            localStorage.setItem('isLogin', '1');
            this.props.setUserInfo(Object.assign({}, values));
            localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, values)));
            console.log(this.props);
        })
        
    };
    render() {
        return (
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