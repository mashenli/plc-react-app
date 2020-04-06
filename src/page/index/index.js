import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
// const { Header } = Layout
import Header from '../../components/header/header'
import Home from '../home/home'
import Collect from '../collect/collect'
import './index.css'
import { Layout } from 'antd';
import {
    // BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
const { Content } = Layout;
class Index extends Component {
    render() {
        return (
            <div className="body">
                <Header></Header>
                <img src={require('../../assets/img/banner.jpg')} className="carous"></img>
                <Layout>
                    <Content>
                        <Switch>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/collect' exact component={Collect}></Route>
                        </Switch>
                    </Content>
                </Layout>
                {/* <Home></Home> */}
            </div>
        );
    }
}
export default Index;
