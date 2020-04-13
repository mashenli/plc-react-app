import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
// const { Header } = Layout
// import Header from '../../components/header/header'
// import Carous from '../../components/carous/carous'
import './home.css'
import { Link } from 'react-router-dom';
// import { Layout } from 'antd';
class Home extends Component {
    render() {
        return (
            <div className="content">
                <img src={require('../../assets/img/banner.jpg')} className="carous"></img>
                <div className="content-head">| 汇晨PLC |</div>
                <div className="content-products">
                    <Link to='/sort' key="123" style={{ textDecoration: 'none' }}>
                        <div className="content-products-item">
                            <img className="products-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586795994465&di=7c98c718b564f79c50e5caab6aed5275&imgtype=0&src=http%3A%2F%2Fimage.kegongwang.com%2Fupload%2Fstore%2Fimage%2F20180730%2F201807301558068397.png"></img>
                            <div className="products-name">H7-200 SMART</div>
                            <div className="products-detail">
                                <li>参数配置上位机下发，实际需要量程与模块配置灵活匹配</li>
                                <li>数字量输入多档可配置滤波器，宽范围适应不同速度信号输入</li>
                                <li>模拟量输入可配置滤波器，不占用CPU资源</li>
                                <li>高速差分背板总线，强悍的抗干扰性能</li>
                                <li>模块自带故障上报LED指示，现场问题一目了然</li>
                                <li>更小体积，更高密度</li>
                            </div>
                        </div>
                    </Link>
                    <Link to='/sort' key="1" style={{ textDecoration: 'none' }}>
                        <div className="content-products-item">
                            <img className="products-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586795994465&di=7c98c718b564f79c50e5caab6aed5275&imgtype=0&src=http%3A%2F%2Fimage.kegongwang.com%2Fupload%2Fstore%2Fimage%2F20180730%2F201807301558068397.png"></img>
                            <div className="products-name">H7-200</div>
                            <div className="products-detail">
                                <li>参数配置上位机下发，实际需要量程与模块配置灵活匹配</li>
                                <li>数字量输入多档可配置滤波器，宽范围适应不同速度信号输入</li>
                                <li>模拟量输入可配置滤波器，不占用CPU资源</li>
                                <li>高速差分背板总线，强悍的抗干扰性能</li>
                                <li>模块自带故障上报LED指示，现场问题一目了然</li>
                                <li>更小体积，更高密度</li>
                            </div>
                        </div>
                    </Link>
                    <Link to='/sort' key="12" style={{ textDecoration: 'none' }}>
                        <div className="content-products-item">
                            <img className="products-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586795994465&di=7c98c718b564f79c50e5caab6aed5275&imgtype=0&src=http%3A%2F%2Fimage.kegongwang.com%2Fupload%2Fstore%2Fimage%2F20180730%2F201807301558068397.png"></img>
                            <div className="products-name">H7-300 SMART</div>
                            <div className="products-detail">
                                <li>参数配置上位机下发，实际需要量程与模块配置灵活匹配</li>
                                <li>数字量输入多档可配置滤波器，宽范围适应不同速度信号输入</li>
                                <li>模拟量输入可配置滤波器，不占用CPU资源</li>
                                <li>高速差分背板总线，强悍的抗干扰性能</li>
                                <li>模块自带故障上报LED指示，现场问题一目了然</li>
                                <li>更小体积，更高密度</li>
                            </div>
                        </div>
                    </Link>
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
