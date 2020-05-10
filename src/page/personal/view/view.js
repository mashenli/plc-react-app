import React, { Component } from 'react';
import { Table, Divider, Modal, message } from 'antd';
import './view.css'
import $axios from '../../../axios/$axios';
import store from '../../../redux/store'
class PersonalView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    title: '账单Id',
                    dataIndex: 'billId',
                    width: '20%'
                },
                {
                    title: '产品Id',
                    dataIndex: 'productId',
                    width: '20%'
                },
                {
                    title: '手机号',
                    dataIndex: 'phoneNum',
                    width: '20%'
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    width: '20%'
                },
                {
                    title: '状态',
                    dataIndex: 'state'
                },
                {
                    title: '操作',
                    dataIndex: 'Action',
                    width: 200,
                    align: 'center',
                    render: (text, row, index) => (
                        <span>
                            <button className="link-button" onClick={() => this.handleService(row, index)}>
                                申请售后
							</button>
                            <Divider type="vertical" />
                            {/* <button className="link-button" onClick={() => this.handleDelete(row)}>
                                删除
							</button> */}

                        </span>
                    )
                }
            ]
        }
    }
    handleService(row, index) {
        console.log(row)
        let json = {}
        json.billId = row.billId
        json.state = '售后中'
        $axios({
            url: '/api/admin/modifyBill',
            method: 'post',
            type: 'json',
            data: json
        }).then(data => {
            let oldData = this.state.data
            oldData[index].state = '售后中'
            this.setState({
                data: oldData,
            });
            message.success('申请成功，工作人员会尽快联系您！');
        });
    }
    componentWillMount() {
        this.fetch();
    }
    fetch() {
        let json = {}
        json.phoneNum = store.getState().userInfo.phoneNum
        $axios({
            url: '/api/admin/fetch/bill',
            method: 'post',
            type: 'json',
            data: json
        }).then(data => {
            this.setState({
                loading: false,
                data: data.data,
            });
        });
    }
    render() {
        return (
            <div className="view">
                <Table
                    bordered
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                    pagination={this.state.pagination}
                    rowKey={record => record.billId}
                />
            </div>
        );
    }
}
export default PersonalView;