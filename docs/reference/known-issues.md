---
layout: docwithnav
assignees:
- ddiachenko
title: Known Issues and Recommendations
description: ThingsBoard known issues page

---

* TOC
{:toc}
  
## License-related issues

{% capture domain_owner_note %}
**Pay attention**

That for deployment of 2 or more TB-core/Rule Engine nodes, an additional separate License Key/instances inside the License Key -is required.
{% endcapture %}
{% include templates/info-banner.md content=domain_owner_note %}

<details>
<summary>
<b>INVALID_LICENSE_SECRET(101)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Invalid license key is used in /etc/thingsboard/conf/thingsboard.conf file.
<br>
<b>How to fix:</b> Re-check your license key at thingsboard.conf file and correct.
<br><br>
</details>

<details>
<summary>
<b>SUBSCRIPTION_NOT_FOUND(102)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Subscription not found at the License Server.
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a>.
<br><br>
</details>

<details>
<summary>
<b>SUBSCRIPTION_NOT_ACTIVE(103)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Subscription not active at the License Server.
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a>.
<br><br>
</details>

<details>
<summary>
<b>ACTIVE_INSTANCES_CAPACITY_EXCEEDED(104)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Active instances capacity exceeded for this particular license key.
<br>
<b>How to fix:</b>

{% capture contenttogglespecqueue %}
Ubuntu <small>(choose this if the ThingsBoard service is installed on Ubuntu server)</small>%,%inmemory%,%templates/install/tb-license-ubuntu-104.md%br%
Windows <small>(choose this if the ThingsBoard service is installed on Windows server)</small>%,%kafka%,%templates/install/tb-license-windows-104.md%br%
Docker <small>(choose this if the ThingsBoard service is installed on Docker)</small>%,%kafka-in-docker%,%templates/install/tb-license-docker-104.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}
</details>

<details>
<summary>
<b>INSTANCE_NOT_FOUND(105)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> ThingsBoard service has already generated a /usr/share/thingsboard/bin/instance-license.data file but the instanceId record is deleted from the License Server.
<br>
<b>How to fix:</b>

{% capture contenttogglespecqueue %}
Ubuntu <small>(choose this if the ThingsBoard service is installed on Ubuntu server)</small>%,%inmemory%,%templates/install/tb-license-ubuntu-105.md%br%
Windows <small>(choose this if the ThingsBoard service is installed on Windows server)</small>%,%kafka%,%templates/install/tb-license-windows-105.md%br%
Docker <small>(choose this if the ThingsBoard service is installed on Docker)</small>%,%kafka-in-docker%,%templates/install/tb-license-docker-105.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}
</details>

<details>
<summary>
<b>INVALID_LICENSE_CHECK_REQUEST(106)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Invalid license check request sent.
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a>.
<br><br>
</details>

<details>
<summary>
<b>INVALID_LICENSE_CHECK_SECRET(107)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Invalid license key is used in /etc/thingsboard/conf/thingsboard.conf file.
<br>
<b>How to fix:</b> Re-check your license key at thingsboard.conf file and correct <b>or</b>:

{% capture contenttogglespecqueue %}
Ubuntu <small>(choose this if the ThingsBoard service is installed on Ubuntu server)</small>%,%inmemory%,%templates/install/tb-license-ubuntu-104.md%br%
Windows <small>(choose this if the ThingsBoard service is installed on Windows server)</small>%,%kafka%,%templates/install/tb-license-windows-104.md%br%
Docker <small>(choose this if the ThingsBoard service is installed on Docker)</small>%,%kafka-in-docker%,%templates/install/tb-license-docker-104.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}
</details>

<details>
<summary>
<b>INSTANCE_NOT_ACTIVE(108)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> InstanceId record is deactivated at the License Server.
<br>
<b>How to fix:</b> Activate particular instanceId record at the <a href="https://license.thingsboard.io/">License portal</a><b> or</b>:

{% capture contenttogglespecqueue %}
Ubuntu <small>(choose this if the ThingsBoard service is installed on Ubuntu server)</small>%,%inmemory%,%templates/install/tb-license-ubuntu-104.md%br%
Windows <small>(choose this if the ThingsBoard service is installed on Windows server)</small>%,%kafka%,%templates/install/tb-license-windows-104.md%br%
Docker <small>(choose this if the ThingsBoard service is installed on Docker)</small>%,%kafka-in-docker%,%templates/install/tb-license-docker-104.md%br%{% endcapture %}
{% include content-toggle.html content-toggle-id="ubuntuThingsboardQueue" toggle-spec=contenttogglespecqueue %}
</details>

<details>
<summary>
<b>UNSUPPORTED_SOFTWARE_VERSION(109)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> The ThingsBoard service was upgraded to the version but the license/subscription is outdated.
<br>
<b>How to fix:</b> Need to restore previous version of the ThingsBoard service.
<br><br>
</details>

<details>
<summary>
<b>GENERAL_SERVER_ERROR(200)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Internal License Server error.
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a>.
<br><br>
</details>

<details>
<summary>
<b>GENERAL_ERROR(300)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
{% highlight bash %}
...
Caused by: java.nio.file.FileSystemException: instance-license.data: Too many open files
...
{% endhighlight %}
<b>Root cause:</b> Internal instance server error.
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a><b> or:</b>
<br>
<ol>
  <li>{% highlight bash %}
    sudo systemctl edit thingsboard
{% endhighlight %}
{% highlight bash %}
[Service]
LimitNOFILE=1617596
LimitNOFILESoft=1617596
{% endhighlight %}</li>
  <li>{% highlight bash %}
    sudo systemctl daemon-reload
{% endhighlight %}</li>
  <li>Delete license data file:
<br>
{% highlight bash %}
    sudo rm -f /usr/share/thingsboard/bin/instance-license.data
{% endhighlight %}</li>
  <li>On the <a href="https://license.thingsboard.io/">License portal</a> locate and <b>deactivate</b> (<b>DO NOT DELETE</b> License KEY, just deactivate current active instance via the license portal to make license key free for usage)</li>
  <li>Start ThingsBoard service again:
{% highlight bash %}
    sudo systemctl start thingsboard
{% endhighlight %}</li>
</ol> 
</details>

<details>
<summary>
<b>INVALID_SERVER_CERTIFICATE(350)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Internal License Server error.
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a>.
<br><br>
</details>

<details>
<summary>
<b>CONNECTION_ERROR(400)</b> click to expand
</summary>
<br>
<b>Issue:</b> The ThingsBoard service wasn't able to start.
<br>
<b>Root cause:</b> Connection related issues (network, firewall, etc. -problems).
<br>
<b>How to fix: </b> <a href="/docs/contact-us/">Contact support</a>.
<br><br>
</details>

## v3.2.1 (January 26, 2021)

### Rest api call rule node - not working after upgrade from 3.2.0PE to 3.2.1PE

**Issue:** REST API call rule node not working after upgrade.

**Root cause:** The Credentials field in the REST API call rule node was added in ThingsBoard v3.2.1 and there are "null" after upgrade.

**How to fix:** Need to set Credentials parameter in the REST API call rule node.

### “PRC_HOST” | “RPC_HOST”

**Issue:** Some integrations could be affected due to changing of the PRC_HOST variable in config files to RPC_HOST.

**Root cause:** PRC_HOST variable was changed to RPC_HOST.

**How to fix:** Need to edit "thingsboard.yml" change PRC_HOST name to RPC_HOST.

### Partition deleting (TTL)

**Issue:** TTL for time-series in Postgres

**Root cause:** Bug in base procedure of partition deleting.

**How to fix:** 

1. Stop the ThingsBoard service

2. Connect to your Postgres DB and execute next update [script](/docs/reference/resources/drop_partitions_by_max_ttl.sql).

3. Execute the script below:
```text
    DROP PROCEDURE IF EXISTS cleanup_timeseries_by_ttl (character varying, bigint, bigint);
```

4. Execute the last 3 scripts:
```text
    DROP FUNCTION IF EXISTS delete_asset_records_from_ts_kv(character varying, character varying, bigint);
    DROP FUNCTION IF EXISTS delete_device_records_from_ts_kv(character varying, character varying, bigint);
    DROP FUNCTION IF EXISTS delete_customer_records_from_ts_kv(character varying, character varying, bigint);
```

5. Start the ThingsBoard service



