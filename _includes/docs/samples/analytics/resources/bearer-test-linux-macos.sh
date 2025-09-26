curl http://localhost:8880/api/generate \
  -H "Authorization: Bearer my-secret-api-key-1" \
  -d '{"model": "gemma3:1b", "prompt": "Explain black holes to a 5-year-old", "stream": false}'
