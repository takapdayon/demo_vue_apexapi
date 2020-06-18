module.exports = {
    devServer: {
      proxy: {
        "/api/": {
          target: "https://public-api.tracker.gg/",
          pathRewrite: {'^/api/': ''}
        }
      }
    }
  };