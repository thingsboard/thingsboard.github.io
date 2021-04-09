View last logs in runtime:
 
```bash
tail -f /var/log/thingsboard/thingsboard.log
```

You can use <b>grep</b> command to show only the output with desired string in it. 
For example you can use the following command in order to check if there are any errors on the backend side:

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```