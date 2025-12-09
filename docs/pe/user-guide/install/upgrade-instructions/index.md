---
layout: docwithnav-pe
title: Upgrade instructions
description: ThingsBoard PE IoT platform upgrade instructions
redirect_from: 
  - "/docs/user-guide/install/aws-marketplace-pe-upgrade/"
table-of-contents: "false"
active-menu-item-click: "true"

---

{% assign docsPrefix = "pe/" %}
{% include get-hosts-name.html docsPrefix=docsPrefix %}

<div id="upgrade-table">
  {% include upgrade-instructions-table.liquid %}
</div>

<div id="upgrade-links" class="upgrade-links">
  <p style="margin-bottom: 10px">Summary table of supported upgrade instructions for ThingsBoard Professional Edition. To upgrade from Community Edition to Professional Edition, use the <a href="/docs/pe/user-guide/install/upgrade-instructions/upgrade-from-ce">following instructions</a>.</p>
</div>

<p id="upgrade-links-old" style="margin-bottom: 10px">Upgrade instructions for <a href="/docs/pe/user-guide/install/upgrade-instructions/old-upgrade-instructions/">versions older than 3.0</a>.</p>

<script>
  (function () {
    var urlParams = new URLSearchParams(window.location.search);
    var hasVersionParam = urlParams.has('version');

    var table = document.getElementById('upgrade-table');
    var links = document.getElementById('upgrade-links');
    var oldLinks = document.getElementById('upgrade-links-old');
    if (!table || !links) return;

    if (!hasVersionParam) {
      table.parentNode.insertBefore(links, table);
    } else {
      oldLinks.style.display = 'none';  
      if (links.previousElementSibling !== table) {
        table.insertAdjacentElement('afterend', links);
        links.style.marginTop = "20px";
      }
    }
  })();
</script>
