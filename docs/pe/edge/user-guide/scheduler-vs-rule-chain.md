---
layout: docwithnav-pe-edge
title: Scheduler vs. Rule Chain Templates - When to Use Each One
description: Scheduler vs. Rule Chains Templates

example:
    0:
      image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/first-event.webp
      title: 'The <b>first scheduler event</b> will send command <b>{ “action”&#58; “stop_pump” }</b> to stop the pump every night at 7 PM. Select <b>Send RPC Request to Device</b> as the <b>Event type</b>.'
    1:
      image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/second-event.webp
      title: 'The <b>second scheduler event</b> will send command <b>{ "action"&#58; "check_pump_status" }</b> to check the pump status every night at 7&#58;10 PM. Enter <b>"Custom"</b> as the <b>Event type</b> and <b>"Other"</b> as the <b>Message type</b>.'
    2:
      image: https://img.thingsboard.io/pe/edge/user-guide/scheduler/rule-chain-template.webp
      title: 'In the <b>Rule Chain template</b>&#58;<ul><li>The <b>first scheduler event</b> (turn off pump) enters the rule chain as <b>RPC Request to Device</b>. It comes into <b>Message Type Switch</b>, routed via the <b>"RPC Request to Device"</b> link to the <b>"rpc call request"</b> node.</li><li>The <b>second scheduler event</b> (check pump status) enters the rule chain as a custom message. The <b>"check pump status"</b> script confirms that the message is the <b>second scheduler event</b>. Then, the <b>"originator telemetry"</b> node fetches <b>pumpStatus</b>. The <b>"check pump status script"</b> checks if it&#39;s still <b>"ON"</b>. If it is, the rule chain template triggers the <b>alarm</b>.</li></ul>'
---


{% assign docsPrefix = "pe/edge/" %}
{% assign cloudDocsPrefix = "pe/" %}
{% include docs/pe/edge/user-guide/scheduler-vs-rule-chain.md %}