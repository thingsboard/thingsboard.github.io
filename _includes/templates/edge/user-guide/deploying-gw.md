To deploy the **ThingsBoard Gateway**:

{% if docsPrefix == 'pe/edge/' %}
{% assign iotGWdashboard = '
    ===
        image: /,
        title: Log in to the **ThingsBoard Professional Edition** instance and go to the **Dashboards** section and select the **"Group"** tab. Click the **"+"** icon to add a new group. In the **"Add entity group"** pop-up window, enter the group name in the **"Name"** field and click the **"Add"** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/1.2-click-details-dashboard-pe.webp,
        title: Then, select the **"All"** tab and find the **"ThingsBoard IoT Gateways"** dashboard. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available. Click the **"Dashboard details"** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/1.3-manage-owners-pe.webp,
        title: On the **"Dashboard details"** page click the **"Manage owner and groups"** button.
    ===
        image: /,
        title: In the **"Manage owner and groups"** pop-up window, select the newly created group from the **"Groups"** drop-down menu. Click the **"Update"** button.
    ===
        image: /,
        title: Navigate to the **Edge Management > Instances** section, then click the **“Manage edge dashboard groups”** button.
    ===
        image: /,
        title: On the **“Dashboard groups”** page, click the **“+”** icon to assign the newly created group to the Edge instance. Click the **“Assign”** button. The group and all dashboard within it will be assigned to the Edge instance.
'
%}
{% else %}
{% assign iotGWdashboard = '
    ===
        image: /,
        title: Log in to the **ThingsBoard Community Edition** instance and go to the **Edge Management > Instances** section, then click the **“Manage dashboards”** button.
    ===
        image: /images/devices-library/edge/recomputer-r1000/2-assign-dashboard.webp,
        title: On the **“Edge Dashboards”** page, click the **“+”** icon to assign the **“ThingsBoard IoT Gateways”** dashboard to the Edge instance. Click the **“Assign”** button. The **"ThingsBoard IoT Gateways"** dashboard is one of the pre-created, out-of-the-box dashboards available.
'
%}
{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=iotGWdashboard %}

{% if docsPrefix == 'pe/edge/' %}
{% assign localhost = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/3-login-to-edge-pe.webp,
        title: Open your **Edge instance**, navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: /,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}
{% else %}
{% assign localhost = '
    ===
        image: /images/devices-library/edge/recomputer-r1000/3-login-to-edge.webp,
        title: Open your **Edge instance**, navigate to the **Dashboards** section and open the **“ThingsBoard IoT Gateways”** dashboard.
    ===
        image: /,
        title: Click the **“+”** icon in the upper right corner to add a new gateway. Enter the gateway name in the **“Name”** field, and select the **“default”** device profile. Click the **“Create”** button.
'
%}
{% endif %}

{% include images-gallery.liquid showListImageTitles="true" imageCollection=localhost %}