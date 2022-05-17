const { ipcRenderer } = require("electron");

// !document.onload(
//   ipcRenderer.send("channel1", () => {
//     data: "Renderer Data";
//   })
// );