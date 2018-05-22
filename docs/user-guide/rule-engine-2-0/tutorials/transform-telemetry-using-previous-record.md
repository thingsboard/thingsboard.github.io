---
layout: docwithnav
title: Transform telemetry using previous record
description: Transform telemetry using previous record

---

* TOC
{:toc}

## Use case

Let's assume your device is reporting absolute "counter" that correspond to water consumption. 
However, you would like to visualize not the "absolute" but "delta" values, e.g. how many water was consumer within last day, week, month.   

In this tutorial we will calculate "delta" of the counter readings based on current and previous reading.

Assuming that previous reported value of counter was 90, we will transform incoming telemetry:

```json
{
  "counter": 100
}
```

to

```json
{
  "counter": 100,
  "delta": 10
}
```

## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).

## Step 1: Adding enrichment node

## Step 2: Adding transformation node

## TL;DR

Download and import attached json [**file**](/docs/user-guide/resources/transformation-using-previous-rule-chain.json) with a rule chain from this tutorial. Don't forget to mark new rule chain as "root".

![image](/images/user-guide/rule-engine-2-0/tutorials/make-root.png)

 






