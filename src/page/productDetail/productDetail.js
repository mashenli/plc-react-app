import React, { Component } from 'react';
// import './productDetail.css'
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkGoodsDetail: props.location.state.goodsDetail,
        }
    }
    componentWillMount() {
        console.log(this.state.linkGoodsDetail)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="featured-block text-center" style={{minHeight:'635px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <div className="product-image mt-3">
                                <img className="img-fluid" src={require('../../assets/img/IMG_1694.JPG')} />
                            </div>
                        </div>
                        <div className="col-md-6 mt-5 mt-md-2 text-center text-md-left">
                            <h2 className="mb-3 mt-0">{this.state.linkGoodsDetail.modular}</h2>
                            <p className="lead mt-2 mb-3 primary-color">${this.state.linkGoodsDetail.price}</p>
                            <h5 className="mt-4">订货号</h5>
                            <p>{this.state.linkGoodsDetail.productId}</p>
                            <h5 className="mt-5">产品描述</h5>
                            <p>{this.state.linkGoodsDetail.describe}</p>
                            <a href="#" className="btn btn-full-width btn-lg btn-outline-primary mt-4 mb-4">查看详细数据</a>
                            <a href="#" className="btn btn-full-width btn-lg btn-outline-primary">购买</a></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductDetail;