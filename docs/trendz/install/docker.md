---
layout: docwithnav-trendz
assignees:
  - ashvayka
title: Installing ThingsBoard Trendz Analytics using Docker (Linux or Mac OS)
description: Installing ThingsBoard Trendz Analytics using Docker (Linux or Mac OS)

trendz-settings:
  0:
    image: /images/trendz/install/sync/trendz-settings-1.png
    title: "Log in to <b>ThingsBoard</b> as a <b>Sysadmin</b>."
  1:
    image: /images/trendz/install/sync/trendz-settings-2.png
    title: "Open the <b>Trendz Settings</b> page."
  2:
    image: /images/trendz/install/sync/trendz-settings-3.png
    title: "If you see the message <b>\"Synchronization completed successfully\"</b>, the synchronization has been completed automatically and no further action is required."
trendz-sync:
  0:
    image: /images/trendz/install/sync/trendz-sync-1.png
    title: "If you see an error message, follow these steps."
  1:
    image: /images/trendz/install/sync/trendz-sync-2.png
    title: "Enter the correct <b>Trendz internal URL</b> and <b>ThingsBoard internal URL</b>."
  2:
    image: /images/trendz/install/sync/trendz-sync-3.png
    title: "Click <b>Save configuration</b>."
  3:
    image: /images/trendz/install/sync/trendz-sync-4.png
    title: "Click <b>Retry discovery</b>."
  4:
    image: /images/trendz/install/sync/trendz-sync-5.png
    title: "Once the message <b>\"Synchronization completed successfully\"</b> appears, the synchronization is complete."

---

* TOC
{:toc}


This guide will help you to install and start Trendz Analytics using Docker on Linux or Mac OS.

## Prerequisites

{% include templates/trendz/install/docker-requirements-linux.md %}
{% include templates/trendz/install/thingsboard-requirements.md %}

## Installation Steps

### Step 1. Docker Compose setup

Trendz can be run either in the same Docker Compose file as ThingsBoard or in a separate Docker Compose file.

For small and medium installations, we recommend installing Trendz in the same Docker Compose file as ThingsBoard.

{% capture contenttogglespec %}
The same Docker Compose file with ThingsBoard%,%theSameFile%,%templates/trendz/install/docker-compose-the-same-file-linux.md%br%
Separate Docker Compose file%,%separateFile%,%templates/trendz/install/docker-compose-separate-file-linux.md{% endcapture %}
{% include content-toggle.liquid content-toggle-id="runOption" toggle-spec=contenttogglespec %}

### Step 2. Start Trendz service

{% include templates/trendz/install/docker-start-trendz-service.md %}

### Step 3. Sync ThingsBoard With Trendz

{% include templates/trendz/install/sync-with-tb.md %}

## Authentication

{% include templates/trendz/install/authentication.md %}

## Detaching, stop and start commands

{% include templates/trendz/install/docker-detach-stop-start-commands.md %}

## Upgrade Trendz Service

{% capture upgrade_version_by_version%}
**Note, that you can upgrade Trendz from any version to the latest at once (for example, 1.2.0 -> {{ site.release.trendz_ver }} ,etc).**
{% endcapture %}
{% include templates/info-banner.md content=upgrade_version_by_version %}

Below is an example of how to upgrade from any Trendz version to {{ site.release.trendz_ver }}

* Create a dump of your database:

```bash
docker compose exec trendz-postgres sh -c "pg_dump -U postgres trendz > /var/lib/postgresql/data/trendz_dump"
```
{: .copy-code}

When a new Trendz release is available, follow these steps to update your installation without losing data:

{% capture old_manifests_info %}
**If you are upgrading using previous version of deployment files, make sure to follow steps described in this [instruction](/docs/trendz/install/old-docker-migrate/) first.**
{% endcapture %}
{% include templates/warn-banner.md content=old_manifests_info %}

1. Change the version of the `thingsboard/trendz` and `thingsboard/trendz-python-executor` in the `docker-compose.yml` file to the {{ site.release.trendz_ver }}.

2. Execute the following commands:

```bash
docker pull thingsboard/trendz:{{ site.release.trendz_ver }}
docker compose stop trendz
docker compose run --rm -e UPGRADE_TRENDZ=true trendz
docker compose up -d
```
{: .copy-code}

## Troubleshooting

### DNS issues

{% include templates/troubleshooting/dns-issues.md %}

## Next steps

{% assign currentGuide = "InstallationOptions" %}{% include templates/trndz-guides-banner.md %}