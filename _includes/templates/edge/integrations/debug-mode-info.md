{% capture debug_note %}
While **Debug** mode is very useful for development and troubleshooting, keeping it enabled in production can significantly increase database storage requirements, since all debug data is stored there.

We strongly recommend **disabling Debug mode** once debugging activities are complete.
{% endcapture %}
{% include templates/info-banner.md content=debug_note %}