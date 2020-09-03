export THINGSBOARD_HOST=localhost
export THINGSBOARD_PORT=1895
# Replace YOUR_ACCESS_TOKEN with one from Device details panel.
export ACCESS_TOKEN=qoIqfaSHU9iU2hWuvy0k
# publish attributes and telemetry data via mqtt client
while true; do node generator.js; sleep 1; done
