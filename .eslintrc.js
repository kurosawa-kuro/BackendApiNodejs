module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "parserOptions": { // 既に入ってたのだった。eslint --init で作られたヤツに。
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "no-console": [
      "off"
    ]
  }
};