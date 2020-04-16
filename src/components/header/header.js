import React, { Component } from 'react';
// import Header from '../../components/header'
import './header.css'
import '../../assets/bootstrap/css/bootstrap.css'
import '../../assets/css/style.css'
import {
    Link
} from 'react-router-dom'
import { setUserInfo } from '../../redux/actions/userInfo';
import { connect } from 'react-redux';
import { addTag } from '../../redux/actions/tagList';
import $axios from '../../axios/$axios';
// import tagList from '../../redux/reducers/tagList';
class Header extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     productSort: []
        // }
    }
    componentWillMount() {
        let that = this
        $axios({
            url: '/api/admin/fetchClass',
            method: 'get',
            type: 'json'
        }).then(data => {
            let newData = Array.from(data.data)
            this.props.addTag(newData);
            this.setState({
                productSort: newData
            })
        })
    }
    render() {
        const { tagList } = this.props
        const tags = tagList[0]
        return (
            < div className="header text-center" >
                <div className="navbar navbar-expand-lg navbar-light navbar-custom">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            HCUEEN
                        </Link>
                        <div className="collapse navbar-collapse pull-xs-right justify-content-end" id="navbar-1">
                            <ul className="navbar-nav mt-2 mt-md-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">首页</Link>
                                </li>
                                <li className="nav-item dropdown mega-menu">
                                    <Link className="nav-link dropdown-toggle"
                                        to="/product" id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        产品
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className="container">
                                            <div className="divider"></div>
                                            <div className="row">
                                                {
                                                    tags != undefined
                                                        ? tags.map((item, key) => {
                                                            return < div className="col-md-4" key={key}>
                                                                <h6 className="text-uppercase">{item.sort}</h6>
                                                                <ul className="nav flex-column">
                                                                    {
                                                                        item.allClass.map((list, key) => {
                                                                            return <li className="nav-item" key={key}>
                                                                                <Link className="nav-link" to={{
                                                                                    pathname: '/product',
                                                                                    state: { sort: item.sort, class: list }
                                                                                }}>{list}</Link></li>
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        })
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle"
                                        to="/personal" id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        个人中心
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="index.html">Homepage</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="catalog.html">Catalog</a>
                                        <a className="dropdown-item" href="item.html">Item Detail</a>
                                        <a className="dropdown-item" href="cart.html">Cart</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="contact.html">Contact</a></div>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown" role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="fas fa-shopping-cart">购物车</i>
                                        <span className="badge badge-pill badge-primary">3</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbarDropdown">
                                        <h6>3 Items <span className="emphasis">$147.00</span></h6>
                                        <div className="dropdown-divider"></div>
                                        <ul className="shopping-cart-items">
                                            <li className="row">
                                                <div className="col-3">
                                                    <img src="images/placeholder-product.jpg" width="60" />
                                                </div>
                                                <div className="col-9">
                                                    <h6><a href="item.html">Product Name</a></h6>
                                                    <span className="text-muted">1x</span>
                                                    <span className="emphasis">$49.00</span></div>
                                            </li>
                                            <li className="row">
                                                <div className="col-3">
                                                    <img src="images/placeholder-product.jpg" width="60" />
                                                </div>
                                                <div className="col-9">
                                                    <h6><a href="item.html">Product Name</a></h6>
                                                    <span className="text-muted">1x</span>
                                                    <span className="emphasis">$49.00</span></div>
                                            </li>
                                            <li className="row">
                                                <div className="col-3">
                                                    <img src="images/placeholder-product.jpg" width="60" />
                                                </div>
                                                <div className="col-9">
                                                    <h6><a href="item.html">Product Name</a></h6>
                                                    <span className="text-muted">1x</span>
                                                    <span className="emphasis">$49.00</span></div>
                                            </li>
                                        </ul>

                                        <a href="cart.html" className="btn btn-lg btn-full-width btn-primary">View Cart</a></div>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/login">登录</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
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
)(Header);