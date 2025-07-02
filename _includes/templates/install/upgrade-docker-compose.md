## Upgrading

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
If you are upgrading from Community Edition - you must specify <code style="color:black">"--fromVersion"</code> flag:

`./docker-upgrade-tb.sh --fromVersion=CE`

<code style="color:black">"--fromVersion"</code> flag is also required for earlier upgrade versions (prior to 3.9.1), for example:

`# upgrading to v3.9.0...`<br>
`./docker-upgrade-tb.sh --fromVersion=3.8.1`

See [Upgrade Instructions](/docs/user-guide/install/{{docsPrefix}}upgrade-instructions) for valid <code style="color:black">"fromVersion"</code> values.
{% endcapture %}
{% include templates/info-banner.md content=from-version-note %}