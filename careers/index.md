---
layout: careers
title: Careers
notitle: "true"
description: ThingsBoard Careers
---

# Careers
## We search smart and communicable workers for <b>full-time in the Kyiv</b> office — Be one of us.

<hr>
<div id="carsGrid">
{% for career in site.careers %}
  <a class="cars-box" href="{{ career.url }}">
  <div><h3>{{ career.position }}</h3>
  <h5>{{ career.tag }}</h5></div>
  <h5 class="secondPriority">{{ career.location }}</h5>
  </a>
{% endfor %}
</div>

<div id="technology">
<img src="/images/careers/angular.svg">
<img src="/images/careers/spring.svg">
<img src="/images/careers/java.svg">
<img src="/images/careers/typescript.svg">
<img src="/images/careers/kafka.svg">
<img src="/images/careers/redis.svg">
<img src="/images/careers/cassandra.svg">
<img src="/images/careers/postgresql.svg">
<img src="/images/careers/docker.svg">
<img src="/images/careers/kubernets.svg">
<img src="/images/careers/github.svg">
<img src="/images/careers/aws.svg">
<img src="/images/careers/azure.svg">
<img src="/images/careers/google-cloud.svg">
</div>

<div id="about">
<p class="title">About Us:</p>
<h5>ThingsBoard, Inc. is a US corporation founded in 2016 with RnD center in Kyiv, Ukraine. We are main contributor and maintainer of ThingsBoard open-source IoT Platform.<br>
<br>We deliver and constantly improve scalable, robust and affordable IoT Platform that dramatically reduces time-to-market for life-changing IoT solutions. We also help companies to deliver great IoT products based on ThingsBoard.</h5>
</div>
