const path = require("path");

module.exports = {
    mode: "none",
	entry: "public/renderer.js",
    "extraMetadata": {
        "main": "build/electron-main.js",
        "extends": "react-cra",
        "electronVersion": "18.2.3"
    },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
};
