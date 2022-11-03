##### Authentication

To perform administrative operations with the broker you need to log into the system and get Access Token.
You can get it using <b>curl</b> command:

```bash
curl --location --request POST 'http://localhost:8083/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"sysadmin@thingsboard.org",
    "password":"sysadmin"
}'
```
{: .copy-code}

**Note**:  If Broker installed on a remote server, you have to replace localhost with the public IP address of the server or with a domain name. Also, check that port 8083 opened for public access.
**Note**:  In production you should create new admin user with a unique password.
