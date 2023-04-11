import { app, BrowserWindow, ipcMain, Menu } from "electron";
import * as path from "path";
import * as url from "url";
import * as fs from "fs";

let win: BrowserWindow;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/modern-model-railways-controler/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  createMenu();
});

function createMenu() {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          accelerator: 'CmdOrCtrl+O',
          click() {
            console.log('Open clicked');
          },
        },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click() {
            console.log('Save clicked');
          },
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            app.quit();
          },
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' },
      ],
    },
    {
      label: 'Layout connection',
      submenu: [
        {
          label: 'Connect',
          accelerator: 'AltOrOption+C',
          click() {
            console.log('Connect clicked');
          },
        },
        {
          label: 'Disconnect',
          accelerator: 'AltOrOption+D',
          click() {
            console.log('Disconnect clicked');
          },
        },
        { type: 'separator' },
        {
          label: 'Configure connections',
          click() {
            console.log('Configure connections clicked');
          },
        },
        { type: 'separator' },
        {
          label: 'Connection tools',
          submenu: [
            {
              label: 'MERG CBUS console',
              click() {
                console.log('MERG CBUS console clicked');
              }
            },
            {
              label: 'MERG CBUS node manager',
              click() {
                console.log('MERG CBUS node manager');
              }
            }
          ]
        },
      ] 
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
  app.quit();
});

function getImages() {
  const cwd = process.cwd();
  fs.readdir('.', {withFileTypes: true}, (err, files) => {
      if (!err) {
        const re = /(?:\.([^.]+))?$/;
        const images = files
          .filter(file => file.isFile() )//&& ['jpg', 'png'].includes(re.exec(file.name)[1]))
          .map(file => `file://${cwd}/${file.name}`);
        win.webContents.send("getImagesResponse", images);
      }
  });
}

function isRoot() {
    return path.parse(process.cwd()).root == process.cwd();
}

function getDirectory() {
  fs.readdir('.', {withFileTypes: true}, (err, files) => {
      if (!err) {
          const directories = files
            .filter(file => file.isDirectory())
            .map(file => file.name);
          if (!isRoot()) {
              directories.unshift('..');
          }
          win.webContents.send("getDirectoryResponse", directories);
      }
  });
}

ipcMain.on("navigateDirectory", (event, path) => {
  process.chdir(path);
  getImages();
  getDirectory();
});
