import React, { Component } from 'react';
// import Header from '../../components/header'
import './header.css'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="header-left-icon">HCUEEN</div>
                    <div className="header-left-item">
                        <div className="menu">123</div>
                        <div className="menu">123</div>
                        <div className="menu">123</div>
                        <div className="menu">123</div>
                        <div className="menu">123</div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-right-item">登录</div>
                    <div className="header-right-item">注册</div>
                </div>
            </div>
        );
    }
}
export default Header;