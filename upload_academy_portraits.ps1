param([string]$RepoFolder = "")
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$images = Get-ChildItem -LiteralPath $here -Filter 'academy-portrait-*.webp' -File
if ($images.Count -ne 8) { throw "Expected eight .webp images next to this script; found $($images.Count)" }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw "Git is not installed. Open GitHub repository /assets and use Add file > Upload files to upload the eight WebP files." }
if (-not $RepoFolder) { $RepoFolder = Join-Path $env:TEMP 'saferdiscounts-academy-photo-deploy' }
if (-not (Test-Path (Join-Path $RepoFolder '.git'))) {
  git clone https://github.com/saferdiscounts/saferdiscounts.com.git $RepoFolder
  if ($LASTEXITCODE -ne 0) { throw "Git clone failed; please check GitHub access" }
}
Push-Location $RepoFolder
try {
  git checkout main
  if ($LASTEXITCODE -ne 0) { throw 'Cannot checkout main' }
  git pull --ff-only origin main
  if ($LASTEXITCODE -ne 0) { throw 'Git pull failed; no files changed' }
  $dest = Join-Path $RepoFolder 'assets'
  New-Item -ItemType Directory -Path $dest -Force | Out-Null
  Copy-Item -Path (Join-Path $here 'academy-portrait-*.webp') -Destination $dest -Force
  git add -- 'assets/academy-portrait-*.webp'
  git diff --cached --quiet
  if ($LASTEXITCODE -eq 0) { Write-Host 'All eight photos are already in the repository.' -ForegroundColor Green; exit 0 }
  git commit -m 'Upload eight original academy portraits for homepage and language academy'
  if ($LASTEXITCODE -ne 0) { throw 'Commit failed' }
  git push origin main
  if ($LASTEXITCODE -ne 0) { throw 'Push failed; images remain committed locally' }
  Write-Host 'Successfully uploaded all eight academy portraits to GitHub main.' -ForegroundColor Green
} finally { Pop-Location }
