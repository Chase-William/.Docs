$charp = '../../deployable/docshark.exe'

# Check to see if charp.exe exists
# if (-not(Test-Path -Path $charp -PathType Leaf)) {
#   Write-Host "It looks like something was missing... Checkout the project usage wiki here https://github.com/Chase-William/Charp/wiki/Project-Usage for more information."
#   exit 0
# }

$data = '"../../vendor/Docshark.Core/src/Docshark.Core/" -core "../../deployable/Docshark.Runner.exe"'

$charp += ' ' + $data

# Run charp.exe to build docs
Invoke-Expression $charp
# Invoke-Expression '../../deployable/charp.exe "..\..\vendor\Charp.Core\test\Charp.Test.Data"'