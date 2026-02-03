* TOC
{:toc}

This guide explains how to validate incoming telemetry data in ThingsBoard and discard invalid values before they are stored.

As an example, we validate temperature readings received from a Thermometer sensor and ensure that only values within the supported range are stored in the database.

The guide is introductory and focuses on demonstrating the core platform capabilities rather than building configurations from scratch.    
For this reason, predefined rule chain configurations are provided and imported during the setup process.

After importing these configurations into your ThingsBoard instance, you can explore their structure, logic, and behavior, and later adapt them for your own use cases.

<hr>

## Use case

Assume your device is equipped with a Thermometer temperature sensor that periodically sends telemetry to ThingsBoard.

The Thermometer sensor supports temperature measurements in the range -40 °C to +80 °C

Your objective is to:
- Accept and store temperature readings only within the valid range
- Discard telemetry values outside this range
- Allow all other telemetry data (that does not contain temperature) to pass through unchanged

Although this scenario is simplified, it demonstrates a common telemetry validation pattern that can be applied to real-world IoT deployments.

<hr>

## Prerequisites

Before proceeding, review the [Rule Engine](/docs/user-guide/rule-engine-2-0/overview/){:target="_blank"} documentation, which explains message routing and processing concepts used in this example.

<hr>

## Validation logic

Incoming messages may **contain or omit** the <span class="code-light">temperature</span> field.   
Telemetry validation follows these rules:
- If the message **does not contain** the <span class="code-light">temperature</span>, it is considered **valid**
- If the <span class="code-light">temperature</span> key exists, its value must be within the range **-40 to 80**

Only messages that meet these conditions are stored in the database.

<br>

Telemetry validation is implemented using a [rule chain](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-chain){:target="_blank"} that filters incoming messages before they are saved. Rule chain behavior:
- Routes **all messages from devices using this rule chain** to a [filter node](/docs/user-guide/rule-engine-2-0/nodes/filter/script){:target="_blank"} with the temperature validation script
- Forwards **validated telemetry** to the [save timeseries node](/docs/user-guide/rule-engine-2-0/nodes/action/save-timeseries){:target="_blank"}, which stores data in the database

This rule chain ensures that only valid temperature readings are stored, while invalid values are filtered out before persistence.

## 1. Import the validation rule chain

1. Download the rule chain configuration file:   
   [validate_incoming_telemetry_rule_chain.json](/docs/user-guide/resources/guides/validate_incoming_telemetry_rule_chain.json){:target="_blank" download="validate_incoming_telemetry_rule_chain.json"}.
2. Navigate to the **Rule chains** page.
3. Click the **&#43;** (**Add**) button in the top-right corner and select **Import rule chain**.
4. [Upload the rule chain configuration file](/docs/{{docsPrefix}}user-guide/calculated-fields/#export--import-calculated-field){:target="_blank"} and click **Import**.
5. Click **Apply changes** to finalize the import.

<br><b><font size="3">Script used in this example</font></b>

```javascript
return typeof msg.temperature === 'undefined' || (msg.temperature >= -40 && msg.temperature <= 80);
```
{:.copy-code}

**How the script works**
- <span class="code-light">typeof msg.temperature === 'undefined'</span> **&#8702;** allows messages that do not include temperature data to pass through unchanged.
- <span class="code-light">(msg.temperature >= -40 && msg.temperature <= 80)</span> **&#8702;** validates that the temperature value is within the supported range.

<hr>

## 2. Add demo device

Next, create a demo device that publishes temperature telemetry and ensure it uses the imported validation rule chain.

1. Navigate to **Entities** **&#8702;** **Devices**.
2. Click the **&#43;** (**Add**) button in the top-right corner, select **Add new device** and create:
    - **Device name:** Thermometer
    - **Device profile:** thermostat
3. In the **thermostat** device profile settings, set the imported **Validate Incoming Telemetry** rule chain as the default rule chain for this profile.
4. Save the changes.

From this point onward, all telemetry published by devices using this profile is validated before being stored.

<hr>

## Test the configuration

To verify that the validation works as expected, open the device&#39;s **Latest telemetry** tab to monitor incoming data in real time, then publish the test telemetry messages.   
You can use the [Check connectivity](/docs/{{docsPrefix}}user-guide/ui/devices/#check-connectivity){:target="_blank"} feature, or execute the command below&#42;:

1. Temperature **within** the valid range (for example, <span class="code-light">25</span>).   
   {% if docsPrefix == null or docsPrefix == "pe/" %}
   ```bash
   curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:25}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/" %}
   ```bash
   curl -v -X POST https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:25}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/eu/" %}
   ```bash
   curl -v -X POST https://eu.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:25}"
   ```
   {: .copy-code}
   {% endif %}

2. Temperature **below** the range (for example, <span class="code-light">-50<span>).   
   {% if docsPrefix == null or docsPrefix == "pe/" %}
   ```bash
   curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:-50}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/" %}
   ```bash
   curl -v -X POST https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:-50}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/eu/" %}
   ```bash
   curl -v -X POST https://eu.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:-50}"
   ```
   {: .copy-code}
   {% endif %}

3. Temperature **above** the range (for example, <span class="code-light">100</span>).   
   {% if docsPrefix == null or docsPrefix == "pe/" %}
   ```bash
   curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:100}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/" %}
   ```bash
   curl -v -X POST https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:100}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/eu/" %}
   ```bash
   curl -v -X POST https://eu.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{temperature:100}"
   ```
   {: .copy-code}
   {% endif %}

4. A message **without** the <span class="code-light">temperature</span> field.   
   {% if docsPrefix == null or docsPrefix == "pe/" %}
   ```bash
   curl -v -X POST http://$THINGSBOARD_HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{humidity:46}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/" %}
   ```bash
   curl -v -X POST https://thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{humidity:46}"
   ```
   {: .copy-code}
   {% endif %}
   {% if docsPrefix == "paas/eu/" %}
   ```bash
   curl -v -X POST https://eu.thingsboard.cloud/api/v1/$ACCESS_TOKEN/telemetry --header Content-Type:application/json --data "{humidity:46}"
   ```
   {: .copy-code}
   {% endif %}

**&#42;** Make sure to replace:
{% if docsPrefix == null or docsPrefix == "pe/" %}- **$THINGSBOARD_HOST_NAME** with the hostname or IP address of your ThingsBoard instance.{% endif %}
- **$ACCESS_TOKEN** with the device access token

Only telemetry messages that pass validation are persisted. Invalid temperature values are discarded.

## Next steps

{% assign currentGuide = "DataProcessing" %}{% include templates/guides-banner.md %}
