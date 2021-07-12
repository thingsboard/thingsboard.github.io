1. Locate thingsboard container with ‘docker ps’ ('mytb' is the name of your container in the default installation)

2. Connect to container console

```bash
$docker exec -it 09625616dba4 bash
```

3. Delete license data file

```bash
root@09625616dba4:/# rm -f /usr/share/thingsboard/bin/instance-license.data
```

Then detach from container console

4. On the [License portal](https://license.thingsboard.io/) locate and **deactivate** (**DO NOT DELETE** License KEY, just deactivate current active instance via the license portal to make license key free for usage)

5. Restart container

```bash
$ docker restart mytb
```