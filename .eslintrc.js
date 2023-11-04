module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    project: "*/class/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
plugins: ["react","jest/globals"],// 필요없는 규칙은 off해서 꺼주세요
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
