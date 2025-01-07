---
layout: docwithnav-pe-edge
title: Deploying ThingsBoard Edge Alongside ThingsBoard IoT Gateway
description: Deploying ThingsBoard Edge alongside ThingsBoard IoT Gateway

startEdge:
  0:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.1-cloud-instances-section-pe.webp
    title: 'Log in to your <b>Cloud account</b> and navigate to the <b>Edge Management > Instances</b> section. Click the <b>“+”</b> button and select the <b>“Add new edge”</b> option.'
  1:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.2-add-new-edge-pe.webp
    title: 'In the <b>"Add Edge"</b> pop-up window, enter a name for your Edge in the <b>"Name"</b> field, and click the <b>"Add"</b> button.'
  2:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.3-done-pe.webp
    title: 'The <b>Edge instance</b> is displayed at the top of the list, as entries are sorted by creation time by default.'

copyYml:
  0:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.4-instrucrions-button-pe.webp
    title: 'Go to the <b>Edge Management > Instances</b> section, and click on the <b>Edge instance</b>. On the <b>Edge details"</b> page, click the <b>"Install & Connect Instructions"</b> button.'
  1:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/0.5-docker-pe.webp
    title: 'In the <b>"Install & Connect Instructions"</b> pop-up window, select the <b>"Docker"</b> tab and copy the configuration lines.'
  2:
    image: https://img.thingsboard.io/edge/config/paste-yml-terminal.webp
    title: 'Paste the copied lines into the <b>docker-compose.yml</b> file in the terminal and save it. To close the file, press <b>CTRL+X</b>.'
    
provisionGW:
  0:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.1-create-group-pe.webp
    title: 'Log in to your Cloud, navigate to the <b>Dashboards</b> section, and select the <b>"Group"</b> tab. Click the <b>"+"</b> button to add a new group. In the <b>"Add entity group"</b> pop-up window, enter the group name in the <b>"Name"</b> field and click the <b>"Add"</b> button.'
  1:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.2-click-details-dashboard-pe.webp
    title: 'Select the <b>"All"</b> tab and find the <b>"ThingsBoard IoT Gateways"</b> dashboard. The <b>"ThingsBoard IoT Gateways"</b> dashboard is one of the pre-created, out-of-the-box dashboards available. Click the <b>"Dashboard details"</b> button.'
  2:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.3-manage-owners-pe.webp
    title: 'On the <b>"Dashboard details"</b> page, click the <b>"Manage owner and groups"</b> button.'
  3:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1.4-select-group-pe.webp
    title: 'In the <b>"Manage owner and groups"</b> pop-up window, select the newly created group from the <b>"Groups"</b> drop-down menu. Click the <b>"Update"</b> button.'
  4:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/1-instances-section-pe.webp
    title: 'Navigate to the <b>Edge Management > Instances</b> section, then click the <b>“Manage edge dashboard groups”</b> button.'
  5:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/2-assign-dashboard-pe.webp
    title: 'On the <b>“Dashboard groups”</b> page, click the <b>“+”</b> icon to assign the newly created group to the <b>Edge instance</b>. Click the <b>“Assign”</b> button. The group and all dashboards within it will be assigned to the <b>Edge instance</b>.'
  6:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/3-login-to-edge-pe.webp
    title: 'Use <a href="http://127.0.0.1:8080" target="_blank">http://127.0.0.1:8080</a> to open the <b>Edge instance</b>, log in with your credentials, and go to the <b>Dashboards</b> section to open the <b>“ThingsBoard IoT Gateways”</b> dashboard.'
  7:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/4-add-gw-pe.webp
    title: 'Click the <b>“+”</b> button to add a new <b>IoT Gateway</b> device. Enter the gateway name in the <b>“Name”</b> field, and select the <b>“default”</b> device profile. Click the <b>“Create”</b> button.'
  8:
    image: https://img.thingsboard.io/edge/config/launch-command-pe.webp
    title: 'Download the <b>docker-compose.yml</b> file for your IoT Gateway device from the <b>“Launch command”</b> pop-up window.'



copyPasteYml:
  0:
    image: https://img.thingsboard.io/devices-library/edge/recomputer-r1000/10-copy-paste-configs.webp
---

{% assign peDocsPrefix = "pe/" %}
{% assign docsPrefix = "pe/edge/" %}
{% include docs/edge/user-guide/config/deploying-edge-alongside-iot-gateway.md %}