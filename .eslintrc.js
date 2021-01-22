// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  // required to lint *.vue files
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // console.log 경고 끄기
    'no-console': 'off',
    // 정의되지 않은 변수 경고 끄기
    'no-undef': 'off',
    // 'space-before-function-paren': ['error', 'never'], // 띄어쓰기 규칙
    // "no-var": 0,
    // "no-plusplus": 0,
    // "vars-on-top": 0,
    // "no-underscore-dangle": 0, // var _foo;
    // "comma-dangle": ["error", "never"],
    // "func-names": 0, // setTimeout(function () {}, 0);
    // "prefer-arrow-callback": 0, // setTimeout(function () {}, 0);
    // "prefer-template": 0,
    // "no-nested-ternary": 0,
    // "max-classes-per-file": 0,
    // "arrow-parens": ["error", "as-needed"], // a => {}
    // "no-restricted-syntax": [0, "ForOfStatement"],
    // "no-param-reassign": ["error", { "props": false }],
    // "semi": "off",

    // prettier 적용
    'prettier/prettier': 'error',
    // prettier 다른 방식
    // "prettier/prettier": ["error",
    //   {
    //   "semi": false,
    //   "singleQuote": true,
    //   "endOfLine": "auto"
    //   }
    // ]
  },
}
