{% if page.url contains 'upgrade-instructions' %}
Before upgrading **ThingsBoard Edge**, ensure that **ThingsBoard Server** is [updated to the latest version](/docs/user-guide/install/{{docsPrefix}}upgrade-instructions/){: target="_blank"}.

Additionally, verify that the **ThingsBoard Edge** and **ThingsBoard Server** versions **are compatible**.
{% else %}
Before installing **ThingsBoard Edge**, ensure that **ThingsBoard Server** is [installed](/docs/user-guide/install/{{peDocsPrefix}}installation-options/){: target="_blank"} and [updated](/docs/user-guide/install/{{peDocsPrefix}}upgrade-instructions/){: target="_blank"} to the latest version.

Additionally, verify that the **ThingsBoard Edge** and **ThingsBoard Server** versions **are compatible**.
{% endif %}

{% capture update_server_first %}
### **Version Compatibility Rules:**
* **ThingsBoard Edge version X.Y.Z** works with the same **ThingsBoard Server version (X.Y.Z) and the next two versions**.
* ThingsBoard Edge version X.Y.Z **DOES NOT WORK** with **older ThingsBoard Server** versions.

_**For example**:_ 

_**ThingsBoard Edge** version **3.8.0** is compatible with **ThingsBoard Server** version **3.8.0** and two later versions (3.9.0, and 3.9.1)._

_**ThingsBoard Edge** version **3.9.1** is not compatible with **ThingsBoard Server** version **3.8.0** or any earlier versions. In such cases, the older version of **ThingsBoard Server must be upgraded first**._

{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}
