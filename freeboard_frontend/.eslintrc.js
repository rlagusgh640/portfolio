module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],

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
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", //안하면 모든페이지에 import React from "react " 해야함 next js사용하면 off
    "@typescript-eslint/explicit-function-return-type": "off", //컴포넌트에 리턴타입 달기 JSX.Element
    "@typescript-eslint/no-misused-promises": "off", // Promise<void> await함수
    "spaced-comment": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off", //title!==""O   !titleX
    "@typescript-eslint/triple-slash-reference": "off", /// x
  },
};
