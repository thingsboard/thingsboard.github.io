{% capture update_server_first %}
**Rules of Compatibility Between ThingsBoard Edge and ThingsBoard Server Versions:**
* A ThingsBoard Edge version X.Y.Z is compatible with the same ThingsBoard Server version X.Y.Z and any later versions.
* A ThingsBoard Edge version X.Y.Z is **NOT** compatible with ThingsBoard Server versions preceding X.Y.Z.

**Example**: ThingsBoard Edge version 3.3.4.1 is compatible with ThingsBoard Server version 3.3.4.1 and subsequent versions (3.4.0, 3.4.1, ...).
However, ThingsBoard Edge version 3.4.0 is **NOT** compatible with ThingsBoard Server version 3.3.4.1 or any prior versions (3.3.4, 3.3.3, ...).
In such scenarios, ThingsBoard Server 3.3.4.1 or a preceding version must first be upgraded to ThingsBoard Server 3.4.0 or a later version.

**Please ensure that the ThingsBoard Server is updated to the latest version before proceeding.**
{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}