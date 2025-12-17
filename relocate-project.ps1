# PowerShell script to move project and fix build issues
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Project Relocation Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$sourcePath = "d:\New folder\bizondigital"
$destPath = "d:\bizondigital"

Write-Host "Current location: $sourcePath" -ForegroundColor Yellow
Write-Host "New location: $destPath" -ForegroundColor Green
Write-Host ""

if (Test-Path $destPath) {
    Write-Host "Warning: Destination folder already exists!" -ForegroundColor Red
    $confirm = Read-Host "Do you want to overwrite it? (yes/no)"
    if ($confirm -ne "yes") {
        Write-Host "Operation cancelled." -ForegroundColor Yellow
        exit
    }
    Remove-Item -Path $destPath -Recurse -Force
}

Write-Host "Copying project files (this may take a minute)..." -ForegroundColor Yellow

try {
    Copy-Item -Path $sourcePath -Destination $destPath -Recurse -Force
    Write-Host ""
    Write-Host "✅ Project copied successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Close VS Code" -ForegroundColor White
    Write-Host "2. Open VS Code in new location: $destPath" -ForegroundColor White
    Write-Host "3. In the terminal, run:" -ForegroundColor White
    Write-Host "   cd d:\bizondigital" -ForegroundColor Gray
    Write-Host "   npm install" -ForegroundColor Gray  
    Write-Host "   npm run build" -ForegroundColor Gray
    Write-Host ""
    Write-Host "✅ The build should now work without errors!" -ForegroundColor Green
    Write-Host ""
    Write-Host "The original folder is backed up at: $sourcePath" -ForegroundColor Yellow
    Write-Host "You can delete it after verifying the new location works." -ForegroundColor Yellow
    
} catch {
    Write-Host ""
    Write-Host "❌ Error copying files: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
