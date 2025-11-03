curl http://localhost:8880/api/generate -v \
  -H "Authorization: Bearer invalid-key" \
  -d '{"model": "gemma3:1b", "prompt": "This will fail", "stream": false}'
