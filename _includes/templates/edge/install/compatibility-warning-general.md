{% capture update_server_first %}
**Rules of Compatibility Between ThingsBoard Edge and ThingsBoard Server Versions:**
* ThingsBoard Edge version X.Y.Z is compatible with ThingsBoard Server version X.Y.Z and subsequent versions.
* ThingsBoard Edge version X.Y.Z is **NOT** compatible with ThingsBoard Server versions prior to X.Y.Z.

**Example**: ThingsBoard Edge version 3.3.4.1 is compatible with ThingsBoard server version 3.3.4.1 and later versions (3.4.0, 3.4.1, ...).
However, ThingsBoard Edge version 3.4.0 is **NOT** compatible with ThingsBoard server version 3.3.4.1 or earlier versions (3.3.4, 3.3.3, ...).
In such a case, ThingsBoard Server 3.3.4.1 or an earlier version should first be upgraded to ThingsBoard Server 3.4.0 or a later version.

**Please ensure that the ThingsBoard Server is updated to the latest version before proceeding.**
{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}