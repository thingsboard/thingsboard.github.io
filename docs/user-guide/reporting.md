---
layout: docwithnav
title: Reporting
description: Reporting Guide 

---

{% assign feature = "Reporting" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

### Overview

ThingsBoard allows you to generate reports using existing dashboards.
Reports can be generated from currently opened dashboard or can be scheduled using [Scheduler](/docs/user-guide/scheduler/#generate-report) capabilities.

<br/>

![image](/images/user-guide/reporting.svg)

### Reports Server

Reports Server is standalone service used to generate reports by rendering dashboards in headless browser.

On each generate report request ThingsBoard node sends request to Reports Server using configured endpoint URL. 
Reports Server opens web page with target dashboard url in the headless browser and waits until page renders.
Then it captures dashboard web page to specified format (*PDF \| PNG \| JPEG*) and sends captured data as response to ThingsBoard.

System administrator is able to configure Reports Server endpoint URL using [thingsboard.yml](/docs/user-guide/install/config/). You can find sample configuration below:

```yaml
# Reports parameters
reports:
  server:
    endpointUrl: "${REPORTS_SERVER_ENDPOINT_URL:http://localhost:8383}"
```

### Generate Report from Dashboard

Tenant Administrator or Customer User is able to generate report from the currently opened dashboard.

- Click to **Export Dashboard** button located in the right side of dashboard toolbar  

![image](/images/user-guide/ui/reporting-export-dashboard-button.png)

- In the expanded drop-down menu select desired dashboard export option 

![image](/images/user-guide/ui/reporting-export-dashboard-options.png)

- After report generation will be started

![image](/images/user-guide/ui/reporting-export-dashboard-progress.png)

- Finally, report file in the selected format will be automatically downloaded.  

### Generate Report by schedule

Report generation can be invoked by schedule using [**Generate Report** Scheduler Event](/docs/user-guide/scheduler/#generate-report).

### Generate Report Rule Chain

Scheduled reports generation is supported by default **Root Rule Chain** of ThingsBoard PE. By default message with type **Generat Report** is routed to **Generate Report Rule Chain**.   

![image](/images/user-guide/ui/reporting-pe-root-rule-chain-switch.png)

**Generate Report Rule Chain** has [**Generate Report** Rule Node](/docs/user-guide/rule-engine-2-0/pe/action-nodes/#generate-report-node)
which performs report generation according to report configuration taken from message body. If message body has field ```sendEmail``` with value ```true``` 
the message with report file reference in ```attachments``` field of metadata is routed to email related Rule Nodes.
Email Rule Nodes prepare email message with report file in attachments and send it to configured recipients.  

![image](/images/user-guide/ui/reporting-generate-report-rule-chain.png)

### Reports Widget

ThingsBoard provides access to generated report files via **Reports** Widget which is part of **Files** Widgets Bundle.

![image](/images/user-guide/ui/reporting-reports-widget.png)
 
The widget has ability to filter report files using time range component and ability to search files by name.
Each report file can be downloaded by clicking on **Download file** button. 