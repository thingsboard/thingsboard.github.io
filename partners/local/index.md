---
layout: integrators
title: Local partners
notitle: "true"
description: ThingsBoard local partners
---

# ThingsBoard local partners

<object id="map" width="100%" data="/images/partners/map-of-distributors.svg"></object>

<div id="distributors">Find our local re-seller</div>

<div id="integratorsGrid">
<div id="filterContainer">
Finder
<form class="form" action= "" name="filter">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<p><select class="dropSelector" id="region" name="region">
<option value="0" selected="true" disabled="disabled">-- Region --</option>
<option id="Africa" value="1">Africa</option>
<option id="Asia" value="2">Asia</option>
<option id="Australia and Oceania" value="3">Australia and Oceania</option>
<option id="Europe" value="4">Europe</option>
<option id="Middle East" value="5">Middle East</option>
<option id="North America" value="6">North America</option>
<option id="South America" value="7">South America</option>
<option value="8">Worldwide</option>
</select></p>
<p><select class="dropSelector" id="country" name="country" disabled="disabled">
<option id="-- Country --">-- Country --</option>
</select></p>
<p><input class="buttonSearch" id="Search" type="button" value="FIND" onClick="PushIndex(this.form)" disabled="disabled"></p>
</form>
</div>
<div id="integratorsContainer"></div>
</div>

<style>
	{% include integrators.css %}
</style>

<script>
	{% include integrators.js
        containerId="integratorsContainer" %}
</script>
<script>
	window.onload = Empty();
</script>