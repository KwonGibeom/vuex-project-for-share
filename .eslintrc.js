/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: ['prettier'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        trailingComma: "none",
        bracketSpacing: true,
        useTabs: false
      }
    ]
  },
  
};
