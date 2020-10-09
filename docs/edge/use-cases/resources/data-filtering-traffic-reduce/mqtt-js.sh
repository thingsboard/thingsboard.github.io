# Set YOUR_THINGSBOARD_HOST to ThingsBoard Edge host
export THINGSBOARD_HOST=127.0.0.1 # e.g. export THINGSBOARD_HOST=127.0.0.1
# Replace YOUR_ACCESS_TOKEN with one from Device details panel
export ACCESS_TOKEN=vP3gTwsgUOhGhlZwg7e3 # e.g. export ACCESS_TOKEN=fSzqLypyZdGxANdhG339
# Run generator.js script every second
echo "Starting telemetry generator...";
while true; do node generator.js; sleep 1; done