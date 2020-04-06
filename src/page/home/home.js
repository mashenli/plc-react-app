import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
// const { Header } = Layout
// import Header from '../../components/header/header'
// import Carous from '../../components/carous/carous'
import './home.css'
// import { Layout } from 'antd';
class Home extends Component {
    render() {
        return (
                <div className="content">
                    <div className="content-head">| 汇晨PLC |</div>
                    <div className="content-products">
                        <div className="content-products-item">
                            <img className="products-img"></img>
                            <div className="products-detail">
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </div>
                        </div>
                        <div className="content-products-item">
                            <img className="products-img"></img>
                            <div className="products-detail">
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </div>
                        </div>
                        <div className="content-products-item">
                            <img className="products-img"></img>
                            <div className="products-detail">
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </div>
                        </div>
                    </div>
                    <div className="content-head about">| 关于汇晨 |</div>
                    <div className="content-about">
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </div>
                </div>
        );
    }
}
export default Home;
