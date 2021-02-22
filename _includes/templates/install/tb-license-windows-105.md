Open PowerShell as Administrator

1. Stop your ThingsBoard service
```shell
    Stop-Service thingsboard
```

2. Delete "instance-license.data" file from path "C:\Program Files (x86)\thingsboard\"

3. Start ThingsBoard service again
```shell
    Start-Service thingsboard
```