By default, system is created with one admin user **sysadmin@thingsboard.org** with default password **sysadmin**.

In production, you should create a new admin user and delete the default one or change password for **sysadmin** user.

In this document all examples will use **curl** command to execute REST requests.

{% include templates/mqtt-broker/authentication.md %}

##### Get all users

```bash
curl --location --request GET 'http://localhost:8083/api/admin?pageSize=50&page=0' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}

Each user entity has a unique **id**. You can use that ID to _update_ or _delete_ users.

##### Create/update user

```bash
curl --location --request POST 'http://localhost:8083/api/admin' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id":$USER_ID,
    "email":"test@gmail.com",
    "password":"test",
    "firstName":"test",
    "lastName":"test"
}'
```
{: .copy-code}

If <i>$USER_ID</i> is empty (_null_), the new admin user will be created, otherwise the user with <i>$USER_ID</i> identifier will be updated.

##### Delete user

```bash
curl --location --request DELETE 'http://localhost:8083/api/admin/$USER_ID' \
--header 'X-Authorization: Bearer $ACCESS_TOKEN'
```
{: .copy-code}

Paste actual ID of the user you want to delete instead of <i>$USER_ID</i>.