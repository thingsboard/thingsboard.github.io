Run following commands, before starting docker container(s), to create folders for storing data and logs.
These commands additionally will change owner of newly created folders to docker container user.
To do this (to change user) **chown** command is used, and this command requires *sudo* permissions (command will request password for a *sudo* access):

```
mkdir -p ~/.mytb-edge-data && sudo chown -R 799:799 ~/.mytb-edge-data
mkdir -p ~/.mytb-edge-logs && sudo chown -R 799:799 ~/.mytb-edge-logs
```
{: .copy-code}

**NOTE**: Replace directory **~/.mytb-edge-data** and **~/.mytb-edge-logs** with directories you’re planning to use in `docker-compose.yml`.