$headers = @{
    "Authorization" = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("myuser:mypassword"))
}
$body = '{"model": "gemma3:1b", "prompt": "Why is the sky blue?", "stream": false}'
Invoke-RestMethod -Uri http://localhost:8880/api/generate -Method Post -Headers $headers -Body $body -ContentType "application/json"
