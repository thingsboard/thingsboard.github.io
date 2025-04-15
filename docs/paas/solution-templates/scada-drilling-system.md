---
layout: docwithnav-paas
assignees:
- stitenko
title: SCADA Oil & Gas Drilling system
description: SCADA Oil & Gas Drilling system overview

go-to-drilling-solution-templates-page-1:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/go-to-drilling-solution-templates-page-1-pe.png
        title: 'Go to the "Solution templates" page. Find "SCADA Oil & Gas Drilling system" and click "Install" to start the installation process.'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-solution-instruction-1-pe.png
        title: 'Configuration instructions for this solution will be provided — follow the steps as instructed.'
    2:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/go-to-drilling-dashboard-1-pe.png
        title: 'Once done, click "Close" to complete the setup and proceed to the dashboard.'
    3:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/go-to-drilling-dashboard-2-pe.png
        title: 'SCADA Oil & Gas Drilling system dashboard.'

launch-modbus-pool-emulator-1:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-launch-modbus-emulator-1-pe.png
        title: 'Run the command to start the Modbus pool emulator.'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-launch-modbus-emulator-2-pe.png
        title: ''

launch-iot-gateway-1:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-launch-iot-gateway-1-pe.png
        title: 'Run the command from the folder where you&#39;ve saved the docker-compose.yml file to run the IoT Gateway:'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-launch-iot-gateway-2-pe.png
        title: ''

docker-compose-yml:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-solution-instruction-2-pe.png
        title: 'Copy the configuration for the docker-compose.yml file from the instructions;'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-docker-compose-yml.png
        title: 'Create a new file named docker-compose.yml on your computer, paste the copied configuration into it, and save the file.'

go-to-dashboard-1:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/go-to-drilling-dashboard-1-pe.png
        title: 'Click "Close" to proceed to the dashboard;'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/go-to-drilling-dashboard-2-pe.png
        title: 'SCADA Oil & Gas Drilling system dashboard.'

drilling-dashboard-1:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-1-pe.png
        title: 'Main drilling SCADA system state – Real-time monitoring of drilling parameters (speed, depth, tension, flow rate) with control over pumps, rotors, and preventers.'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-2-pe.png
        title: 'Data monitoring SCADA system state – Tracks drill bit position, well pressure, mud flow, mechanical tension, drilling performance, equipment status, and environmental conditions while analyzing temperature, vibration, and gas levels to prevent failures.'
    2:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-3-pe.png
        title: 'Drilling rig state –Monitoring and controlling the rotational speed, hoisting speed, and drilling rig pressure, with real-time load analysis and drilling progress tracking.'
    3:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-4-pe.png
        title: 'Blowout preventer (BOP) state – Ensures well pressure control, monitors leaks, mud temperature, and gas levels, with real-time pressure trend analysis.'
    4:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-5-pe.png
        title: 'Drill bit performance state – Tracks drilling speed, bit position, vibration, and temperature to optimize penetration rate and efficiency.'
    5:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-6-pe.png
        title: 'Drilling mud system state – Monitors and controls drilling fluid properties, ensuring proper lubrication, cooling, and circulation.'
    6:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-7-pe.png
        title: 'Draw works system state – Controls hoisting and lowering of the drill string, adjusting speed, direction, and tension while tracking vibrations and position.'
    7:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-8-pe.png
        title: 'Alarms and notifications – Logs real-time alerts and warnings for quick response to failures, abnormal pressure, or unexpected temperature.'

drilling-dashboard-2:
    0:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-9-pe.png
        title: 'Try changing some of the equipment configurations — for example, set a greater well depth, adjust the drilling speed, or turn off the pump.'
    1:
        image: https://img.thingsboard.io/solutions/scada-drilling-system/drilling-dashboard-10-pe.png
        title: 'Observe the results of these actions to see how they affect the system.'

---

{% assign docsPrefix = "paas/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}
{% include docs/pe/solution-templates/scada-drilling-system.md %}