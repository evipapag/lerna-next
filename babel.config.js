const BABEL_ENV = process.env.BABEL_ENV;
const BABEL_TARGET = process.env.BABEL_TARGET;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';
const isTargetNode = BABEL_TARGET !== undefined && BABEL_TARGET === 'node';

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          ...(isTargetNode && { node: 'current' }),
          esmodules: isESM ? true : undefined
        }
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ];

  const plugins = ['@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins
  };
};
