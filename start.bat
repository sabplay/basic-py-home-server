@echo off
cd app
pip install rich psutil pyftpdlib flask livereload speedtest-cli
cls
python main.py
pause