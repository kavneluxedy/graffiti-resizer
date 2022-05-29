const { ipcRenderer } = require("electron");
const RouterBasic = require("../RouterBasic");

if (module.hot) {
  module.hot.accept();
}

// Debug
console.log(RouterBasic);
console.log("__DBG__ " + ipcRenderer);

document.getElementById("app").innerHTML += "HELLO WORLD !";
