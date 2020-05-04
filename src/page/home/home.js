import React, { Component } from 'react';
import { Carousel } from 'antd';
// const { Header } = Layout
// import Header from '../../components/header/header'
// import Carous from '../../components/carous/carous'
import './home.css'
import { Link } from 'react-router-dom';
// import '../../assets/js/jquery-3.1.1.min.js'
// import { Layout } from 'antd';
class Home extends Component {
    render() {
        return (
            <div>
                {/* <div id="carousel" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ background: require('../../assets/img/IMG_1694.JPG') }}>
                            <div className="container slide-textonly">
                                <div>
                                    <h1>York &amp; Smith</h1>
                                    <p className="lead">Spring/Summer 2018 Collection</p>
                                    <a href="#" className="btn btn-outline-secondary">View Collection</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container slide-withimage">
                                <div className="description">
                                    <h1>York &amp; Smith</h1>
                                    <p className="lead">Spring/Summer 2018 Collection</p>
                                    <a href="#" className="btn btn-outline-secondary">View Collection</a>
                                </div>
                                <div className="slide-image">
                                    <img src={require('../../assets/img/IMG_1694.JPG')} style={{ width: `80%` }} />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ backgroundImage: require('../../assets/img/cover-bg-2.jpg') }}>
                            <div className="container slide-textonly">
                                <div>
                                    <h1>York &amp; Smith</h1>
                                    <p className="lead">Spring/Summer 2018 Collection</p>
                                    <a href="#" className="btn btn-outline-secondary">View Collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Carousel autoplay>
                    <div className="carousel">
                        <div className="carousel-item active" style={{ background: require('../../assets/img/IMG_1694.JPG') }}>
                            <div className="container slide-textonly">
                                <div className="left">
                                    <img className="imgs img-fluid" src={require('../../assets/img/IMG_1694.JPG')} />
                                </div>
                                <div className="right">
                                    <h1>SR 20</h1>
                                    <p className="lead">完美兼容，无需编程，即插即用，急速物联/标准款CPU SR20，继电器</p>
                                    <a href="#" className="btn btn-outline-secondary">查看产品</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-item active" style={{ background: require('../../assets/img/IMG_1694.JPG') }}>
                            <div className="container slide-textonly">
                                <div className="left">
                                    <img className="mt-4 mb-4 img-fluid" src={require('../../assets/img/IMG_1694.JPG')} />
                                </div>
                                <div className="right">
                                    <h1>CPU224经济型</h1>
                                    <p className="lead">汇晨H7-200 系列特有模块：IM265扩展 &amp; CP240串口模块</p>
                                    <a href="#" className="btn btn-outline-secondary">查看相关产品</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="carousel-item active" style={{ background: require('../../assets/img/IMG_1694.JPG') }}>
                            <div className="container slide-textonly">
                                <div className="left">
                                    <img className="mt-4 mb-4 img-fluid" src={require('../../assets/img/IMG_1694.JPG')} />
                                </div>
                                <div className="right">
                                    <h1>CPU224标准型</h1>
                                    <p className="lead">完全兼容S7-300系列所有CPU及ET200M</p>
                                    <a href="#" className="btn btn-outline-secondary">查看相关产品</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel>
                <div className="collections text-center ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="collection col-md-4 alt-background">
                                <div className="container container-left text-center">
                                    <div>
                                        <h1>H7-200 SMART</h1>
                                        <p className="lead">完美兼容，无需编程，即插即用，急速物联</p>
                                        <Link to={{
                                            pathname: '/product',
                                            state: { sort: 'H7-200 SMART' }
                                        }} className="btn btn-outline-secondary">查看详情</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="collection col-md-4 bg-secondary inverted">
                                <div className="container text-center">
                                    <div>
                                        <h1>H7-200</h1>
                                        <p className="lead">IM 265扩展模块&&CP240串口模块</p>
                                        <Link to={{
                                            pathname: '/product',
                                            state: { sort: 'H7-200' }
                                        }}
                                            className="btn btn-outline-white" > 查看详情</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="collection col-md-4 alt-background">
                                <div className="container container-right text-center">
                                    <div>
                                        <h1>H7-300</h1>
                                        <p className="lead">稳定、可靠、性价比极高</p>
                                        <Link to={{
                                            pathname: '/product',
                                            state: { sort: 'H7-300' }
                                        }} className="btn btn-outline-secondary">查看详情</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-block text-center">
                    <div className="container">
                        <h2 className="mb-4">销量冠军</h2>
                        <div className="row justify-center">
                            <div className="col-md-6 text-center">
                                <img className="mt-4 mb-4 img-fluid" src={require('../../assets/img/IMG_1694.JPG')} />
                            </div>
                            <div className="col-md-6 text-center text-md-left">
                                <h3 className="mb-3">H7-200 SMART/SMART CPU/SR 20</h3>
                                <p className="lead mt-2 mb-3">月销量：200</p>
                                <p>标准款CPU SR 20,继电器</p>
                                <a href="#" className="btn btn-md btn-outline-primary mt-4">购买</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products text-center">
                    <div className="container">
                        <h3 className="mb-4">Featured Products</h3>
                        <div className="row">
                            <div className="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img className="rounded-corners img-fluid" src={require('../../assets/img/IMG_1694.JPG')} width="240" height="240" />
                                    <figcaption>
                                        <div className="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i className="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span className="emphasis">$19.00</span></p>
                            </div>
                            <div className="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img className="rounded-corners img-fluid" src={require('../../assets/img/IMG_1694.JPG')} width="240" height="240" />
                                    <figcaption>
                                        <div className="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i className="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span className="emphasis">$19.00</span></p>
                            </div>
                            <div className="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img className="rounded-corners img-fluid" src={require('../../assets/img/IMG_1694.JPG')} width="240" height="240" />
                                    <figcaption>
                                        <div className="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i className="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span className="emphasis">$19.00</span></p>
                            </div>
                            <div className="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img className="rounded-corners img-fluid" src={require('../../assets/img/IMG_1694.JPG')} width="240" height="240" />
                                    <figcaption>
                                        <div className="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i className="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span className="emphasis">$19.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
