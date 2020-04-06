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
                <Carousel autoplay>
                    <div className="item">
                        <img src={require('../../assets/img/banner.jpg')}></img>
                    </div>
                    <div className="item">
                        <img src={require('../../assets/img/banner.jpg')}></img>
                    </div>
                    <div className="item">
                        <img src={require('../../assets/img/banner.jpg')}></img>
                    </div>
                </Carousel>
        );
    }
}
export default Carous;