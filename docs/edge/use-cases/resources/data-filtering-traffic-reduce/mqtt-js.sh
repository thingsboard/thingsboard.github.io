# Set YOUR_THINGSBOARD_HOST to demo.thingsboard.io or localhost
export THINGSBOARD_HOST=YOUR_THINGSBOARD_HOST #e.g. export THINGSBOARD_HOST=localhost
# Set YOUR_MQTT_PORT. Default MQTT port is 1883
export THINGSBOARD_PORT=YOUR_MQTT_PORT #e.g. export THINGSBOARD_PORT=1895
# Replace YOUR_ACCESS_TOKEN with one from Device details panel
export ACCESS_TOKEN=YOUR_ACCESS_TOKEN # e.g. export ACCESS_TOKEN=qoIqfaSHU9iU2hWuvy0k
# publish telemetry data via mqtt client
echo "Starting telemetry generator...";
while true; do node generator.js; sleep 1; done
