{% capture infoWired %}
<p>Version Compatibility Rules - Read before proceeding
</p>
{% if page.url contains 'upgrade-instructions' %}
<p>Before upgrading ThingsBoard Edge, ensure that <b>ThingsBoard Server</b> is <a href="/docs/{{peDocsPrefix}}user-guide/install/upgrade-instructions/" target="_blank">updated to the latest version</a>.</p>
{% else %}
<p>Before installing ThingsBoard Edge, ensure that <b>ThingsBoard Server</b> is <a href="/docs/{{peDocsPrefix}}user-guide/install/installation-options/" target="_blank">installed</a> and <a href="/docs/{{peDocsPrefix}}user-guide/install/upgrade-instructions/" target="_blank">updated</a> to the latest version.</p>
{% endif %}
<p>Additionally, verify that the <b>ThingsBoard Edge and ThingsBoard Server versions are compatible</b>.</p>

<p>Compatibility rules:</p>
<ul>
<li>ThingsBoard Edge version X.Y.Z works with ThingsBoard Server version X.Y.Z and the next <span style="color:red"><strong>two</strong></span> versions.</li><ul>
<li>Example: ThingsBoard Edge 3.8.0 works with ThingsBoard Server 3.8.0 and <span style="color:red"><strong>two</strong></span> later versions (3.9.0 and 3.9.1). View the <a href="/docs/{{peDocsPrefix}}reference/releases/" target="_blank">ThingsBoard Server Release Notes here</a>.</li></ul>
<li>ThingsBoard Edge version X.Y.Z <span style="color:red"><strong>does not work</strong></span> with older ThingsBoard Server versions.</li><ul>
<li>Example: ThingsBoard Edge 3.9.1 <span style="color:red"><strong>does not support</strong></span> ThingsBoard Server 3.8.0 or earlier versions. The ThingsBoard Server must be <a href="/docs/user-guide/install/{{peDocsPrefix}}upgrade-instructions/" target="_blank">upgraded to the latest version</a> first.</li></ul>
</ul>
<p><strong>Note:</strong> If you run an older version of ThingsBoard Edge (e.g., version 3.6.0), the ThingsBoard team cannot guarantee the availability or proper functioning of all features.</p>
{% endcapture %}
{% include templates/warn-banner.md content=infoWired %}

