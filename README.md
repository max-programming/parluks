# parluks
Compile intial
electron-packager . --platform=win32 --arch=x64 parluks --icon app.ico


https://ourcodeworld.com/articles/read/927/how-to-create-a-msi-installer-in-windows-for-an-electron-framework-application

Generate installer:
C:\www\parluks-compile\windows>node builder.js


MAC

electron-packager . --overwrite --platform=darwin --arch=x64 --icon=icon_32.icns --prune=true --out=release-builds

