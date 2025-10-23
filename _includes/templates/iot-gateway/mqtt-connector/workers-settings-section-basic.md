![image](/images/gateway/mqtt-connector/workers-settings-1-ce.png)

1. **Max messages queue per worker**<br/>
How many MQTT messages one worker handles in a single turn before letting others run. 
Bigger number = higher throughput; smaller = lower latency. Example: ~100 for heavy telemetry, ~10–20 for fast RPC.

2. **Max number of workers**<br/>
How many workers run at the same time. More workers use more CPU cores but can cause contention if too high. 
Start near your CPU core count and tweak based on backlog and CPU.