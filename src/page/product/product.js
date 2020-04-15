import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkState: props.location.state
        }
    }
    render() {
        console.log(this.state)
        return (
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-product">
                            <figure>
                                <img className="rounded-corners img-fluid" src="images/placeholder-product.jpg" />
                                <figcaption>
                                    <div className="thumb-overlay"><a href="item.html" title="More Info">
                                        <i className="fas fa-search-plus"></i>
                                    </a></div>
                                </figcaption>
                            </figure>
                            <h4 className="mb-1"><a href="item.html">Product Name</a></h4>
                            <p><span className="emphasis">$49.00</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;