import React, { Component } from 'react';
// import { Form, Icon, Input, Button, Layout, Menu } from 'antd';
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
            // <div className="content">
            //     <img src={require('../../assets/img/banner.jpg')} className="carous"></img>
            //     <div>
            //         <div className="content-head">| 汇晨PLC |</div>
            //         <div className="content-products">
            //             <Link to='/sort' key="123" style={{ textDecoration: 'none', color: '#696969' }}>
            //                 <div className="content-products-item">
            //                     <img className="products-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586795994465&di=7c98c718b564f79c50e5caab6aed5275&imgtype=0&src=http%3A%2F%2Fimage.kegongwang.com%2Fupload%2Fstore%2Fimage%2F20180730%2F201807301558068397.png"></img>
            //                     <div className="products-name">H7-200 SMART</div>
            //                     <div className="products-detail">
            //                         <li>参数配置上位机下发，实际需要量程与模块配置灵活匹配</li>
            //                         <li>数字量输入多档可配置滤波器，宽范围适应不同速度信号输入</li>
            //                         <li>模拟量输入可配置滤波器，不占用CPU资源</li>
            //                         <li>高速差分背板总线，强悍的抗干扰性能</li>
            //                         <li>模块自带故障上报LED指示，现场问题一目了然</li>
            //                         <li>更小体积，更高密度</li>
            //                     </div>
            //                 </div>
            //             </Link>
            //             <Link to='/sort' key="1" style={{ textDecoration: 'none', color: '#696969' }}>
            //                 <div className="content-products-item">
            //                     <img className="products-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586795994465&di=7c98c718b564f79c50e5caab6aed5275&imgtype=0&src=http%3A%2F%2Fimage.kegongwang.com%2Fupload%2Fstore%2Fimage%2F20180730%2F201807301558068397.png"></img>
            //                     <div className="products-name">H7-200</div>
            //                     <div className="products-detail">
            //                         <li>参数配置上位机下发，实际需要量程与模块配置灵活匹配</li>
            //                         <li>数字量输入多档可配置滤波器，宽范围适应不同速度信号输入</li>
            //                         <li>模拟量输入可配置滤波器，不占用CPU资源</li>
            //                         <li>高速差分背板总线，强悍的抗干扰性能</li>
            //                         <li>模块自带故障上报LED指示，现场问题一目了然</li>
            //                         <li>更小体积，更高密度</li>
            //                     </div>
            //                 </div>
            //             </Link>
            //             <Link to='/sort' key="12" style={{ textDecoration: 'none', color: '#696969' }}>
            //                 <div className="content-products-item">
            //                     <img className="products-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586795994465&di=7c98c718b564f79c50e5caab6aed5275&imgtype=0&src=http%3A%2F%2Fimage.kegongwang.com%2Fupload%2Fstore%2Fimage%2F20180730%2F201807301558068397.png"></img>
            //                     <div className="products-name">H7-300 SMART</div>
            //                     <div className="products-detail">
            //                         <li>参数配置上位机下发，实际需要量程与模块配置灵活匹配</li>
            //                         <li>数字量输入多档可配置滤波器，宽范围适应不同速度信号输入</li>
            //                         <li>模拟量输入可配置滤波器，不占用CPU资源</li>
            //                         <li>高速差分背板总线，强悍的抗干扰性能</li>
            //                         <li>模块自带故障上报LED指示，现场问题一目了然</li>
            //                         <li>更小体积，更高密度</li>
            //                     </div>
            //                 </div>
            //             </Link>
            //         </div>
            //     </div>
            //     <div className="about">
            //         <div className="content-head">| 关于汇晨 |</div>
            //         <div className="content-about">
            //             <li>深圳市汇晨自动化技术有限公司专注于工业自动化产品的研发、生产、销售和技术服务</li>
            //             <li>依托专业的研发队伍及多年的行业技术积累，为客户提供高质量、高性能、高竞争力的自动化产品及整体解决方案</li>

            //         </div>
            //     </div>

            // </div>
            <div>
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ background: require('../../assets/img/cover-bg-1.jpg')}}>
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
                                    <img src="images/placeholder-shoes.png" style={{ width: `80%` }} />
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
                </div>
                <div className="collections text-center ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="collection col-md-4 alt-background">
                                <div className="container container-right text-center">
                                    <div>
                                        <h1>H7-200 SMART</h1>
                                        <p className="lead">Spring/Summer 2018 Collection</p>
                                        <Link href="catalog.html" className="btn btn-outline-secondary">查看详情</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="collection col-md-4 bg-secondary inverted">
                                <div className="container container-left text-center">
                                    <div>
                                        <h1>H7-200</h1>
                                        <p className="lead">Spring/Summer 2018 Collection</p>
                                        <Link href="catalog.html" className="btn btn-outline-white">查看详情</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="collection col-md-4 alt-background">
                                <div className="container container-right text-center">
                                    <div>
                                        <h1>H7-300</h1>
                                        <p className="lead">Spring/Summer 2018 Collection</p>
                                        <Link href="catalog.html" className="btn btn-outline-secondary">查看详情</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="featured-block text-center">
                    <div class="container">
                        <div class="row justify-center">
                            <div class="col-md-6 text-center">
                                <img class="mt-4 mb-4 img-fluid" src="images/placeholder-jacket.png" />
                            </div>
                            <div class="col-md-6 text-center text-md-left">
                                <h2 class="mb-3">Spring/Summer Collection 2018</h2>
                                <p class="lead mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
                                <a href="#" class="btn btn-md btn-outline-primary mt-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="products text-center">
                    <div class="container">
                        <h3 class="mb-4">Featured Products</h3>
                        <div class="row">
                            <div class="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img class="rounded-corners img-fluid" src="images/placeholder-product.jpg" width="240" height="240" />
                                    <figcaption>
                                        <div class="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i class="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span class="emphasis">$19.00</span></p>
                            </div>
                            <div class="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img class="rounded-corners img-fluid" src="images/placeholder-product.jpg" width="240" height="240" />
                                    <figcaption>
                                        <div class="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i class="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span class="emphasis">$19.00</span></p>
                            </div>
                            <div class="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img class="rounded-corners img-fluid" src="images/placeholder-product.jpg" width="240" height="240" />
                                    <figcaption>
                                        <div class="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i class="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span class="emphasis">$19.00</span></p>
                            </div>
                            <div class="col-sm-6 col-md-3 col-product">
                                <figure>
                                    <img class="rounded-corners img-fluid" src="images/placeholder-product.jpg" width="240" height="240" />
                                    <figcaption>
                                        <div class="thumb-overlay">
                                            <a href="item.html" title="More Info">
                                                <i class="fas fa-search-plus"></i>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                                <h4><a href="item.html">Product Name</a></h4>
                                <p><span class="emphasis">$19.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
            </div>
        );
    }
}
export default Home;
