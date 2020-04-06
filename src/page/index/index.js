import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
// const { Header } = Layout
import Header from '../../components/header/header'
// import Content from '../../components/carous/carous'
import './index.css'
// import { Layout } from 'antd';
class Index extends Component {
    render() {
        return (
            <div className="body">
                <Header></Header>
                <div className="carous">
                    
                </div>
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
                </div>
            </div>
        );
    }
}
export default Index;
