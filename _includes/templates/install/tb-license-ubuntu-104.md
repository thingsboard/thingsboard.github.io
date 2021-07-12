1. Stop your ThingsBoard service
```bash
  sudo systemctl stop thingsboard
```
2. Delete license data file
```bash
    sudo rm -f /usr/share/thingsboard/bin/instance-license.data
```

3. On the [License portal](https://license.thingsboard.io/) locate and **deactivate** (**DO NOT DELETE** License KEY, just deactivate current active instance via the license portal to make license key free for usage)

4. Start ThingsBoard service again
```bash
  sudo systemctl start thingsboard
```