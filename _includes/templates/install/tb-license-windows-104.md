Open PowerShell as Administrator

1. Stop your ThingsBoard service
```shell
    Stop-Service thingsboard
```

2. Delete "instance-license.data" file from path "C:\Program Files (x86)\thingsboard\"

3. On the [License portal](https://license.thingsboard.io/) locate and **deactivate** (**DO NOT DELETE** License KEY, just deactivate current active instance via the license portal to make license key free for usage)

4. Start ThingsBoard service again
```shell
  Start-Service thingsboard
```