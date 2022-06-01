const { ipcRenderer } = require("electron");
const App = require("../App.js");

if (module.hot) {
	module.hot.accept();
}

// Debug
console.log(App);
console.log("__DBG__ " + ipcRenderer);

document.getElementById("app").innerHTML += "HELLO WORLD !";
