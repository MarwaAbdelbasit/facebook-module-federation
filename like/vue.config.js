const ModuleFederationPlugin =
   require("webpack").container.ModuleFederationPlugin;

   module.exports = {
    publicPath: "http://localhost:3001/",
    configureWebpack: {
      plugins: [
        new ModuleFederationPlugin({
          name: "like",
          library: { type: 'var', name: 'like' },
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            Like: './src/App.vue',
          },
          shared: ['vue', 'single-spa-vue'],
        }),
      ],
    },
    devServer: {
      port: 3001,
    },
  };