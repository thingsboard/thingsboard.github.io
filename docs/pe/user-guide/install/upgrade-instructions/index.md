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
  <p style="margin-bottom: 10px"><a href="/docs/user-guide/install/pe/upgrade-instructions/upgrade-from-ce">ThingsBoard instructions</a> for upgrading from Community Edition.</p>
</div>


Upgrade instructions for the [older versions](/docs/pe/user-guide/install/upgrade-instructions/old-upgrade-instructions/).

<script>
  (function () {
    var urlParams = new URLSearchParams(window.location.search);
    var hasVersionParam = urlParams.has('version');

    var table = document.getElementById('upgrade-table');
    var links = document.getElementById('upgrade-links');
    if (!table || !links) return;

    if (!hasVersionParam) {
      table.parentNode.insertBefore(links, table);
    } else {
      if (links.previousElementSibling !== table) {
        table.insertAdjacentElement('afterend', links);
        links.style.marginTop = "20px";
      }
    }
  })();
</script>
