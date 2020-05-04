import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
// const { Header } = Layout
import Header from '../../components/header/header'
import Home from '../home/home'
import Collect from '../collect/collect'
import Product from '../product/product'
import ProductDetail from '../productDetail/productDetail'
import PersonalHome from '../personal/home/home'
import PersonalPassword from '../personal/password/password'
import PersonalView from '../personal/view/view'
import Personal from '../personal/personal'
import Login from '../login/login'
import { setUserInfo } from '../../redux/actions/userInfo';
import { addTag } from '../../redux/actions/tagList';
import { connect } from 'react-redux';
import './index.css'
import { Layout } from 'antd';
// import 'antd/dist/antd.css'
import store from '../../redux/store'
import $axios from '../../axios/$axios';
import {
    // BrowserRouter as Router,
    Route,
    Switch,
    // Link
} from 'react-router-dom'
import Footer from '../../components/footer/footer';
const { Content, } = Layout;
class Index extends Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     let that = this
    //     $axios({
    //         url: '/api/admin/fetchClass',
    //         method: 'get',
    //         type: 'json'
    //     }).then(data => {
    //         let newData = Array.from(data.data)
    //         this.props.addTag(newData);
    //     })
    // }
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
                            <Route path='/productDetail' exact component={ProductDetail}></Route>
                            <Route path='/personal_home' exact component={PersonalHome}></Route>
                            <Route path='/personal_password' exact component={PersonalPassword}></Route>
                            <Route path='/personal_view' exact component={PersonalView}></Route>
                            <Route path='/personal' exact component={Personal}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/sort' exact component={Login}></Route>
                        </Switch>
                    </Content>
                </Layout>
                <Footer></Footer>
            </div>
        );
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    setUserInfo: data => {
        dispatch(setUserInfo(data));
    },
    addTag: data => {
        dispatch(addTag(data));
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
