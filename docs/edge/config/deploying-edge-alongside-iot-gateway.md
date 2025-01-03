---
layout: docwithnav-edge
title: Deploying ThingsBoard Edge Alongside ThingsBoard IoT Gateway
description: Deploying ThingsBoard Edge alongside ThingsBoard IoT Gateway

startEdge:
  0:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/installation-add-edge-item-1.webp
    title: 'Log in to your <b>Cloud account</b> and navigate to the <b>Edge Management > Instances</b> section. Click the <b>“+”</b> button and select the <b>“Add new edge”</b> option.'
  1:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/installation-add-edge-item-2.webp
    title: 'In the <b>"Add Edge"</b> pop-up window, enter a name for your Edge in the <b>"Name"</b> field, and click the <b>"Add"</b> button.'
  2:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/installation-add-edge-item-3.webp
    title: 'The <b>Edge instance</b> is displayed at the top of the list, as entries are sorted by creation time by default.'

copyYml:
    0:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.2-instrucrions-button.webp
        title: 'Go to the <b>Edge Management > Instances</b> section, and click on the <b>Edge instance</b>. On the <b>Edge details"</b> page, click the <b>"Install & Connect Instructions"</b> button.'
    1:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.3-docker.webp
        title: 'In the <b>"Install & Connect Instructions"</b> pop-up window, select the <b>"Docker"</b> tab and copy the configuration lines.'
    2:
        image: https://img.thingsboard.io/edge/config/paste-yml-terminal.webp
        title: 'Paste the copied lines into the <b>docker-compose.yml</b> file in the terminal and save it. To close the file, press <b>CTRL+X</b>.'

provisionGW:
    0:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1-instances-section.webp
        title: 'Log into your Cloud, navigate to the <b>Edge Management > Instances</b> section, and click the <b>“Manage dashboards”</b> button.'
    1:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/2-assign-dashboard.webp
        title: 'Click the <b>“+”</b> button. Select the <b>“ThingsBoard IoT Gateways”</b> dashboard from the drop-down menu in the pop-up window. Click the <b>“Assign”</b> button to assign it to the <b>Edge instance</b>. The <b>“ThingsBoard IoT Gateways”</b> dashboard is one of the pre-created, out-of-the-box dashboards available.'
    2:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/3-login-to-edge.webp
        title: 'Use <a href="http://127.0.0.1:8080" target="_blank">http://127.0.0.1:8080</a> to open the <b>Edge instance</b>, log in with your credentials, and go to the <b>Dashboards</b> section to open the <b>“ThingsBoard IoT Gateways”</b> dashboard.'
    3:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/4-add-gw.webp
        title: 'Click the <b>“+”</b> button to add a new <b>IoT Gateway</b> device. Enter the gateway name in the <b>“Name”</b> field, and select the <b>“default”</b> device profile. Click the <b>“Create”</b> button.'
    4:
        image: https://img.thingsboard.io/edge/config/launch-command.webp
        title: 'Download the <b>docker-compose.yml</b> file for your IoT Gateway device from the <b>“Launch command”</b> pop-up window.'

copyPasteYml:
    0:
        image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/10-copy-paste-configs.webp
---

{% assign docsPrefix = "edge/" %}
{% include docs/edge/user-guide/config/deploying-edge-alongside-iot-gateway.md %}