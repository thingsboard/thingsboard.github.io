{% capture windows_not_stable_msg %}
**Please consider to use Linux installation option, because Linux is the most stable platform for running ThingsBoard. Windows installation will be deprecated in the future. You can find Linux installation guides on [Installation Guide](/docs/user-guide/install/{{docsPrefix}}installation-options/) page**.
{% endcapture %}
{% include templates/warn-banner.md content=windows_not_stable_msg %}