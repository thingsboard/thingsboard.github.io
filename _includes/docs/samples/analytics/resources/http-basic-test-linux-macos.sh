curl http://localhost:8880/api/generate \
  -u myuser:mypassword \
  -d '{"model": "gemma3:1b", "prompt": "Why is the sky blue?", "stream": false}'
