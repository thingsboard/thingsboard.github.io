{% if page.url contains 'upgrade-instructions' %}
Before upgrading **ThingsBoard Edge**, ensure that **ThingsBoard Server** is [updated to the latest version](/docs/user-guide/install/{{docsPrefix}}upgrade-instructions/){: target="_blank"}.

Additionally, verify that the **ThingsBoard Edge** and **ThingsBoard Server** versions **are compatible**.
{% else %}
Before installing **ThingsBoard Edge**, ensure that **ThingsBoard Server** is [installed](/docs/user-guide/install/{{peDocsPrefix}}installation-options/){: target="_blank"} and [updated](/docs/user-guide/install/{{peDocsPrefix}}upgrade-instructions/){: target="_blank"} to the latest version.

Additionally, verify that the **ThingsBoard Edge** and **ThingsBoard Server** versions **are compatible**.
{% endif %}

{% capture update_server_first %}
## **Version Compatibility Rules:**
* **ThingsBoard Edge version X.Y.Z** works with the **ThingsBoard Server version X.Y.Z** and the next <span style="color:blue">**two**</span> versions.

_**ThingsBoard Edge 3.8.0** works with **ThingsBoard Server 3.8.0** and two later versions (3.9.0 and 3.9.1). You can view the **ThingsBoard Server Release Notes** [here](/docs/{{peDocsPrefix}}reference/releases/){: target="_blank"}._

* **ThingsBoard Edge version X.Y.Z** <span style="color:red">**does not work**</span> with **older** ThingsBoard Server versions.

_**ThingsBoard Edge 3.9.1** does not support **ThingsBoard Server 3.8.0** or any **earlier versions**. In such cases, the **ThingsBoard Server** must be [upgraded to the latest version](/docs/user-guide/install/{{peDocsPrefix}}upgrade-instructions/){: target="_blank"} first._

{% endcapture %}
{% include templates/warn-banner.md content=update_server_first %}

{% capture note %}
_If you run an **older version of ThingsBoard Edge** (e.g., version 3.6.0), the ThingsBoard team cannot guarantee the availability or proper functioning of all features._
{% endcapture %}
{% include templates/info-banner.md content=note %}


