import React, { Component } from 'react';
import { Descriptions, Badge } from 'antd';
import 'antd/dist/antd.css'
import './home.css'
import store from '../../../redux/store'
class PersonalHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSort: [],
            userInfo: {}
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
    render() {
        return (
            <div className="content">
                <Descriptions title="个人信息" layout="vertical" className="user_info" bordered>
                    <Descriptions.Item label="用户名">{this.state.userInfo.userName}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{this.state.userInfo.phoneNum}</Descriptions.Item>
                    <Descriptions.Item label="收货地址">{this.state.userInfo.address}</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}
export default PersonalHome;