In this mode, the result is handled immediately, bypassing the Rule Chain.   
This ensures minimal latency and guaranteed DB persistence.

**Options for Time series:**
- **Save to time series** — stores the value as historical data (ts_kv).
- **Save to latest values** — updates the latest value in ts_kv_latest if the timestamp is newer.
- **Send to WebSockets** — delivers updates to active WebSocket subscribers (without storing in DB).
- **Send to Calculated fields** — forwards updates to other calculated fields.   
  This enables building *chains of dependent fields*, where a single event can trigger multiple secondary calculations without using Rule Chains.
- **Custom TTL** — sets a custom storage duration (TTL) for this time series.   
  If disabled, the TTL defined in the **Tenant Profile** is used.

**Options for Attributes:**
- **Save to database** — writes the attribute to persistent storage.
- **Send to WebSockets** — instantly sends an update to WebSocket subscribers (without DB write).
- **Send to Calculated fields** — notifies other calculated fields about the attribute change, enabling cascaded calculations.
- **Update attribute only on value change** — updates the attribute only when the value actually changes.
- **Send attributes updates notification** — generates an Attributes Updated event and sends it to the Default Rule Chain.
