---
layout: docwithnav
title: Send HTML or image inside email
description: Tutorial to send HTML page or image inside email message

to_email_node:
  0:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/add_rule_node_to_email.png
  1:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/mail_body_type.png
  2:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/dynamic_body_template.png

rule_chain:
  0:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/rule_chain.png

image_generator:
  0:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/function_generate_image_to_email.png

results:
  0:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/message_from_tb_html.png
  1:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/message_from_tb_image.png

html_generator:
  0:
    image: /images/user-guide/rule-engine-2-0/tutorials/html-in-email/html_to_email_generator.png

---

This Tutorial is to show you how to send an email message with HTML page or image inside.

* TOC
{:toc}

## Prerequisites

* [Getting Started](/docs/getting-started-guides/helloworld/) guide.
* [Rule Engine Overview](/docs/user-guide/rule-engine-2-0/overview/).
* [Send email](/docs/user-guide/rule-engine-2-0/external-nodes/#send-email-node) node.


## Message flow
- Like a start point we will use [Generator](/docs/user-guide/rule-engine-2-0/action-nodes/#generator-node) that will imitate regular rule chain messages flow: prepared message and metadata
  where we can contain some dynamic field for **to email** node.
- The [To email node](/docs/user-guide/rule-engine-2-0/transformation-nodes/#to-email-node) prepares data, destination email, and other for email message.
- The [Send email node](/docs/user-guide/rule-engine-2-0/external-nodes/#send-email-node) sends a message.

## Configuring Rule Nodes

#### Configuring "to email" node

At first, lets create and configure "to email" node.

1. Go to rule chain, find `to email` node and drag it to the canvas.
2. Specify: **Name**, **From Template**, **To Template** - we will use pattern to find an email in data of message, **Subject Template**. Select **Mail Body Type** HTML or Dynamic. We will use the Dynamic.
3. Specify HTML to **Body Template** (you can use our example).
4. Press **Add**.

{% include images-gallery.html imageCollection="to_email_node" %}

{% capture bodyTemplateExamples %}
Example of HTML page%,%loriot-account%,%templates/rule-nodes/to-email-node/html-page.md%br%
Example of HTML with image%,%basic-credential%,%templates/rule-nodes/to-email-node/html-image.md{% endcapture %}

{% include content-toggle.html content-toggle-id="bodyTemplateExamples" toggle-spec=bodyTemplateExamples %}

#### Configuring generator
At the second stage, let's configure the "generator" node:
1. Find in the Rule Chain `Generator` and drag it to the canvas
2. Specify name field, choose "1" for **message count** and, for example "2" for **Period in seconds**
3. Now we need to prepare JS code, also you can use our example.

*Here we need to specify fields in metadata, that are dynamic in "to email" node. In our example it is "isHtml" and "userEmail" fields.*

{% capture generatorCode %}
JS code for HTML page%,%html-page%,%templates/rule-nodes/to-email-node/generator-code-for-html.md%br%
JS code for image%,%image%,%templates/rule-nodes/to-email-node/generator-code-for-image.md{% endcapture %}

{% include content-toggle.liquid content-toggle-id="generatorCode" toggle-spec=generatorCode %}

#### Send email and finishing
Find and configure new **send email** node and connect all nodes between themselves, like on the screen shoot.
Save rule chain.

{% include images-gallery.html imageCollection="rule_chain" %}

## Result
Check destination email to see the result of the “to email” node work. 
We got the next message:

{% include images-gallery.html imageCollection="results" %}

## See Also

- [Send email](/docs/user-guide/rule-engine-2-0/tutorials/send-email/).

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}
