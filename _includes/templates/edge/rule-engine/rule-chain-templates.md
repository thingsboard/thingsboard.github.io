### What Is an Edge Rule Chain Template?

An **Edge Rule Chain template** is a predefined [Rule Chain](/docs/user-guide/rule-engine-2-0/overview/#rule-chain){: target="_blank"} in **ThingsBoard**, designed specifically for use with **ThingsBoard Edge**. 
The **Rule Chain template** does not run on the **Server**. 
Instead, it serves merely as a template. 

For the **older versions of ThingsBoard Edge**, the **Rule chain** has to be assigned to an **Edge** instance before use. Only then will it work and process data from devices according to its configuration.

Starting with **Edge version 4.0**, the **Rule chain** can be created and edited right on the **Edge** instance.

### Creating Rule Chain Template on the Edge

{% assign sinceVersion = "4.0" %}
{% include templates/edge/since-edge.md %}

{% assign createRuleChainTemplatePE = '
    ===
        image: /images/pe/edge/rule-engine/1-edge-rule-chain.webp,
        title: Sign in to your <b>ThingsBoard Edge PE</b> instance and go to the <b>Rule chains</b> section. To add a new <b>Rule chain</b>, click the <b>"+"</b> button in the top right corner, and choose the <b>"Create new rule chain"</b> option.
    ===
        image: /images/pe/edge/rule-engine/2-create-rule-chain-template.webp,
        title: In the pop-up window, enter a <b>name</b> for the new rule chain and click the <b>"Add"</b> button to continue configuring the rule chain.
    ===
        image: /images/pe/edge/rule-engine/3-in-the-list.webp,
        title: The rule chain is now listed, usually at the top. Click it to begin editing.
    ===
        image: /images/pe/edge/rule-engine/4-configure-and-safe.webp,
        title: Configure your <a href="/docs/pe/user-guide/rule-engine-2-0/overview/#rule-node" target="_blank">rule nodes</a> and flow. Once the configuration is complete, click the <b>"Apply changes"</b> button.
'%}

{% assign createRuleChainTemplateCE = '
    ===
        image: /images/edge/rule-engine/1-edge-rule-chain.webp,
        title: Sign in to your <b>ThingsBoard Edge CE</b> instance and go to the <b>Rule chains</b> section. To add a new <b>Rule chain</b>, click the <b>"+"</b> button in the top right corner, and choose the <b>"Create new rule chain"</b> option.
    ===
        image: /images/edge/rule-engine/2-create-rule-chain-template.webp,
        title: In the pop-up window, enter a <b>name</b> for the new rule chain and click the <b>"Add"</b> button to continue configuring the rule chain.
    ===
        image: /images/edge/rule-engine/3-in-the-list.webp,
        title: The rule chain is now listed, usually at the top. Click it to begin editing.
    ===
        image: /images/edge/rule-engine/4-configure-and-safe.webp,
        title: Configure your <a href="/docs/user-guide/rule-engine-2-0/overview/#rule-node" target="_blank">rule nodes</a> and flow. Once the configuration is complete, click the <b>"Apply changes"</b> button.
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=createRuleChainTemplatePE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=createRuleChainTemplateCE %}
{% endif %}

### Creating Rule Chain Template on the Server

{% assign createRuleChainTemplatePE = '
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-1.webp,
        title: Sign in to your <b>ThingsBoard PE</b> instance and go to the <b>Edge Management > Rule chain templates</b> section. To add a new **Rule chain**, click the <b>"+"</b> button in the top right corner and choose the <b>"Create new rule chain"</b> option.
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-2.webp,
        title: Enter a name for your rule chain, such as <b>"Remote Farm"</b>. Click the <b>"Add"</b> button to continue configuring the rule chain.
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-3.webp,
        title: The rule chain template is now listed, usually at the top. Click it to begin editing.
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-4.webp,
        title: Within the template, configure your <a href="/docs/pe/user-guide/rule-engine-2-0/overview/#rule-node" target="_blank">rule nodes</a> and flow. Once the configuration is complete, click the <b>"Apply changes"</b> button. <i>Note: This step does not activate the rule chain on the server, it simply prepares it for deployment to an Edge.</i>
'%}

{% assign createRuleChainTemplateCE = '
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-1.webp,
        title: Sign in to your <b>ThingsBoard CE</b> instance and go to the <b>Edge Management > Rule chain templates</b> section. To add a new <b>Rule chain</b>, click the <b>"+"</b> button in the top right corner and choose the <b>"Create new rule chain"</b> option.
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-2.webp,
        title: Enter a name for your rule chain, such as <b>"Remote Farm"</b>. Click <b>"Add"</b> to confirm the creation of your new rule chain template.
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-3.webp,
        title: The rule chain template is now listed, usually at the top. Click it to begin editing.
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-4.webp,
        title: Within the template, configure your <a href="/docs/user-guide/rule-engine-2-0/overview/#rule-node" target="_blank">rule nodes</a> and flow. Once the configuration is complete, click the <b>"Apply changes"</b> button. <i>Note: This step does not activate the rule chain on the server, it simply prepares it for deployment to an Edge.</i>
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=createRuleChainTemplatePE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=createRuleChainTemplateCE %}
{% endif %}

### Assigning the Rule Chain Template to the Edge

{% assign assignRuleChainTemplateToEdgePE = '
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-1.webp,
        title: Go to the <b>Edge management > Instances</b> section and lick the <b>"Manage rule chains"</b> button.
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-2.webp,
        title: To assign the Rule chain template to the Edge, click the <b>"+"</b> button.
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-3.webp,
        title: In the pop-up window, select the rule chain from the drop-down menu and click the <b>"Assign"</b> button.
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-4.webp,
        title: The assigned rule chain template now appears at the top of the list. Assigning the rule chain template to the Edge instance enables the rule chain to process data from Edge devices according to the template configurations.
'%}

{% assign assignRuleChainTemplateToEdgeCE = '
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-1.webp,
        title: Go to the <b>Edge management > Instances</b> section and lick the <b>"Manage edge rule chains"</b> button.
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-2.webp,
        title: To assign the Rule chain template to the Edge, click the <b>"+"</b> button.
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-3.webp,
        title: In the pop-up window, select the rule chain from the drop-down menu and click the <b>"Assign"</b> button.
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-4.webp,
        title: The assigned rule chain template now appears at the top of the list. Assigning the rule chain template to the Edge instance enables the rule chain to process data from Edge devices according to the template configurations.
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=assignRuleChainTemplateToEdgePE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=assignRuleChainTemplateToEdgeCE %}
{% endif %}

## Verify Assigned Rule Chain on the Edge

{% assign verifyRuleChainPE = '
    ===
        image: /images/pe/edge/rule-engine/verify-rule-chain-template-step-1.webp,
        title: Sign in to your <b>ThingsBoard Edge PE</b> instance and go to the <b>Rule chains</b> section. To view the Rule chain configuration, click on the rule chain.
    ===
        image: /images/pe/edge/rule-engine/verify-rule-chain-template-step-2.webp,
        title: Verify that all settings and configurations are accurately reflected.
'%}

{% assign verifyRuleChainCE = '
    ===
        image: /images/edge/rule-engine/verify-rule-chain-template-step-1.webp,
        title: Sign in to your <b>ThingsBoard Edge PE</b> instance and go to the <b>Rule chains</b> section. To view the Rule chain configuration, click on the rule chain.
    ===
        image: /images/edge/rule-engine/verify-rule-chain-template-step-2.webp,
        title: Verify that all settings and configurations are accurately reflected.
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=verifyRuleChainPE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=verifyRuleChainCE %}
{% endif %}

