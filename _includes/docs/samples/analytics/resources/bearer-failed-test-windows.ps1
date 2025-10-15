$headers = @{
    "Authorization" = "Bearer invalid-key"
}
$body = '{"model": "gemma3:1b", "prompt": "This will fail", "stream": false}'
Invoke-RestMethod -Uri http://localhost:8880/api/generate -Method Post -Headers $headers -Body $body -ContentType "application/json"
