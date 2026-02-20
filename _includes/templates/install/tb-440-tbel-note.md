{% capture tb_4_4_0_tbel_note %}
**TBEL Date Formatting Changes in ThingsBoard 4.4**

ThingsBoard 4.4 runs on Java 25, which includes updated Unicode CLDR locale data. This may cause changes in locale-formatted date/time strings produced by `TbDate` methods such as `toLocaleString()`, `toLocaleDateString()`, and `toLocaleTimeString()`.

If your TBEL scripts rely on exact string matching of formatted dates, they may behave differently after upgrading. Methods like `toISOString()`, `toJSON()`, `getTime()`, and all numeric getters are **not affected**.

**Recommendations:** Use `toISOString()` or explicit patterns for stable formatting. Use numeric getters for comparisons instead of string matching. See [TBEL Date formatting changes](/docs/user-guide/tbel/#date-formatting-changes-in-thingsboard-44) for details.

{% endcapture %}
{% include templates/info-banner.md content=tb_4_4_0_tbel_note %}
