module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2015
    // sourceType: 'module'
  },
  extends: [
    'react-app'
  ],
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
    'func-names': 'off', // ['error', 'as-needed'], // 需要时添加函数名称
    'no-param-reassign': 'off', // ['error', { props: false }], // 函数形参可修改
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    semi: 'off',
    quotes: 'off',
    "new-cap": 'off',
    "no-undef": 'off',
    "jsx-a11y/anchor-is-valid": 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-anonymous-default-export': 'off'

  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       // 以vue/cli为例
  //       config: 'node_modules/@vue/cli-service/webpack.config.js',
  //     },
  //   },
  // },
  globals: {}

}
