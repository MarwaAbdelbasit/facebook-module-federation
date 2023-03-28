const ModuleFederationPlugin =
   require("webpack").container.ModuleFederationPlugin;

   module.exports = {
    publicPath: "http://localhost:3000/",
    configureWebpack: {
      plugins: [
        new ModuleFederationPlugin({
          name: "home",
          library: { type: 'var', name: 'home' },
          filename: "remoteEntry.js",
          remotes: {
            'home-like': 'like',
          },
          exposes: {},
          shared: [],
        }),
      ],
    },
    devServer: {
      port: 3000,
    },
  };
