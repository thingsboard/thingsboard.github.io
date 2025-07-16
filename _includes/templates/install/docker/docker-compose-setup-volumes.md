Execute the following command to create log folders for the services and chown of these folders to the docker container users.
To be able to change user, **chown** command is used, which requires sudo permissions (script will request password for a sudo access):
{% capture docker-desktop-osx-warning %}
For Docker Desktop users on MacOS, that utilize [Synchronized file shares feature](https://docs.docker.com/desktop/features/synchronized-file-sharing/) (enabled by default for `/Users` subdirectories):

Please note that you need to omit changing host volume ownership, since it is resolved automatically by virtualization engine.

Use `--skipChown` flag for both create and check scripts:

`./docker-create-log-folders.sh --skipChown`

`./docker-check-log-folders.sh --skipChown`
{% endcapture %}
{% include templates/warn-banner.md content=docker-desktop-osx-warning %}
```bash
./docker-create-log-folders.sh
```
{: .copy-code}

In order to check if all required volume folders are available and have correct ownership:
```bash
./docker-check-log-folders.sh
```
{: .copy-code}