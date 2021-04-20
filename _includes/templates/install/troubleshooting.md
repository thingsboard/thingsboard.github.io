ThingsBoard logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```
{: .copy-code}

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```
{: .copy-code}