@echo off
echo =========================================
echo Project Move Script
echo =========================================
echo.
echo Current location: d:\New folder\bizondigital
echo Recommended location: d:\bizondigital
echo.
echo This script will:
echo 1. Copy the project to d:\bizondigital
echo 2. Keep the original as backup
echo.
pause

echo Copying project files...
xcopy "d:\New folder\bizondigital" "d:\bizondigital\" /E /I /H /Y

echo.
echo Project copied successfully!
echo.
echo Next steps:
echo 1. Open VS Code in the new location: d:\bizondigital
echo 2. Run: npm install
echo 3. Run: npm run build
echo.
echo The original folder is still at: d:\New folder\bizondigital
echo You can delete it after verifying the new location works.
echo.
pause
