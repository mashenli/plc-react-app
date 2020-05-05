import React, { Component } from 'react';
import { Radio, message } from 'antd';
import './productDetail.css'
import $axios from '../../axios/$axios';
import store from '../../redux/store'
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkGoodsDetail: props.location.state.goodsDetail,
            // showChoose:'none'
            buyFunC: 'zfb',
            showMask: 'none',
        }
    }
    componentWillMount() {
        console.log(this.state.linkGoodsDetail)
    }
    componentDidMount() {

    }
    onBuy() {
        this.setState({
            showMask: ''
        })
        let userInfo = store.getState().userInfo
        console.log(userInfo)
        let that = this
        let value={}
        value.productId = this.state.linkGoodsDetail.productId
        value.phoneNum = userInfo.phoneNum
        value.address = userInfo.address
        value.state = '已付款'
        $axios({
            url: '/api/buyProduct',
            method: 'post',
            type: 'json',
            data: value
        }).then(data => {
            console.log(data)
            if(data.data.code == 0){
                setTimeout(function () {
                    that.setState({
                        showMask: 'none'
                    })
                    message.success('购买成功');
                }, 5000)
            }
            else{
                setTimeout(function () {
                    that.setState({
                        showMask: 'none'
                    })
                    message.error('购买失败');
                }, 5000)
            }
        })
       
    }
    onChange = e => {
        this.setState({
            buyFunC: e.target.value,
        });
    };
    render() {
        return (
            <div className="featured-block text-center productDetail" style={{ minHeight: '715px' }}>
                <div className="mask" style={{ display: this.state.showMask }}>
                </div>
                <img src={require('../../assets/img/wxzf.PNG')} className="mask_img" style={{ display: this.state.showMask }} ></img>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="product-image mt-3">
                                <img className="img-fluid" src={require('../../assets/img/IMG_1694.JPG')} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 mt-md-2 text-center text-md-left">
                            <h2 className="mb-3 mt-0">{this.state.linkGoodsDetail.modular}</h2>
                            <p className="lead mt-2 mb-3 primary-color">${this.state.linkGoodsDetail.price}</p>
                            <h5 className="mt-4">订货号</h5>
                            <p>{this.state.linkGoodsDetail.productId}</p>
                            <h5 className="mt-5">产品描述</h5>
                            <p>{this.state.linkGoodsDetail.describe}</p>
                            <a href="#" className="btn btn-full-width btn-lg btn-outline-primary mt-4 mb-4">查看详细数据</a>
                            <Radio.Group onChange={this.onChange} value={this.state.buyFunC}>
                                <Radio value={'zhb'}>
                                    <img src={require('../../assets/img/zhb.png')} style={{ display: 'inline' }}></img>
                                    <p style={{ display: 'inline' }}>支付宝支付</p>
                                </Radio>
                                <Radio value={'wx'}>
                                    <img src={require('../../assets/img/wx.png')} style={{ display: 'inline' }}></img>
                                    <p style={{ display: 'inline' }}>微信支付</p>
                                </Radio>
                            </Radio.Group>
                            <button className="btn btn-full-width btn-lg btn-outline-primary" onClick={this.onBuy.bind(this)}>购买</button></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductDetail;