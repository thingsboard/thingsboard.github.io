To deploy the **ThingsBoard Gateway**:

{% assign iotGWdashboardPE = '
    ===
        image: /images/edge/user-guide/edge-install/6-dashboard-group-pe.webp,
        title: Log in to the **ThingsBoard Professional Edition** instance and go to the **Dashboards** section and select the **"Group"** tab. Click the **"+"** icon to add a new group. In the **"Add entity group"** pop-up window, enter the group name in the **"Name"** field and click the **"Add"** button.
    ===
        image: /images/edge/user-guide/edge-install/7-all-dashboards-pe.webp,
        title: Then, select the **"All"** tab and find the **"ThingsBoard IoT Gateways"** dashboard. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available. Click the **"Dashboard details"** button.
    ===
        image: /images/edge/user-guide/edge-install/8-manage-owner-and-groups-pe.webp,
        title: On the **"Dashboard details"** page click the **"Manage owner and groups"** button.
    ===
        image: /images/edge/user-guide/edge-install/9-add-group-pe.webp,
        title: In the **"Manage owner and groups"** pop-up window, select the newly created group from the **"Groups"** drop-down menu. Click the **"Update"** button.
    ===
        image: /images/edge/user-guide/edge-install/10-instance-secton-manage-dashboard-pe.webp,
        title: Navigate to the **Edge Management > Instances** section, then click the **“Manage edge dashboard groups”** button.
    ===
        image: /images/edge/user-guide/edge-install/11-assign-pe.webp,
        title: On the **“Dashboard groups”** page, click the **“+”** icon to assign the newly created group to the Edge instance. Click the **“Assign”** button. The group and all dashboard within it will be assigned to the Edge instance.
'
%}

{% assign iotGWdashboardCE = '
    ===
        image: /images/edge/user-guide/edge-install/6-instance-section-manage-dashboard.webp,
        title: Log in to the **ThingsBoard Community Edition** instance and go to the **Edge Management > Instances** section, then click the **“Manage dashboards”** button.
    ===
        image: /images/edge/user-guide/edge-install/7-assign.webp,
        title: On the **“Edge Dashboards”** page, click the **“+”** icon to assign the **“ThingsBoard IoT Gateways”** dashboard to the Edge instance. Click the **“Assign”** button. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboardCE %}
{% endif %}

{% assign localhostPE = '
    ===
        image: /images/edge/user-guide/edge-install/12-dashboards-on-edge-pe.webp,
        title: Open your **Edge instance**, navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: /images/edge/user-guide/edge-install/13-add-gw-pe.webp,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}

{% assign localhostCE = '
    ===
        image: /images/edge/user-guide/edge-install/8-dashboards-on-edge.webp,
        title: Open your **Edge instance**, navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: /images/edge/user-guide/edge-install/9-add-gw.webp,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}

{% if page.docsPrefix == "pe/" or page.docsPrefix contains "pe/edge" or page.docsPrefix contains "paas/" or docsPrefix == "pe/" or docsPrefix contains "paas/" %}
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=localhostPE %}
{% else %}  
    {% include images-gallery.liquid showListImageTitles="true" imageCollection=localhostCE %}
{% endif %}
