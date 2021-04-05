To start using ThingsBoard **Edge** you need to have {{currentThingsBoardVersion}} server that supports edge functionality up and running. 

{% if currentThingsBoardVersion == "ThingsBoard Professional Edition" %}
The easiest way is to use **ThingsBoard Cloud** server, once the official **3.3 version** released. Planned release date is **May 2021**.
Before official release please install ThingsBoard Professional Edition server that supports edge functionality on-premise.
{% endif %}
{% if currentThingsBoardVersion == "ThingsBoard Community Edition" %}
The easiest way is to use [Live Demo](https://demo.thingsboard.io/signup) server, that is already updated to the required version.
The alternative option is to install ThingsBoard Community Edition server that supports edge functionality on-premise.
{% endif %}

Please visit [Upgrade instructions for {{currentThingsBoardVersion}} server](/docs/edge/upgrade-server/) to install **3.3beta** version of {{currentThingsBoardVersion}} server that supports edge functionality before the official **3.3** {{currentThingsBoardVersion}} server release.

{% include templates/edge/tb-33-beta-note-upgrade.md %}

{% include templates/edge/tb-33-beta-note.md %}
