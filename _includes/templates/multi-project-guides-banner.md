{% if docsPrefix == "pe/" %}

{% include templates/guides-banner-pe.md %}

{% elsif docsPrefix == "paas/" %}

{% include templates/guides-banner-paas.md %}

{% else %}

{% include templates/guides-banner.md %}

{% endif %}
