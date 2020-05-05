import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div class="container">
                    <div class="row mb-4 text-center">
                        <div class="col-sm-6 col-md-4 pt-2">
                            <h5>关于我们</h5>
                            <ul class="nav-footer">
                                <li class="nav-item"><a class="nav-link" href="#">企业文化</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">公司主页</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">联系我们</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-4 pt-2">
                            <h5>经营理念</h5>
                            <ul class="nav-footer">
                                <li class="nav-item"><a class="nav-link" href="#">技术方案</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">价值观</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">公司使命</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-4 pt-2">
                            <h5>产品</h5>
                            <ul class="nav-footer">
                                <li class="nav-item"><a class="nav-link" href="#">产品理念</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">产品设计</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">行业应用</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;