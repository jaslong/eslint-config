// https://eslint.org/docs/latest/developer-guide/shareable-configs
// https://eslint.org/docs/latest/user-guide/configuring/
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "{}": false
        },
        "extendDefaults": true
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
  },
  settings: {
    "import/resolver": {
      // Tell import plugin about tsconfig.json so relative imports work
      // https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-535351922
      typescript: {}
    }
  }
};
