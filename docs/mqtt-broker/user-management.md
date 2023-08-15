---
layout: docwithnav-mqtt-broker
title: User Management
description: User Management Guide

---

* TOC
{:toc}

By default, the system is initially established with a singular admin user, with username **sysadmin@thingsboard.org** and password **sysadmin**.

However, when operating in a production environment, it is strongly advised to create a new admin user, either remove the default user entirely 
or modify the password associated with the aforementioned user.

Throughout this documentation, all provided examples will employ the **curl** command to execute REST requests, thus showcasing practical implementations of the API interactions.

{% include templates/mqtt-broker/authentication.md %}

##### Get all users

```bash
curl --location --request GET "http://localhost:8083/api/admin?pageSize=50&page=0" \
--header "X-Authorization: Bearer $ACCESS_TOKEN"
```
{: .copy-code}

Within the system, every user entity possesses a distinct and unique identifier known as the **id**. 
This id serves as a reference point and can be utilized to perform operations such as _updating_ or _deleting_ users.

##### Create/update user

```bash
curl --location --request POST 'http://localhost:8083/api/admin' \
--header "X-Authorization: Bearer $ACCESS_TOKEN" \
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

If _$USER_ID_ is _null_ or _id_ field is absent in the request body, the new admin user will be created, otherwise the user with _$USER_ID_ identifier will be updated.

##### Delete user

```bash
curl --location --request DELETE 'http://localhost:8083/api/admin/$USER_ID' \
--header "X-Authorization: Bearer $ACCESS_TOKEN"
```
{: .copy-code}

Paste actual ID of the user you want to delete instead of _$USER_ID_.
