{% if include.known_vulnerabilities == "true" %}
{% capture vuln_warning %}
This version has known security vulnerabilities that are fixed in newer releases. We recommend upgrading to the latest patch version instead.
{% endcapture %}
{% include templates/warn-banner.md content=vuln_warning %}
{% endif %}
{% assign _vp = include.version | split: "." %}{% assign _vmaj = _vp[0] | plus: 0 %}{% assign _vmin = _vp[1] | plus: 0 %}{% assign _vpat = _vp[2] | plus: 0 %}
{% if _vmaj == 4 and _vmin == 3 and _vpat >= 1 or _vmaj == 4 and _vmin == 2 and _vpat >= 2 %}
{% capture angular_warning %}
Starting with version {{ _vp[0] }}.{{ _vp[1] }}.{% if _vmin == 3 %}1{% elsif _vmin == 2 %}2{% endif %}, the platform uses Angular 20 (upgraded from Angular 18). The core platform remains fully backward compatible and no upgrade scripts are required. However, **custom UI code** (widgets or custom CSS) that relies on internal component structure or CSS variable names **may break**. This can affect up to ~1% of users with heavy customizations. We recommend testing custom UI in a staging environment before upgrading.
{% endcapture %}
{% include templates/warn-banner.md content=angular_warning %}
{% endif %}
