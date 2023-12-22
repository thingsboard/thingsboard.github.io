#### What Is an Edge Rule Chain Template?

An Edge Rule Chain Template is a predefined Rule Chain in ThingsBoard, designed specifically for use with ThingsBoard Edge. 
It is important to note that the rule chain template itself does not execute on the server. 
Instead, it serves merely as a template. 
The actual rule chain, derived from this template, begins functioning and processing data from devices according to its configuration only after it is assigned to an Edge instance and delivered to it.

#### Creating Rule Chain Template on the Server

{% assign createRuleChainTemplatePE = '
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-1.png,
        title: Sign in to your <b>ThingsBoard PE</b> instance and navigate to the "Edge Management" -> "Rule chain templates" page. Click the "+" icon in the top right corner and choose "Create new rule chain".
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-2.png,
        title: Enter a name for your rule chain, such as "Remote Farm". Click "Add" to confirm the creation of your new rule chain template.
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-3.png,
        title: Your new rule chain template will now be listed, typically at the top. Click on this newly created template to start editing it.
    ===
        image: /images/pe/edge/rule-engine/create-rule-chain-template-step-4.png,
        title: Within the template, configure your rule nodes and flow. After setting up, click the "Apply Changes" icon. Remember, this step will not activate the rule chain on the server; it merely readies it for deployment to an Edge. Let us proceed to the next step to assign this template to an Edge.
'%}

{% assign createRuleChainTemplateCE = '
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-1.png,
        title: Sign in to your <b>ThingsBoard CE</b> instance and navigate to the "Edge Management" -> "Rule chain templates" page. Click the "+" icon in the top right corner and choose "Create new rule chain".
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-2.png,
        title: Enter a name for your rule chain, such as "Remote Farm". Click "Add" to confirm the creation of your new rule chain template.
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-3.png,
        title: Your new rule chain template will now be listed, typically at the top. Click on this newly created template to start editing it.
    ===
        image: /images/edge/rule-engine/create-rule-chain-template-step-4.png,
        title: Within the template, configure your rule nodes and flow. After setting up, click the "Apply Changes" icon. Remember, this step will not activate the rule chain on the server; it merely readies it for deployment to an Edge. Let us proceed to the next step to assign this template to an Edge.
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=createRuleChainTemplatePE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=createRuleChainTemplateCE %}
{% endif %}

#### Assigning the Rule Chain Template to ThingsBoard Edge

{% assign assignRuleChainTemplateToEdgePE = '
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-1.png,
        title: Navigate to the "Edge Management" -> "Instances" page. On the row corresponding to your Edge instance, click the "Manage rule chains" icon.
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-2.png,
        title: In the top right corner, click the "+" icon "Assign to edge".
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-3.png,
        title: From the list, select the rule chain you have recently created and then click the "Assign" button.
    ===
        image: /images/pe/edge/rule-engine/assign-rule-chain-template-step-4.png,
        title: The assigned rule chain template will now appear at the top of the list. This action triggers the process of delivering the rule chain template to the Edge. Once the template reaches the Edge, it becomes an active rule chain. It then starts processing data from connected devices according to the configurations set within the template.
'%}

{% assign assignRuleChainTemplateToEdgeCE = '
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-1.png,
        title: Navigate to the "Edge Management" -> "Instances" page. On the row corresponding to your Edge instance, click the "Manage rule chains" icon.
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-2.png,
        title: In the top right corner, click the "+" icon "Assign to edge".
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-3.png,
        title: From the list, select the rule chain you have recently created and then click the "Assign" button.
    ===
        image: /images/edge/rule-engine/assign-rule-chain-template-step-4.png,
        title: The assigned rule chain template will now appear at the top of the list. This action triggers the process of delivering the rule chain template to the Edge. Once the template reaches the Edge, it becomes an active rule chain. It then starts processing data from connected devices according to the configurations set within the template.
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=assignRuleChainTemplateToEdgePE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=assignRuleChainTemplateToEdgeCE %}
{% endif %}

#### Verify Assigned Rule Chain on the Edge

{% assign verifyRuleChainPE = '
    ===
        image: /images/pe/edge/rule-engine/verify-rule-chain-template-step-1.png,
        title: Sign in to your <b>ThingsBoard Edge PE</b> instance and navigate to the "Rule chains" page. Click on the rule chain that was recently assigned to open and view it.
    ===
        image: /images/pe/edge/rule-engine/verify-rule-chain-template-step-2.png,
        title: Ensure that the rule chain appears as it was configured on the server, verifying that all settings and configurations are accurately reflected.
'%}

{% assign verifyRuleChainCE = '
    ===
        image: /images/edge/rule-engine/verify-rule-chain-template-step-1.png,
        title: Sign in to your <b>ThingsBoard Edge CE</b> instance and navigate to the "Rule chains" page. Click on the rule chain that was recently assigned to open and view it.
    ===
        image: /images/edge/rule-engine/verify-rule-chain-template-step-2.png,
        title: Ensure that the rule chain appears as it was configured on the server, verifying that all settings and configurations are accurately reflected.
'%}

{% if docsPrefix == "pe/edge/" %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=verifyRuleChainPE %}
{% else %}
{% include images-gallery.liquid showListImageTitles="true" imageCollection=verifyRuleChainCE %}
{% endif %}