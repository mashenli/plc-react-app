const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    // app.use(proxy('/baidu', {
    //     target: "https://news.baidu.com/",
    //     pathRewrite: {'^/baidu': ''},
    //     changeOrigin: true
    // }));
    app.use(createProxyMiddleware('/api', {
        target: "http://localhost:8000",
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));
};