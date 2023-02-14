## Introduction

![OrangePI](/images/devices-library/orangepizero.png){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
Orange Pi Zero is for anyone who wants to start creating with technology- not just consuming it. It's a simple, fun, 
useful tool that you can use to start taking control of the world around you. 
Orange Pi Zero is an open-source single-board computer. It is highly compact with a dimension of 48X46mm. It can run 
Android 4.4, Ubuntu, Debian. Orange Pi Zero uses the AllWinner H2 SoC, and has 256MB/512MB DDR3 SDRAM(256MB version is 
Standard version), it integrates TF card, 100 Ethernet network, USB 2.0, 26Pin headers, etc. lt is powered through USB OTG. 

In this guide we will show how to connect the minicomputer OrangePI with ThingsBoard, starting from creating a device on
ThingsBoard, installing all required libraries and tools, connecting Orange PI to ThingsBoard, checking data receiving 
and using shared attributes and RPCs.

## Requirements:

As an example we will use the following hardware and software:

- OrangePI;
- ThingsBoard Cloud;
- python ≥ 3.7;
- tb-mqtt-client library;
- board library;
- digitalio library.

## Create device on ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-create-device-block.md %}

## Install required libraries and tools

{% include /docs/devices-library/blocks/minicomputers/orangepi/install-required-libraries-and-tools-block.md %}

## Connect device to ThingsBoard

{% include /docs/devices-library/blocks/basic/thingsboard-provide-device-access-token-block.md %}
{% include /docs/devices-library/blocks/minicomputers/general-code-to-program-block.md %}

## Check data on ThingsBoard

{% include /docs/devices-library/blocks/minicomputers/check-data-on-thingsboard-block.md %}

## Update the interval of blinking led using shared attributes

{% include /docs/devices-library/blocks/minicomputers/update-shared-attributes-block.md %}

## Immediately getting telemetry using RPC

{% include /docs/devices-library/blocks/minicomputers/using-rpc-block.md %}



Thanks for your interest in the ThingsBoard platform and for reading this guide!