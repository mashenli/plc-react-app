import React, { Component } from 'react';
// import Header from '../../components/header'
import './header.css'
import {
    Link,
    withRouter
} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="header-left-icon">HCUEEN</div>
                    <div className="header-left-item">
                        <Link className="link" to="/">
                            <div className="menu">首页</div>
                        </Link>
                        <Link className="link" to="/product">
                            <div className="menu">产品</div>
                        </Link>
                        <Link className="link" to="/collect">
                            <div className="menu">收藏夹</div>
                        </Link>
                        <Link className="link" to="/personal">
                            <div className="menu">个人中心</div>
                        </Link>
                    </div>
                </div>
                <div className="header-right">
                    <Link className="link">
                        <div className="header-right-item">注册</div>
                    </Link>
                    <Link className="link">
                        <div className="header-right-item login">登录</div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default withRouter(Header);