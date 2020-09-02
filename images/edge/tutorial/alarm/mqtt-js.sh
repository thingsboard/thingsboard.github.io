#!/bin/sh

# Set ThingsBoard host to "demo.thingsboard.io" or "localhost"
export THINGSBOARD_HOST=127.0.0.1:1895

# Replace YOUR_ACCESS_TOKEN with one from Device details panel.
export ACCESS_TOKEN=u6B2RI1G1JfneRXeaKEu

# publish attributes and telemetry data via mqtt client
node publish.js