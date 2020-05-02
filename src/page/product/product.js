import React, { Component } from 'react';
import $axios from '../../axios/$axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkState: props.location.state,
            productList: []
        }
    }
    fetchData(value) {
        let data = this.state.linkState
        if (value) {
            data = value
        }
        $axios({
            url: '/api/fetch/product',
            method: 'post',
            type: 'json',
            data: data
        }).then(data => {
            this.setState({
                productList: data.data
            })
        })
    }
    componentWillMount() {
        this.fetchData()
    }
    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.location.state)
    }
    render() {
        return (
            <div className="products">
                <div className="container">
                    <div className="row">
                        {
                            this.state.productList.length > 0 ? this.state.productList.map((item, key) => {
                                return <div className="col-md-6 col-lg-4 col-product" key={key}>
                                    <figure>
                                        <img className="rounded-corners img-fluid" src="images/placeholder-product.jpg" />
                                        <figcaption>
                                            <div className="thumb-overlay"><a href="item.html" title="More Info">
                                                <i className="fas fa-search-plus"></i>
                                            </a></div>
                                        </figcaption>
                                    </figure>
                                    <Link className="nav-link" to={{
                                        pathname: '/productDetail',
                                        state: {
                                            goodsDetail:item
                                        }
                                    }}>
                                        <h4 className="mb-1">{item.modular}</h4>
                                        <h4 className="mb-1">{item.sort}/{item.classId}</h4>
                                        <h4 className="mb-1">{item.describe}</h4>
                                        <p><span className="emphasis">￥2000</span></p>
                                    </Link>
                                </div>
                            }) : null

                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;