@echo off
title Desi Chakra - Rural Agri Ecosystem Launcher
echo ======================================================
echo    Desi Chakra - AI Powered Rural Agri Ecosystem
echo ======================================================
echo.

echo [1/3] Opening project in Visual Studio Code...
start "" "C:\Users\ASUS\AppData\Local\Programs\Microsoft VS Code\Code.exe" "C:\Users\ASUS\Desktop\Desi chakra website"
if %ERRORLEVEL% NEQ 0 (
    :: Fallback to just "code" if the specific path is different
    start "" code "C:\Users\ASUS\Desktop\Desi chakra website"
)

echo [2/3] Starting Local Web Server (Python HTTP Server)...
start "Desi Chakra Server" cmd /k "cd /d C:\Users\ASUS\Desktop\Desi chakra website && python -m http.server 8000"

echo [3/3] Opening browser at http://localhost:8000...
timeout /t 2 /nobreak > nul
start http://localhost:8000

echo.
echo ======================================================
echo Launch complete! Edit code in VS Code, view site in browser.
echo ======================================================
timeout /t 5 > nul
exit
