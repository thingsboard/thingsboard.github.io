{% capture update_server_first %}
**ThingsBoard Edge and ThingsBoard Server versions compatibility rules**:
* ThingsBoard Edge version X.Y.Z is compatible with ThingsBoard Server version X.Y.Z and above.
* ThingsBoard Edge version X.Y.Z is **NOT** compatible with ThingsBoard Server versions below X.Y.Z.

**Example**: ThingsBoard Edge version 3.3.4.1 is compatible with ThingsBoard server version 3.3.4.1 and above (3.4.0, 3.4.1, ...). 
ThingsBoard Edge version 3.4.0 is **NOT** compatible with ThingsBoard server version 3.3.4.1 or below (3.3.4, 3.3.3, ...). 
ThingsBoard Server 3.3.4.1 or below should be upgraded to ThingsBoard Server 3.4.0 or above first.

**Please make sure that ThingsBoard Server is updated to the latest version before proceed.**
{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}