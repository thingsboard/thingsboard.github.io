##### Output strategy

The output strategy defines how the calculated field result is processed. Two strategies are available:
- **Process immediately** (default) — the result is processed and stored right away, without using a Rule Chain.
- **Process via Rule Chains** — the result is passed to a entity&#39;s Default Rule Chain for additional processing logic.

{% capture outputStrategy %}
Process right away<small></small>%,%attribute%,%templates/calculated-fields/output-strategy/process-right-away.md%br%
Process via Rule Chains<small></small>%,%timeSeriesRolling%,%templates/calculated-fields/output-strategy/process-via-rule-chains.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="calculatedfieldsargumenttype" toggle-spec=outputStrategy %}