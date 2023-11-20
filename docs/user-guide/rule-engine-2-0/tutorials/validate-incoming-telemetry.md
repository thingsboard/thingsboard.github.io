---
layout: docwithnav
title: Validate incoming telemetry
description: Validate incoming telemetry
---

* TOC
{:toc}

## Use case

Let's assume your device is using DHT22 sensor to collect and push temperature readings to ThingsBoard.
DHT22 sensor is good for -40 to 80°C temperature readings.

In this tutorial we will configure ThingsBoard Rule Engine to store all temperature within -40 to 80°C range and will discard all other readings.
Although this scenario is fictional, you will learn how to define JS functions to validate incoming data and use this knowledge in real-life applications.

## Prerequisites

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Step 1: Adding temperature validation node

We will modify default rule chain and will add [**filter**](/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node) rule node with temperature validation script.
We will place this rule node between default "message type switch" and "save timeseries" rule nodes.
Please note that we have removed irrelevant rule nodes from the root rule chain as well.

![image](/images/user-guide/rule-engine-2-0/tutorials/validation/rule-chain.png)

Let's assume the data that arrive to a system may or may not have the "temperature" field.
We will treat all data that does not have "temperature" field as valid. In order to do this we will use the following function

```javascript
return typeof msg.temperature === 'undefined' || (msg.temperature >= -40 && msg.temperature <= 80);
```

## Step 2: Validation script debugging

Let's check that our script is correct by using built-in "Test filter function" button

![image](/images/user-guide/rule-engine-2-0/tutorials/validation/node-config.png)

![image](/images/user-guide/rule-engine-2-0/tutorials/validation/test-function.png)

You can check few more cases when temperature is not set or it exceeded the specified thresholds.

## TL;DR

Download and import attached json [**file**](/docs/user-guide/resources/validation-rule-chain.json) with a rule chain from this tutorial. Don't forget to mark new rule chain as "root".

![image](/images/user-guide/rule-engine-2-0/tutorials/make-root.png)

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}
