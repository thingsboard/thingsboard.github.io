---
layout: docwithnav
title: OAuth 2.0 Support
description: OAuth 2.0 Support

---

* TOC
{:toc}

## Overview
ThingsBoard allows you to provide Single Sign On functionality for your customers and automatically create tenants, customers or subcustomers using external user management platforms, that supports OAuth 2.0 protocol.  
This guide is only for the Google OAuth 
## Scenario description

In this guide we will configure the OAuth with the [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect) for the authentication. 
User is going to be logged into the Tenant and Tenant name is going to be equal to the users email.
If Tenant does not exist in the system, the new Tenant will be created.

To map those external user infos from Google and Auth0 platform we are going to use built-in [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper). 

If [basic mapper](/docs/user-guide/oauth-2-support/#basic-mapper) functionality will not fit your business needs, you can configure the [custom mapper](/docs/user-guide/oauth-2-support/#custom-mapper)  so that you are able to add an implementation that fits under your specific needs.

## Login with the Google

To apply the configurations properly, we need to obtain the clientName,  clientId and clientSecret first. For this reasons we first go for the [Google Developer Consnole](https://console.developers.google.com/).  
First we need to go for the credentials tab. 

![image](/images/user-guide/oauth-2-support/google/google-console-to-credentials.png)

Then we need to create the OAuth client ID 
 