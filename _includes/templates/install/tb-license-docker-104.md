1. Locate directory with the docker-compose file for ThingsBoard.

2. Go to directory mytbpe-data

3. Delete file instance-license.data
```bash
    sudo rm -f instance-license.data
```

4. On the [License portal](https://license.thingsboard.io/) locate and **deactivate** (**DO NOT DELETE** License KEY, just deactivate current active instance via the license portal to make license key free for usage)

5. Restart container
```bash
  $ docker restart mytb
```