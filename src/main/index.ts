import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import debug from 'electron-debug';
import isDev from 'electron-is-dev';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow;

//if in development, use electron-debug
if (isDev) {
  require ('electron-reload')(__dirname);
  debug();
}

const createWindow = (): void => {
    // Create the browser window.
    win = new BrowserWindow({
        icon: path.join(process.cwd(), 'dist/renderer/icons/win/favicon.ico'),
        width: 1280,
        height: 720,
        minWidth: 800,
        title: 'Milestone Best Practice Deployment Checklist',
        titleBarStyle: 'hidden',
        webPreferences: {
          nodeIntegration: true
        }
    });

    //prevent app title from updating
    win.on('page-title-updated', (evt): void => {
        evt.preventDefault();
    });

    //disable the toolbar
    win.setMenu(null);

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(process.cwd(), 'dist/renderer/deployment-list.html'),
      protocol: 'file:',
      slashes: true,
  }))

    // Emitted when the window is closed.
    win.on('closed', (): void => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', (): void => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', (): void => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.