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
    "import/no-unresolved": "off",
    "no-use-before-define": "off",
    "prettier/prettier": "off",
    "react/no-array-index-key" : "off",
    "no-underscore-dangle" : "off",
    "global-require" : "off",
    "semi": [2, "always"],
    "react/prop-types": "off",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    // "prettier/prettier": [
    //   "error",
    //   {
    //     trailingComma: "es5",
    //     singleQuote: true,
    //     printWidth: 100,
    //   },
    // ],
    
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
  },
  
  plugins: [
    "react-hooks",
  ]
};
