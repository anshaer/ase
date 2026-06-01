const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,          // 軟體視窗預設寬度
    height: 800,         // 軟體視窗預設高度
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true, 
    }
  });

  // 讓視窗直接載入您最上層的 index.html
  win.loadFile('index.html'); 
}

// 解鎖記憶體上限到 8GB，完全不卡效能
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=8192');

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
