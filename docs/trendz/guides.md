---
layout: docwithnav-trendz
assignees:
  - vparomskiy
title: Trendz Analytics guides
description: Trendz Analytics guides and tutorials
---
{% assign guides = site.data.trendz.guides-list %}
<div class="guides">
    <p>Explore our collection of step-by-step guides on implementing various IoT use cases with a focus on data analytics. Learn how to leverage Trendz Analytics to extract insights, optimize operations, and drive informed decision-making. Discover practical solutions for predictive maintenance, energy management, occupancy tracking, anomaly detection, and more.</p>
    {% for guide in guides %}
    <div class="guides-block">
        <div class="guides-title-panel">
            <div class="guides-text">
                <p class="guides-title">
                    {{ guide.title }}
                </p>
                <p class="guides-subtitle">
                    {{ guide.subtitle }}
                </p>
            </div>
        </div>
        <ul class="guides-list">
            {% assign items = guide.section %}
            {% for item in items %}
            <li class="guide-container wide">
                <a href="{{ item.path }}">
                    <div class="guide-text">
                        <p class="guide-title">
                            {{ item.title }}
                        </p>
                        <p class="guide-subtitle">
                            {{ item.subtitle }}
                        </p>
                        <p class="guide-keywords">
                            {{ item.keywords }}
                        </p>
                    </div>
                </a>
            </li>
            {% endfor %}
        </ul>
    </div>
    {% endfor %}
</div>