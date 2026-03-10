{% if include.known_vulnerabilities == "true" %}
{% capture vuln_warning %}
This version has known security vulnerabilities that are fixed in newer releases. We recommend upgrading to the latest patch version instead.
{% endcapture %}
{% include templates/warn-banner.md content=vuln_warning %}
{% endif %}
{% if include.version == "4.3.1" or include.version == "4.2.2" %}
{% capture angular_warning %}
This release includes a framework upgrade (Angular 18 → 20). The core platform remains fully backward compatible and no upgrade scripts are required. However, **custom UI code** (widgets or custom CSS) that relies on internal component structure or CSS variable names **may break**. This can affect up to ~1% of users with heavy customizations. We recommend testing custom UI in a staging environment before upgrading.
{% endcapture %}
{% include templates/warn-banner.md content=angular_warning %}
{% endif %}
