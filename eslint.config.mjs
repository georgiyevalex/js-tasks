import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    languageOptions: { globals: globals.browser },
    rules: {
      "semi": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "space-infix-ops": ["error", { "int32Hint": false }],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "indent": ["error", 2],
    }
  },
  pluginJs.configs.recommended,
];
