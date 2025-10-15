curl http://localhost:8880/api/generate \
  -u wronguser:wrongpassword \
  -d '{"model": "gemma3:1b", "prompt": "This will fail", "stream": false}'
