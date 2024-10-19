const { override } = require('customize-cra');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "stream": require.resolve("stream-browserify"), // Adicione esta linha
        "util": require.resolve("util/"),
        "url": require.resolve("url/"),
        "assert": require.resolve("assert/")
    };
    return config;
};
