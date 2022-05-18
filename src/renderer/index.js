/* eslint-disable no-unused-expressions */
const { ipcRenderer } = require("electron");

console.log(ipcRenderer);
// document.onload(
// 	ipcRenderer.send("channel1", () => {
// 		data: "Renderer Data";
// 	})
// );