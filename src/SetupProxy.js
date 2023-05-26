const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/GipoApp',
    createProxyMiddleware({
      target: 'http://localhost:8080/GipoApp',
      changeOrigin: true,
      secure: false
    })
  );
};
