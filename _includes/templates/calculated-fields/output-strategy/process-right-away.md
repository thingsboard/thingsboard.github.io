The result is processed right away without using a Rule Chain, ensuring minimal latency and direct handling based on the selected options.

**Options for Time series:**
- **Save to time series** — stores historical values in <span class="code-light">ts_kv</span>.
- **Save to latest values** — updates <span class="code-light">ts_kv_latest</span> if the timestamp is newer.
- **Send to WebSockets** — pushes updates to active WebSocket subscribers (no DB write).
- **Send to Calculated fields** — forwards updates to other calculated fields.   
  This enables building *chains of dependent fields*, where a single event can trigger multiple secondary calculations without using Rule Chains.
- **Custom TTL** — sets a custom storage duration (TTL) for this time series.   
  If disabled, the TTL defined in the **Tenant Profile** is used.

**Options for Attributes:**
- **Save to database** — writes the attribute to persistent storage.
- **Send to WebSockets** — pushes updates to active WebSocket subscribers (without DB write).
- **Send to Calculated fields** — notifies other calculated fields about the attribute change, enabling cascaded calculations.
- **Update attribute only on value change** — updates the attribute only when the value actually changes.
- **Send attributes updates notification** — generates an "Attributes Updated" event and sends it to the Default Rule Chain.