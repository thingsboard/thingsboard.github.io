The result is not stored directly on database. Instead, ThingsBoard generates an internal message:
- <span class="code-light">POST_TELEMETRY_REQUEST</span>, or
- <span class="code-light">POST_ATTRIBUTES_REQUEST</span>

and routes it to the entity&#39;s **Default Rule Chain**.

Use this strategy when you need:
- additional processing logic
- filters, scripts, or conversions
- conditional persistence
- enrichment, routing, or forwarding

To store the result, the Rule Chain must include a [save time series](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node){:target="_blank"} or [save attributes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/action-nodes/#save-attributes-node){:target="_blank"} node.

> This is the classic processing model used before direct processing was introduced.