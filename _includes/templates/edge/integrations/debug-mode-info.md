{% capture debug_note %}
While **Debug** mode is very useful for development and troubleshooting, leaving it enabled in production mode can significantly increase the disk space
used by the database since all the debug data is stored there. It is highly recommended turning the Debug mode off after debugging is complete.
{% endcapture %}
{% include templates/info-banner.md content=debug_note %}