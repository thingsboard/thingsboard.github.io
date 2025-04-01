---
layout: use-case
title: IoT Use Cases
description: ThingsBoard IoT Platform use cases
notitle: "true"

---

<div class="filter">
    <div class="filter-content">
        <div class="actions">
            <div onclick="actions('main')" class="check-box main checked">All</div>
            <div onclick="actions('general')" class="check-box general">General</div>
            <div onclick="actions('scada')" class="check-box scada">SCADA</div>
        </div>
    </div>
</div>

<div id="usecase-list"></div>

<style>
	{% include partner-style.css %}
</style>

<script>
    	{% include partner-script.js type="iot-use-cases"
        containerId="usecase-list" content="iot-use-cases" %}
</script>

<script>
	window.onload = rengen();
</script>

