import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  {
    plugins: {
      jest: jest,
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest,
      },
    },
  },
  js.configs.recommended,

  {
    ignores: ["webpack.config.js", "babel.config.js", "jest.config.js"],
  },

  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "warn",
    },
  },
];
