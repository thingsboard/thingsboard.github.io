---
layout: docwithnav
title: API Limits
description: Configuring API Limits

---

API Limits feature allows controlling API usage, by limiting number of requests from single host during single time unit (Minutes, Hours, etc.) 

API limits are **disabled by default**.

After enabling this feature, for each host, Thingsboard will count incoming requests. 
After requests limit is reached for the current interval for the host, Thingsboard will not accept incoming requests from this host. 
Responce depends on the type of the transport layer:
- **HTTP/HTTPS** - http status code 509 (Bandwidth Limit Exceeded) 
- **MQTT** - disconnect
- **CoAP** - responce code 128 (Bad request)  

### White/Black List
It is possible to configure different policy lists for API Limits: 
- **white-list** - all requests from hosts that are on this list will not be counted
- **black-list** - all requests from hosts that are on this list will be discarded 

### General configuration
System administrator is able to configure Api Limits using [thingsboard.yml](/docs/user-guide/install/config/). You can find sample configuration below:

```yaml
quota:
  host:
    # Max allowed number of API requests in interval for single host
    limit: "${QUOTA_HOST_LIMIT:10000}"
    # Interval duration
    intervalMs: "${QUOTA_HOST_INTERVAL_MS:60000}"
    # Maximum silence duration for host after which Host removed from QuotaService. Must be bigger than intervalMs
    ttlMs: "${QUOTA_HOST_TTL_MS:60000}"
    # Interval for scheduled task that cleans expired records. TTL is used for expiring
    cleanPeriodMs: "${QUOTA_HOST_CLEAN_PERIOD_MS:300000}"
    # Enable Host API Limits
    enabled: "${QUOTA_HOST_ENABLED:true}"
    # Array of whitelist hosts
    whitelist: "${QUOTA_HOST_WHITELIST:localhost,127.0.0.1}"
    # Array of blacklist hosts
    blacklist: "${QUOTA_HOST_BLACKLIST:eveldomain.com}"
  log:
    topSize: 10
    intervalMin: 2
```

This configuration sample enables API Limiting and accepts only 10000 requests from one host during 60 seconds.
Other requests from same host in this time interval would be rejected. 

- Requests from localhost and from 127.0.0.1 are not limited.
- All requests from eveldomain.com are rejected.