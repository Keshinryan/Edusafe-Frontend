const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
<<<<<<< HEAD
  transpileDependencies: true
=======
  transpileDependencies: true,
  devServer: {
    http2: false,
  },
>>>>>>> 1208a6d3b95664f7782678cbe7e1594bfe8e05ac
})
