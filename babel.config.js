module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};

/**
 * babel-preset-expo presets extends the default react native preset
 * this configuration add supports for decorators
 * tree shaking web packages
 * loading font and icons with optional native dependencies provided they're installed
 */
