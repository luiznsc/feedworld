const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/MyFarm1',
    createProxyMiddleware({
      target: 'http://localhost:8080/MyFarm1/',
      changeOrigin: true,
      secure: false
    })
  );
};
