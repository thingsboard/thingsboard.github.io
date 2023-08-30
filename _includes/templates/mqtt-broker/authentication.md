##### Authentication

To carry out administrative operations with the broker, it is imperative to log into the system and obtain an Access Token. 
This Access Token is essential for authenticating and authorizing your administrative actions.

To acquire the Access Token, you can execute the following command:

```bash
curl --location --request POST 'http://localhost:8083/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"sysadmin@thingsboard.org",
    "password":"sysadmin"
}'
```
{: .copy-code}

**Please be aware** that if the broker is installed on a remote server, you must substitute "localhost" in the provided command with either 
the public IP address of the server or a designated domain name. 
Moreover, ensure that port 8083 is accessible publicly to establish the necessary connection.
Additionally, remember to replace the "username" and "password" values in the command with the appropriate and valid credentials specific to your setup.

Upon successful authorization, the response will include a valuable piece of information known as the **token**. 
It is crucial to utilize this token for all subsequent administrative requests to TBMQ.
To streamline the process, you can either assign the value of the token field to an environment variable named <i>ACCESS_TOKEN</i> 
or directly replace occurrences of the <i>$ACCESS_TOKEN</i> string within the requests outlined in this tutorial.

```bash
export ACCESS_TOKEN=PLACE_YOUR_TOKEN_HERE
```
{: .copy-code}
