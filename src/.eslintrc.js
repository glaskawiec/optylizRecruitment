module.exports = {
    parser: "babel-eslint",

    parserOptions: {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
    },
    plugins: [
        "standard",
        "react",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    rules: {
        "quotes": ["error", "single"],
        "no-var": "error", // optional, recommended when using es6+
        "no-unused-vars": 1, // recommended
        "semi": ["error", "always"],
        "no-unused-expressions": 0
    },
};