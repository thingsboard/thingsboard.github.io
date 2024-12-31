{% capture difference %}
The **Debug mode** is very useful for development and troubleshooting.
However, having it on all the time can significantly increase the disk space used by the database since all the debug data is stored there.
<br>Therefore, starting from version 3.9, ThingsBoard stores all {{feature}} debug events for the first 15 minutes. After that, only failure events are retained.
These settings can be combined or completely disabled. 
{% endcapture %}
{% include templates/info-banner.md content=difference %}