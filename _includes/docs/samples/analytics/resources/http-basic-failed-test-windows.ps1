$headers = @{
    "Authorization" = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("wronguser:wrongpassword"))
}
$body = '{"model": "gemma3:1b", "prompt": "This will fail", "stream": false}'
Invoke-RestMethod -Uri http://localhost:8880/api/generate -Method Post -Headers $headers -Body $body -ContentType "application/json"
