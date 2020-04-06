import React, { Component } from 'react';
// import {
//     Link
// } from 'react-router-dom'
import { Carousel } from 'antd';
import './carous.css'
class Carous extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render() {
        return (
            <div className="carous">
                <Carousel autoplay>
                    <div>
                        <h3><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586197448978&di=03140353c5b4b2a2223d86473948c0fd&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fm2%2FM07%2F52%2FA7%2FwKhQcVQmaD2EBaMRAAAAAN97nSo662.jpg' alt="logo" />></h3>
                    </div>
                    <div>
                        <h3><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586197448978&di=03140353c5b4b2a2223d86473948c0fd&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fm2%2FM07%2F52%2FA7%2FwKhQcVQmaD2EBaMRAAAAAN97nSo662.jpg' alt="logo" />></h3>
                    </div>
                    <div>
                        <h3><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586197448978&di=03140353c5b4b2a2223d86473948c0fd&imgtype=0&src=http%3A%2F%2Fimg010.hc360.cn%2Fm2%2FM07%2F52%2FA7%2FwKhQcVQmaD2EBaMRAAAAAN97nSo662.jpg' alt="logo" />></h3>
                    </div>
                   
                </Carousel>
            </div>
        );
    }
}
export default Carous;