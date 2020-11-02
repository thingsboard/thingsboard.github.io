---
layout: docwithnav
assignees:  
- vponoiko
title: Hardware Partner Guide

---


* TOC
{:toc}


## Preamble 

This guide is for the one who applied for the partner program already. 
You can refer for this link as for the overview of the benefits on the [partnership program](/partners/hardware). 

On the below you can find all the steps required to be proceeded and on how those proceed for the partnership to be achieved reasons. 


### General partner flow
  
![flow diagram](/images/user-guide/contribution/how-to-apply-for-partner/flow_diagram.png)  
  

### Preparations

First, please, make sure you have the account on the [GitHub](https://github.com/).

The second step is to have a fork of the [ThingsBoard site](https://github.com/thingsboard/thingsboard.github.io) for the GitHub account of yours. 
The third step - to clone the ThingsBoard site locally and proceed with the [instruction on how to deploy site locally](https://github.com/thingsboard/thingsboard.github.io).

[Github docs on how to fork a repository and clone it to the host](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo). 

Afters it is required to proceed with the update of the integration docs. For the integration template, please, use the next file: 
```
docs/samples/my_company_device_guides/integration_guide_1.md
```  
In order to create the integration guide, refer to the Integration Guide topic on below.

### Structure
The company logo should be included for the next path:
```
images/partners/
```
The company description and links for the integration guides should be set in the next file:
```
_includes/partners.json
```
The documentation for the device integration should be set in the next path:
```
docs/samples/my_company_device_guides/
```  
The images .png, .gif, .jpg should be included in the next path: 
```
images/samples/my_company_device_guides/integration_guide_1
```  
The dashboards and non-default rule chains as all the other attachments which are used in the integration guide should be included for the next path:
```
docs/samples/my_company_device_guides/integration_guide_1/resources
```  

Where the **my_company_device_guides** is the company name, the **integration_guide_1** is the guide name. 

### Partnership card 

The partership card is the one which is being presented on the [partners page](/partners/hardware/).

For the company of yours to be included for the partnership page, please, make sure to add those in the corresponding file:
```
_includes/partners.json
```

In the next format:
```
  {
    "type": "hardware",
    "program": "",
    "name": "My company name",
    "logo": "my_company_logo.png",
    "links": {
      "Site": {
        "href": "https://thingsboard.io",
        "target": "_blank"
      },
      "Integration guide 1": {
        "href": "/docs/samples/my_company_device_guides/integration_guide_1/"
      },
      "Integration guide 2": {
        "href": "/docs/samples/my_company_device_guides/integration_guide_2/"
      }
    },
    "blurb": "My Company description"
  },
```
The card should include:

* Logo
* Your company site link
* At least one integration guide link which should not forward for the external site
* Your company description

### Integration guide requirements 

The integration guide is the documentation which describes on how to use the device of yours with the ThingsBoard service, on how to connect it and provides a simple use case on how it can be used.   

In case if you have multiple integration guides for the devices of yours, you can create those in the same folder. 
The integration guide for the device should include: 

* Device hardware setup 
* Device Firmware version guide is based on
* Connectivity diagram 
* ThingsBoard configurations, in case if those are different from the default one, version the guide is based on
* Third-party application configuration, in case if it is being used for the connectivity purposes, version the guide is based on. The reference for the Third-party application documentation. 
* Device connectivity process 
* Rule Chains configurations, attached rule chains 
* Dashboard configurations, attached dashboards

For the template of those, you can refer to the [Integration guide template](/docs/samples/my_company_device_guides/integration_guide_1), 

Each page within ThingsBoard docs is represented with the file of the .md format. 
Each created file requires the layout to be set, as it is being used for the web page rendering reasons. 
So that, each newly created .md file should include the next header: 
```
---
layout: docwithnav
assignees:
- my_name
title: Hardware Partner Guide
---
```

### Validation

For the first validation on your side, please, fully restart the site and go for the [partners page](/partners/hardware/)
in order to make sure the **partnership card of yours is rendered correctly**.  
Also, check the links for the integration guide of yours,
to make sure those correctly are being referring for the integration guides of yours. 

Afters, check the guides of yours on whether those are being rendered correctly and make sure for those to satisfy the requirements 
which are described within the **Integration guide requirements** topic.

Finally, **create a separate branch** for the documentation you built on top and create the pull request for the official [thingsboard.io repository](https://github.com/thingsboard/thingsboard.github.io).

Make sure to contact the ThingsBoard Team regarding pull request of yours will be validated.  
You can contact the ThingsBoard Team using the [Contact us form](/docs/contact-us/).  


{% include templates/feedback.md %}

{% include socials.html %}


