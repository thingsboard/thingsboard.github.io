---
layout: docwithnav
assignees:
- ashvayka
title: Upgrade instructions
description: ThingsBoard IoT platform upgrade instructions
table-of-contents: "false"
active-menu-item-click: "true"

---

{% include get-hosts-name.html docsPrefix=docsPrefix %}

<div id="upgrade-table">
  {% include upgrade-instructions-table.liquid %}
</div>

<p id="upgrade-links-old" style="margin-bottom: 10px">Upgrade instructions for <a href="/docs/user-guide/install/upgrade-instructions/old-upgrade-instructions/">versions older than 3.0</a>.</p>

<script>
  (function () {
    var urlParams = new URLSearchParams(window.location.search);
    var hasVersionParam = urlParams.has('version');

    var oldLinks = document.getElementById('upgrade-links-old');

    if (hasVersionParam) {
      oldLinks.style.display = 'none';  
    } 
  })();
</script>