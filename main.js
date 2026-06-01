const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,          
    height: 800,         
    autoHideMenuBar: true, 
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true, 
      backgroundThrottling: false
    }
  });

  win.loadFile('index.html'); 
}

// 解鎖記憶體上限到 8GB
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=8192');

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
