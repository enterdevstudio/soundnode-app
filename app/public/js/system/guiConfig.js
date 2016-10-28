"use strict";

const {
  ipcRenderer
} = require('electron');

let guiConfig = {};

// close the App
guiConfig.close = function () {
  ipcRenderer.send('closeApp');
};

// minimize the App
guiConfig.minimize = function () {
  ipcRenderer.send('minimizeApp');
};

// maximize the App
guiConfig.maximize = function () {
  ipcRenderer.send('maximizeApp');
};

module.exports = {
  guiConfig: guiConfig
}