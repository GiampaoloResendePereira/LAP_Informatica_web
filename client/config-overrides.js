const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    // Adicione os plugins Babel que você precisa aqui
  )
);
