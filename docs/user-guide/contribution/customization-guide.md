---
layout: docwithnav
title: Create custom Rule nodes
description: Create custom Rule nodes

---

* TOC
{:toc}

## Overview

In this tutorial, you will learn how to create your own custom nodes, namely:

 - Filter node that will check whether the **key** from telemetry data of the inbound message exists. If the selected key exists - send Message via **True** chain, otherwise **False** chain is used.
 
 ![image](/images/user-guide/contribution/customization/check-key-node.png)
 
 - Enrichment node that will calculate Sum of the telemetry data, which fields begin with the specified **Input Key** and add the result into Message Metadata with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-in-metadata-node.png)
 
 - Transformation node will calculate Sum of the telemetry data, which fields begin with the specified **Input Key** and add Sum to the new Message payload with **Output Key**.
 
 ![image](/images/user-guide/contribution/customization/get-sum-node.png)


## Prerequisites 

We assume you have completed the following guides and reviewed the articles listed below:

  * [Getting Started](/docs/getting-started-guides/helloworld/) guide.
  * [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/) article.
  * [Rule Engine Architecture](/docs/user-guide/rule-engine-2-0/architecture/) article.`


## Customization 

In order to create new rule node, you should implement the TbNode interface

```java
package org.thingsboard.rule.engine.api;

...

public interface TbNode {

    void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException;

    void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException;

    void destroy();

}
```

and annotate your implementation with the following annotation:

```java
org.thingsboard.rule.engine.api.RuleNode 
```


## Building from sources

  We assume you have already installed Thingsboard platform and all third-party applications.

  If you don't have access to ThingsBoard instance yet, use the [Installation guides](/docs/guides/#AnchorIDInstallationGuides) to fix this.

### Source code

 You can clone source code of the project from the official [github repo](https://github.com/thingsboard/rule-node-examples).

```
git clone git@github.com:thingsboard/rule-node-examples.git
```

### Build

 - Execute the following command  from the rule-node-examples folder to build the project:
 
```
mvn clean install
``` 

 - Next, import jar-archive to your Thingsboard project as dependency library, that should be here:
 
```
./target/rule-engine-1.0.0-custom-nodes.jar
```

See separate instructions for [IDEA](https://www.jetbrains.com/help/idea/library.html#add-library-to-module-dependencies) and [Eclipse](https://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jst.j2ee.doc.user%2Ftopics%2Ftjimpapp.html).

 - The last step will be start ThingsBoard server-side container. Please, refer to the following link to see how to do this: [Running server-side container](/docs/user-guide/contribution/how-to-contribute/#running-server-side-container).
 
### UI configuration

The UI for the ThingsBoard rule nodes was configured with the help of the project that is also hosted on the official [github repo](). <br>
Please, find the **README.md** file that describes how to build the project.


```bash
TODO: paste the link
```

#### Running Rule Node UI container in hot redeploy mode

To running Rule Node UI container in hot redeploy mode:

  - first you need to change constant **forwardPort** from **8080** to **3000** in file **server.js** that should be here:
  
    ```
    thingsboard-rule-config-ui/server.js
    ```
  
  - second, you need to running UI container in hot redeploy mode. Please, refer to the following link to see how to do this: [Running UI container in hot redeploy mode](/docs/user-guide/contribution/how-to-contribute/#running-ui-container-in-hot-redeploy-mode).
  
  - last step is to execute the following command from your local directory **custom-rule-node-examples-ui**
    
    ```
    npm run build 
    ```
 
## Next steps
 
 {% assign currentGuide = "Contribution" %}{% include templates/guides-banner.md %}