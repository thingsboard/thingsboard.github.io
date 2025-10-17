{% if (docsPrefix == "pe/") %}
    {% assign installationOptionsValue = "installation-options-pe-mqtt-broker-helm-cluster-upgrading-options" %}
{% else %}
    {% assign installationOptionsValue = "installation-options-mqtt-broker-helm-cluster-upgrading-options" %}
{% endif %}

<div class="installation-options">
    <div class="install-options-header">
       <div class="install-options-hero">
          <div class="container">
            <div class="install-options-hero-content">
                <h1>Upgrade options for TBMQ cluster setup using Helm</h1>
                <div class="install-options-description">
                    <p>To proceed, please select your Kubernetes environment below. You’ll then be guided through the complete TBMQ upgrade process tailored to your chosen platform.</p>
                </div>
            </div>
            <div class="deployment-container one-line-deployment-container">
                <div class="deployment-div">
                    {% include installation-options-cards.liquid installationOptions=installationOptionsValue active=true %}
                </div>
            </div>
          </div>
       </div>
    </div>
</div>