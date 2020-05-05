import React, { Component } from 'react';
import { Descriptions, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import './home.css'
import store from '../../../redux/store'
import $axios from '../../../axios/$axios';
// const { Option } = Select;
// const [form] = Form.useForm();
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class PersonalHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSort: [],
            userInfo: {},
            showCard: 'none'
        }

    }
    componentWillMount() {
        let state = store.getState()
        console.log(state)
        this.setState({
            userInfo: state.userInfo
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.userInfo)
        if (nextProps.userInfo != this.props.userInfo) {
            this.fetchShop()
        }
    }
    onModify() {
        // console.log("修改")
        this.setState({
            showCard: ''
        })
    }
    onFinish(e) {
        // console.log(e)
        let json = {}
        json.address = e.address
        json.phoneNum = this.state.userInfo.phoneNum
        $axios({
            url: '/api/modify/userInfo',
            method: 'post',
            type: 'json',
            data:json
        }).then(data => {
            if(data.data.code == 0){
                alert("修改成功")
            }
            // let newData = Array.from(data.data)
            // this.props.addTag(newData);
            let newData = this.state.userInfo
            newData.address = e.address
            this.setState({
                userInfo: newData,
                showCard:'none'
            })
            // console.log(data)
        })
    }
    render() {
        return (
            <div className="content">
                <Descriptions title="个人信息" layout="vertical" className="user_info" bordered>
                    <Descriptions.Item label="用户名">{this.state.userInfo.userName}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{this.state.userInfo.phoneNum}</Descriptions.Item>
                    <Descriptions.Item label="收货地址">{this.state.userInfo.address}</Descriptions.Item>
                </Descriptions>
                <div className="card">
                    <div className="card_text" onClick={this.onModify.bind(this)}>
                        修改个人信息
                    </div>
                    <div className="card_modify" style={{ display: this.state.showCard }}>
                        <div className="card_content">
                            {/* <div className="card_content__item">
                                <div className="item_text">
                                    收货地址
                                </div>
                                <Input className="input"></Input>
                            </div>
                            <div className="card_content__item">
                                <Button onClick={this.onPushMessage(value).bind(this)}>提交</Button>
                            </div> */}
                            <Form {...layout} name="control-hooks" onFinish={this.onFinish.bind(this)} className="form">
                                <Form.Item name="address" label="收货地址" rules={[{ required: true }]}  className="card_content__item">
                                    <Input />
                                </Form.Item>
                                <Form.Item {...tailLayout}  className="card_content__item">
                                    <Button type="primary" htmlType="submit">
                                        提交修改
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PersonalHome;