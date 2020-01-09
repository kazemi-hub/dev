var path = require("path");

module.exports = {
    entry: "./asset/js/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    }
}