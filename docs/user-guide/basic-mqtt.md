---
layout: docwithnav
assignees:
- vsosliuk
title: Basic MQTT authentication
description: ThingsBoard MQTT based authentication.
options:
    0:
        image: /images/user-guide/basic-mqtt/client-id.png  
        title: 'MQTT Clients will be able to connect with any username or password if they specify correct Client ID.'    
    1:
        image: /images/user-guide/basic-mqtt/username-password.png  
        title: 'MQTT Clients will be able to connect with any client ID if they specify correct Username and Password.'
    2:
        image: /images/user-guide/basic-mqtt/no-password-check.png  
        title: 'Password is optional'
    3:
        image: /images/user-guide/basic-mqtt/client-id-username-password.png  
        title: 'MQTT Clients will be able to connect if they specify correct combination of Client ID, Username and Password'    
---


MQTT Based Authentication is available for devices that connect using MQTT. Once the device is created in ThingsBoard, the default access token is generated. 
You may change the credential type if your device profile is configured to use [mqtt transport type](/docs/user-guide/device-profiles/#transport-configuration).
In order to connect the device to a server using Basic MQTT credentials, the client must specify the client id and/or username and password. 

There are three options available:

* Authentication based on Client ID only. For this purpose, you should populate only Client ID in the credentials form below. 
MQTT Clients will be able to connect with any username or password if they specify correct Client ID;

* Authentication based on Username and Password. For this purpose, you should populate only Username and Password in the credentials form below. 
MQTT Clients will be able to connect with any client ID if they specify correct Username and Password. Password is optional;

* Authentication based on Client ID, Username and Password. For this option, you should populate Client ID, Username and Password.
MQTT Clients will be able to connect if they specify correct combination of Client ID, Username and Password; 

{% include images-gallery.html imageCollection="options" showListImageTitles="true" %}