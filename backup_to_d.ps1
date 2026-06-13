$BackupDir = "D:\DatDigital_Backup"
if (!(Test-Path $BackupDir)) { New-Item -ItemType Directory -Force -Path $BackupDir }

Write-Host "1. Nén toàn bộ mã nguồn (bỏ qua node_modules để giảm dung lượng)..."
$ZipPath = Join-Path $BackupDir "DatDigital_SourceCode.zip"
if (Test-Path $ZipPath) { Remove-Item -Force $ZipPath }
# Sử dụng lệnh tar có sẵn của Windows 10/11 để nén file ZIP siêu nhanh
tar.exe -caf $ZipPath --exclude="node_modules" --exclude=".next" --exclude=".git" .

Write-Host "2. Đang đóng gói website (Build HTML/CSS/JS)..."
npm run build

Write-Host "3. Xuất file web tĩnh sang ổ D..."
$OutDest = Join-Path $BackupDir "WebTinh_HTML_CSS"
if (Test-Path $OutDest) { Remove-Item -Recurse -Force $OutDest }
Copy-Item -Recurse -Force "out" -Destination $OutDest

Write-Host "--- HOÀN TẤT! ---"
Write-Host "File mã nguồn và Web tĩnh đã được lưu an toàn tại: $BackupDir"
