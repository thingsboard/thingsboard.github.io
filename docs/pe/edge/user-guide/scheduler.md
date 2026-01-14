---
layout: docwithnav-pe-edge
title: Edge Scheduler
description: Edge Scheduler

createSchedulerEvent:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/1-scheduler.webp
    title: 'Log in to the <b>ThingsBoard Platform</b> and go to the <b>Advanced features > Scheduler</b> section.'
  1:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/2-create-event.webp
    title: 'Click the <b>"+"</b> button, and fill in the fields in the pop-up window. For detailed instructions on how to configure a Scheduler event, see the  <a href="/docs/pe/user-guide/scheduler/#scheduler-event-dialog" target="_blank">Scheduler Event dialog documentation.</a>'
  2:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/3-assign-to-edge.webp
    title: 'Once the event is configured, go to the <b>Edge management > Instances</b> section and click the <b>"Manage edge scheduler events"</b> button.'
  3:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/4-select-event.webp
    title: 'On the <b>Edge Scheduler Events</b> page, click the <b>"+"</b> button and assign the event(s) to the <b>Edge</b> instance in the pop-up window.'
  4:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/5-see-on-edge.webp
    title: 'To confirm that the <b>scheduler event</b> has been successfully assigned, log in to the <b>ThingsBoard Edge</b> and go the <b>Advanced features > Scheduler</b> section.'

installTemplate:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/install-template.webp
    title: 'Log in to the <b>ThingsBoard Platform</b> and go to the <b>Solution templates</b> section. Click the <b>"Install"</b> button.'
    
remoteFarmR1:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/remote-farm-edge.webp
    title: 'Go to the <b>Edge management > Instances</b> section. Click the corresponding buttons to view the settings assigned to the <b>Edge</b> instance.'

schedulerParameters:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/6-remote-farm-edge.webp
    title: 'To view the assigned <b>scheduler events</b>, click the <b>"Manage edge scheduler events"</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/7-assigned-events.webp
    title: 'To view the <b>scheduler event configuration</b>, click the corresponding  button.'
  2:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/8-configuration-tab.webp
    title: 'The <b>"Configuration"</b> tab displays general event parameters, such as event type, message type and body.'    
  3:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/9-message-body.webp
    title: 'The <b>"Message body"</b> field is used to set the executing parameters.'    
  4:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/10-schedule-tab.webp
    title: 'The <b>"Schedule"</b> tab displays event schedule configuration.'    
  5:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/assigned-events-on-edge.webp
    title: 'To confirm that <b>scheduler events</b> are assigned, log in to the <b>ThingsBoard Edge</b> and go to the <b>Advanced features > Scheduler</b> section.'

ruleChainParameters:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/11-remote-farm-edge.webp
    title: 'To view the assigned <b>Rule Chain</b> configurations, click the <b>"Manage edge rule chains"</b> button.'
  1:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/12-rule-chains-list.webp
    title: 'The list of assigned rule chain configurations is displayed on the <b>Remote Farm R1: Rule chains</b> page'
    
dashboard:
  0:
    image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/13-edge-dashboard.webp
    title: 'The dashboard displays all required data.'
---

{% assign docsPrefix = "pe/edge/" %}
{% assign cloudDocsPrefix = "pe/" %}
{% include docs/pe/edge/user-guide/scheduler-overview.md %}