module.exports = {
  extends: [
    "airbnb",
    // "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  parser: "babel-eslint",
  rules: {
    "import/no-unresolved": 0,
    "no-use-before-define": 0,
    "prettier/prettier": 0,
    "react/no-array-index-key" : 0,
    "no-underscore-dangle" : 0,
    "global-require" : 0,
    "semi": [2, "always"],
    "react/prop-types": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "camelcase": 0,
    "no-shadow": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
  
    // "prettier/prettier": [
    //   "error",
    //   {
    //     trailingComma: "es5",
    //     singleQuote: true,
    //     printWidth: 100,
    //   },
    // ],
  
  },
  
  plugins: [
    "react-hooks",
  ]
};
