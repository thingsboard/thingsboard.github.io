---
layout: docwithnav-gw
title: IoT Gateway Upgrade Instructions

---

{% capture gatewayupgradeoptions %}
Ubuntu Server/Raspberry PI<small></small>%,%DEB%,%templates/iot-gateway/upgrade-instructions/ubuntu-raspberry.md%br%
AlmaLinux/RHEL Server<small></small>%,%RPM%,%templates/iot-gateway/upgrade-instructions/alma-rhel-server.md%br%
Docker (Linux/Mac OS/Windows)<small></small>%,%DOCKER%,%templates/iot-gateway/upgrade-instructions/docker.md%br%
Python (pip)<small></small>%,%PIP%,%templates/iot-gateway/upgrade-instructions/python-pip.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="gatewayupgradeoptions" toggle-spec=gatewayupgradeoptions %}
