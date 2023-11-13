---
layout: docwithnav
title: LPWA GPS Tracker with monoZ
description: Configuration of a monoZ telemetry device to enable it to send telemetry data to the ThingsBoard.

---

* TOC
{:toc}

## Overview

**monoZero** is a powerful development kit ecosystem designed for swift prototyping of cellular
IoT projects. Loaded with LTE-M / NB-IoT cellular modem and low power STM32 MCU, it hosts
5 different types of peripherals for allowing users to easily connect and control their variety
of sensors or other devices.

This guide will cover the following sections:

1. Hardware setup of GPS tracker using monoZero;
2. Embedded firmware to read and send GPS data via MQTT using monoZ SDK;
3. monoZ Cloud OSS (based on ThingsBoard) configuration to receive the GPS data via MQTT and display in a dashboard.

![image](/images/samples/monoz/monoZero-01.png)

## Prerequisites

**Hardware Components**:

 - monoZero BG96               - 1 pc
 - monoZero Grove Board        - 1 pc
 - NEO-6M GPS Module           - 1 pc
 - LTE-M /NB-IoT sim           - 1 pc

**Software Components**:
 - monoZ SDK
 - STM32CubeIDE

## Hardware Setup

### monoZero BG96 Board

monoZero BG96 variant hosts globally available Quectel BG96 modem that supports internet
service protocols like TCP, UDP, and PPP. The onboard STM32L4 Arm® Cortex®-M4 can be 
programmed via SWD (Serial Wire Debug). monoZero BG96 hosts 23 I/O peripherals with 1 x
USB, 1 x LPUART, 2 x UART, 3 x I2C, 3 x SPI and 1 x CAN for external communication.

monoZero BG96 can be configured using monoZ SDK for modem, protocol and peripheral configuration. Find more details of monoZero BG96 at docs.monoz.io

![image](/images/samples/monoz/monoZero-04.png)

### monoZero Grove Board

monoZero Grove board allows user to access the pin-based peripherals(LPUART, SPI, I2C, etc)
through grove ports (QWICC ports) thereby simplifying the hardware setup process.When

Grove board is connected to monoZero BG96 v2 or v3, grove port 3 corresponds to LPUART
peripheral.

![image](/images/samples/monoz/monoZero-05.png)

### GPS sensor
NEO-6M GPS module has been used to determine the GPS data. The module communicates
through LPUART port and hence can be connected to monoZero board via the LPUART grove
port.

### Other components
- LTE-M / NB-IoT nano Sim: We have used 1NCE global sim in our setup.
- Antenna: RP SMA Male type antennas that can be used for high frequency from 2.4GHz - 2.6GHz.
- SWD Connector: STLink V2 debugger for firmware flash.

### Setup
Connect GPS tracker to grove board and stack grove board on monoZero BG96 board. Connect SMA
antenna to main board and power on via USB-B cable.

![image](/images/samples/monoz/monoZero-06.png)

## Embedded application using monoZ SDK

monoZ SDK is a user-friendly tool that reduces user effort to build embedded application on monoZero HW. 
Download the working project file built using monoZ SDK from [our github](https://github.com/Meritech-monoZ/GPS_NEO6M) and edit as per your setup.

{% capture difference %}
**Note:**
<br>
Refer to [docs.monoz.io](https://docs.monoz.io) for STM32CubeIDE operations, CLI setup, SWD flashing.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

1.Open the project file in STM32CubeIDE.<br>
2.Go to Lib -> tool_gen -> MZ_GPSSensor and change the mqtt client config as per your setup.

![image](/images/samples/monoz/monoZero-07.png)

<br>
3.Go to Lib -> tool_gen -> MZ_modemconfig and change the apn settings as per your setup.

![image](/images/samples/monoz/monoZero-08.png)

<br>
4.Build the code and directly flashed to our board.

5.The expected CLI screen upon successful flashing.

![image](/images/samples/monoz/monoZero-09.png)

## Configuring Centra-IoT OSS / ThingsBoard platform

### Login to Cloud Platform

Get monoZ Cloud OSS instance or ThingsBoard instance and login to your
account.

![image](/images/samples/monoz/monoZero-10.png)

### Create device

Go to "Device group" and click "plus" button to add a new device.

![image](/images/samples/monoz/monoZero-11.png)

Enter device name, select existing or create a new [device profile](https://thingsboard.io/docs/user-guide/device-profiles/) and click on "Add" button.

![image](/images/samples/monoz/monoZero-12.png)

Your device has been added. Now click on "Shield" icon to manage credentials.

![image](/images/samples/monoz/monoZero-13.png)

Enter your **Client ID**, **Username** and **Password** and then click "Save". Now your device is ready to use. 
Make sure the same device details and credentials are provided in the MQTT settings of the Firmware.

![image](/images/samples/monoz/monoZero-14.png)

### Create dashboard to visualise telemetry data

Turn on monoZero and send telemetry data to cloud.
Open your device details in Centra-IoT OSS / ThingsBoard platform, **Latest telemetry** tab.
Select the **latitude** and **longitude** keys and click on "**Show on Widget**" button.

![image](/images/samples/monoz/monoZero-17.png)

Select the "**OpenStreetMap**" widget from the "**Maps**" widgets bundle. Click on "**Add to dashboard**" button.

![image](/images/samples/monoz/monoZero-18.png)

Select an existing [dashboard](https://thingsboard.io/docs/pe/user-guide/dashboards) if you have it or create a new one if you don't have an existing dashboard. Click on "Add" button to add widget to the dashboard.

![image](/images/samples/monoz/monoZero-19.png)

Go to dashboards in Centra-IoT OSS / ThingsBoard platform and open your dashboard. The telemetry data is visualized in the widget on the toolbar.

![image](/images/samples/monoz/monoZero-20.png)

## Contact Us

For other concerns about the integration, please [contact with monoZ](https://monoz.io).

## Next steps

{% assign currentGuide = "HardwareSamples" %}{% include templates/guides-banner.md %}
