@echo off
echo ========================================
echo Starting Your Portfolio Application
echo ========================================
echo.

echo Installing dependencies (if needed)...
call npm install
echo.

echo Starting development server...
echo.
echo Your portfolio will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm run dev
