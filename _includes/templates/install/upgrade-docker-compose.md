If you update your volumes, or merge your deploy files with GitHub repository files, do not forget to inspect your host volumes - like log folders or etc - using provided check and (if needed) create scripts - they are explained [at the beginning of "Running" step](#create-and-check-required-host-volumes).

In case when database upgrade is needed, edit .env file to set "TB_VERSION" to target version (e.g. set it to {{ site.release.ce_full_ver }} if you are upgrading to the latest). Then, execute the following commands:

```bash
./docker-stop-services.sh
./docker-upgrade-tb.sh
./docker-start-services.sh
```
{: .copy-code}

Note, that you have to upgrade versions one by one (for example 4.0.0 -> 4.0.1 -> 4.1.0 etc).

{% capture from-version-note %}
<code style="color:black">"--fromVersion"</code> flag is required for earlier upgrade versions (prior to 3.9.1), for example:

`# upgrading to v3.9.0...`<br>
`./docker-upgrade-tb.sh --fromVersion=3.8.1`

See [Upgrade Instructions](/docs/user-guide/install/{{docsPrefix}}upgrade-instructions) for valid <code style="color:black">"fromVersion"</code> values.
{% endcapture %}
{% include templates/info-banner.md content=from-version-note %}

### Migration to Professional Edition

You can also migrate from Community Edition (CE) to Professional Edition (PE) using `docker-upgrade-tb.sh` script:

1. Upgrade to the latest CE version.
2. Merge your configuration with [the latest PE Docker Compose scripts](https://github.com/thingsboard/thingsboard-pe-docker-compose/tree/release-{{ site.release.ce_ver }}). Do not forget to [configure the license key](/docs/user-guide/install/pe/cluster/docker-compose-setup/#step-3-obtain-your-license-key).
3. Run the following upgrade script to migrate database data from CE to PE:
```bash
./docker-upgrade-tb.sh --fromVersion=CE
```