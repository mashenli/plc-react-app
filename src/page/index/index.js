import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
// const { Header } = Layout
import Header from '../../components/header/header'
import Home from '../home/home'
import Collect from '../collect/collect'
import Product from '../product/product'
import Personal from '../personal/personal'
import Login from '../login/login'
import { setUserInfo } from '../../redux/actions/userInfo';
import { connect } from 'react-redux';
import './index.css'
import { Layout } from 'antd';
import  store from '../../redux/store'
import {
    // BrowserRouter as Router,
    Route,
    Switch,
    // Link
} from 'react-router-dom'
const { Content, } = Layout;
class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(){
    }
    render() {
        return (
            <div className="body">
                <Header></Header>
                <Layout>
                    <Content>
                        <Switch>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/collect' exact component={Collect}></Route>
                            <Route path='/product' exact component={Product}></Route>
                            <Route path='/personal' exact component={Personal}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/sort' exact component={Login}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </div>
        );
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	setUserInfo: data => {
		dispatch(setUserInfo(data));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);
