* TOC
{:toc}

## Overview

To redirect HTTP to HTTPS, you first need to make sure you have [configured HAProxy](/docs/{{docsPrefix}}user-guide/install/pe/add-haproxy-ubuntu/#step-5-configure-haproxy-load-balancer). 
</b>

## Redirection

After configuration, follow the steps to force HTTPS:

```
sudo nano /etc/default/haproxy
```
{: .copy-code}

Next, add the following line:

```
FORCE_HTTPS_REDIRECT=true
```
{: .copy-code}

Then refresh the HAProxy:

```
sudo haproxy-refresh
```
{: .copy-code}