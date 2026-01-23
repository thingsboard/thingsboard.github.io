<b><font size="3">Debug mode</font></b>

Enabling debug mode allows you to track events, states, and potential errors related to the execution of {{ feature }}. This greatly simplifies development and troubleshooting.

{% capture difference %}
**Note:** Debug mode can quickly increase disk usage because all debug events are stored in the database.
Starting from **ThingsBoard 3.9**, the platform stores the full set of debug events only during the first **15 minutes** after the {{ feature }} is created; afterward, only error events are retained.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

Debug mode settings can be combined or disabled entirely.