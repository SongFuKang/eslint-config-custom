module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  root: true,
  plugins: [
    // 'html'
  ],
  globals: {},
  rules: {
    /* 以下是通用的规则 */

    // Possible Errors
    // 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关

    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': [
      'error',
      'except-parens'
    ],
    'no-console': 'off',
    'no-constant-condition': [
      'error',
      { checkLoops: false }
    ],
    'no-control-regex': 'off',
    'no-debugger': 'error',
    'no-dupe-args': 'off',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': [
      'error',
      { allowEmptyCatch: true }
    ],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [
      'error',
      'functions'
    ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': [
      'error',
      'both'
    ],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'off',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Best Practices
    // 这些规则是关于最佳实践的，帮助你避免一些问题

    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'off',
    'class-methods-use-this': 'off',
    'complexity': [
      'error',
      { max: 20 }
    ],
    'consistent-return': 'off',
    'curly': [
      'error',
      'multi-line',
      'consistent'
    ],
    'default-case': 'off',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'off',
    'eqeqeq': [
      'error',
      'always'
    ],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'off',
    'no-alert': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'off',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'off',
    'no-octal': 'off',
    'no-octal-escape': 'off',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'off',
    'no-restricted-properties': 'off',
    'no-return-assign': [
      'error',
      'always'
    ],
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-labels': 'off',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'error',
    'yoda': [
      'error',
      'never',
      { onlyEquality: true }
    ],

    // Strict Mode
    // 该规则与使用严格模式和严格模式指令有关

    'strict': 'off',

    // Variables
    // 这些规则与变量声明有关

    'init-declarations': 'off',
    'no-delete-var': 'off',
    'no-label-var': 'off',
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false
      }
    ],

    // Stylistic Issues
    // 这些规则是关于风格指南的，而且是非常主观的

    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': [
      'error',
      'always',
      { includeCommonJSModuleExports: false }
    ],
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'error',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'max-depth': 'error',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': [
      'error',
      'always-multiline'
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxBOF: 1,
        maxEOF: 1
      }
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    'one-var': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': [
      'error',
      'never'
    ],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': 'off',
    'quotes': [
      'error',
      'single',
      { avoidEscape: true }
    ],
    'semi': [
      'error',
      'always'
    ],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: [
            '*'
          ],
          balanced: true
        }
      }
    ],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'off',

    // ECMAScript 6
    // 这些规则只与 ES6 有关，即通常所说的 ES2015

    'arrow-body-style': 'off',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error'
  }
};
