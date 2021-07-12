1. Stop your ThingsBoard service
```bash
    sudo systemctl stop thingsboard
```

2. Delete license data file
```bash
    sudo rm -f /usr/share/thingsboard/bin/instance-license.data
```

3. Start ThingsBoard service again
```bash
    sudo systemctl start thingsboard
```