---
layout: docwithnav
title: Thingsboard Data Collection Performance

---

* TOC
{:toc}

One of the key features of Thingsboard open-source IoT Platform is data collection and this is crucial feature that must work reliable under high load. 
In this article we are going to describe steps and improvements that we have made to ensure that single instance of Thingsboard server 
can constantly handle **10,000+** devices and **30,000+** MQTT publish messages per second, 
which in summary gives us around **2 million published messages per minute**.

## High level overview

 ![image](/images/reference/architecture-in-brief.png)
