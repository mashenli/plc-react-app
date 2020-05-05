import React, { Component } from 'react';
import './password.css'
import { Form, Input, Button, Checkbox } from 'antd';
import $axios from '../../../axios/$axios';
import store from '../../../redux/store'
import { setUserInfo } from '../../../redux/actions/userInfo';
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

class PersonalPassword extends Component {
    onFinish(e) {
        console.log(this.state.userInfo)
        if (e.phoneNum != this.state.userInfo.phoneNum) {
            alert("手机号错误")
        }
        else if (e.password != this.state.userInfo.password) {
            alert("密码错误")
        }
        else {
            $axios({
                url: '/api/modify/password',
                method: 'post',
                type: 'json',
                data: e
            }).then(data => {
                // console.log(data)
                if(data.data.code==0){
                    alert("修改完成，请重新登录")
                    localStorage.setItem('isLogin', '0');
                    this.props.setUserInfo(Object.assign({}, {}));
                    localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, {})));
                    this.props.history.push('/')
                }

            })
        }

    }
    componentWillMount() {
        let state = store.getState()
        // console.log(state)
        this.setState({
            userInfo: state.userInfo
        })
    }
    render() {
        return (
            <div className="password">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={onFinishFailed}
                    className="form"
                >
                    <Form.Item
                        label="手机号"
                        name="phoneNum"
                        rules={[{ required: true, message: '请输入您的手机号!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="新密码"
                        name="newPassword"
                        rules={[{ required: true, message: '请输入新密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            确定
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalPassword);