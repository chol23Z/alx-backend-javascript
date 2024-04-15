module.exports = function(api) {
  const presets = [
    ["@babel/preset-env", {
      targets: {
        node: "current",
      },
    }],
  ];

  const plugins = [];

  // You can add more presets and plugins here as needed

  return {
    presets,
    plugins
  };
}

