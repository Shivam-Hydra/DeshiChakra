@echo off
title Deshi Chakra App
cd /d "%~dp0"
echo Starting Deshi Chakra web server on http://localhost:8000...
start http://localhost:8000
python -m http.server 8000
