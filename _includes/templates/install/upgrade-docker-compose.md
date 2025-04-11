## Upgrading

If you update your volumes, or merge your deploy files with GitHub repository files, do not forget to inspect your host volumes - like log folders or etc - using provided check and (if needed) create scripts - they are explained [at the beginning of "Running" step](#create-and-check-required-host-volumes).

In case when database upgrade is needed, edit .env file to set "TB_VERSION" to target version (e.g. set it to {{ site.release.ce_full_ver }} if you are upgrading to the latest). Then, execute the following commands:

```bash
./docker-stop-services.sh
./docker-upgrade-tb.sh --fromVersion=[FROM_VERSION]
./docker-start-services.sh
```
{: .copy-code}

Where `FROM_VERSION` - from which version upgrade should be started. See [Upgrade Instructions](/docs/user-guide/install/{{docsPrefix}}upgrade-instructions) for valid `fromVersion` values. Note, that you have to upgrade versions one by one (for example 3.6.1 -> 3.6.2 -> 3.6.3 etc). 